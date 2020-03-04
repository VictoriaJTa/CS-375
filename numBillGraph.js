let mysql = require('mysql');
let connectionConfig = require('./config.json');
let con = mysql.createConnection(connectionConfig);

con.connect(function(err){
    if(err){
        console.log('Error connecting to database for grapher');
    }
    else{
        console.log("Datababse successffully connect for grapher");
    }
});

//Gets Bill by Subjects
con.query('SELECT bill.primarySubject FROM bill', 
function(err,rows,fields){
    if(err){
        console.log('Error during query processing for grapher/bill by subject');
    }   
    else{
        var billDict = {};
        for(let i=0; i<rows.length; i++){
            let rowElement = rows[i].primarySubject
            if(rowElement === ""){
                continue;
            }
            else if(rowElement in billDict){
                billDict[rowElement] = billDict[rowElement] + 1;
            }
            else if(rowElement in billDict === false){
                billDict[rowElement] = 1;
            }
        }
        console.log("Bill by Subject Stats :",billDict);
    }
});


//START OFF D3.JS
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleBand().range([0, width]).padding(0.4),
    y = d3.scaleLinear().range([height, 0]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

// GRAPH TITLE
// svg.append("text")
//    .attr("transform", "translate(100,0)")
//    .attr("x", 50)
//    .attr("y", 50)
//    .attr("font-size", "24px")
//    .text("Number of Bills by Subject")

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = Object.entries(billDict)

    x.domain(data.map(function(d) { return d[0]; }));
    y.domain([0, d3.max(data, function(d) { return d[1]; })]);

    //data input
    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        //extra
        .on("mouseover", onMouseOver) //Add listener for the mouseover event
        .on("mouseout", onMouseOut)   //Add listener for the mouseout event
        //
        .attr("x", function(d) { return x(d[0]); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("width", x.bandwidth())
        //more extra
        .transition()
        .ease(d3.easeLinear)
        .duration(400)
        .delay(function (d, i) {
            return i * 50;
        })
        //extra above
        .attr("height", function(d) { return height - y(d[1]); });


    //X-AXIS LABEL
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .append("text")
        .attr("y", height - 250)//title_x pos y
        .attr("x", width - 100)//title_x pos x
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Subject");

    //Y-AXIS LABEL
    g.append("g")
        .call(d3.axisLeft(y).tickFormat(function(d){ return d;}).ticks(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "-3.8em")
        .attr("text-anchor", "end")
        .attr("stroke", "black")
        .text("Number of Bills");


// //mouseover event handler function
function onMouseOver(d, i) {
    d3.select(this).attr('class', 'highlight');
    d3.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth() + 5)
        .attr("y", function(d) { return y(d[1]) - 10; })
        .attr("height", function(d) { return height - y(d[1]) + 10; });

    g.append("text")
        .attr('class', 'val') 
        .attr('x', function() {
            return x(d[0]);
        })
        .attr('y', function() {
            return y(d[1]) - 15;
        })
        .text(function() {
            return [d[0]+": "+d[1]];  // Value of the text
        });
}

//mouseout event handler function
function onMouseOut(d, i) {
    // use the text label class to remove label on mouseout
    d3.select(this).attr('class', 'bar');
    d3.select(this)
        .transition()     // adds animation
        .duration(400)
        .attr('width', x.bandwidth())
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return height - y(d[1]); });

    d3.selectAll('.val')
        .remove()
}