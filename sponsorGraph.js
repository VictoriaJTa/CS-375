let mysql = require('mysql');
let connectionConfig = require('./config.json');
let con = mysql.createConnection(connectionConfig);

con.connect(function(err){
    if(err){
        console.log('Error connecting to database for grapher sponsor');
    }
    else{
        console.log("Datababse successffully connect for grapher sponsor");
    }
});

//Gets Sponsors by party
con.query('SELECT member.party FROM member', 
    function(err,rows,fields){
        if(err){
            console.log('Error during query processing for grapher/sponsor by party');
        }   
        else{
            var sponsorDict = {};
            for(let i=0; i<rows.length; i++){
                let rowElement = rows[i].party
                if(rowElement === ""){
                    continue;
                }
                else if(rowElement in sponsorDict){
                    sponsorDict[rowElement] = sponsorDict[rowElement] + 1;
                }
                else if(rowElement in sponsorDict === false){
                    sponsorDict[rowElement] = 1;
                }
            }
            console.log("Sponsors by Party :",sponsorDict);
        }
    });

//START OFF D3.JS

// margin
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    radius = width/2;

// color range
var color = d3.scaleOrdinal()
    .range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2"]);

// pie chart arc. Need to create arcs before generating pie
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

// arc for the labels position
var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

// generate pie chart and donut chart
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d[1]; });

// Creation of Sponsor by Party Pie Chart
//import data 
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// "g element is a container used to group other SVG elements"
var g = svg.selectAll(".arc")
    .data(pie(Object.entries(sponsorDict)))
    .enter().append("g")
    .attr("class", "arc");

// append path 
g.append("path")
    .attr("d", arc)
    .style("fill", function (d) { return color(d.data[0]); })
    //new animation below;
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .attrTween("d", tweenPie);

// append text
g.append("text")
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    //new animation above
    .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
    .attr("dy", ".35em")
    .style("text-anchor", "middle") //optional 
    .text(function (d) { return d.data[0]; });

//anamation for pie chart
function tweenPie(b){
    b.innerRadius = 0;
    var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
    return function(t) { return arc(i(t));}
}