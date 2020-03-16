let mysql = require('mysql');
let connectionConfig = require('./config.json');
let con = mysql.createConnection(connectionConfig);

con.connect(function(err){
    if(err){
        console.log('Error connecting to database for general Graph Info');
    }
    else{
        console.log("Datababse successfully connect for general Graph Info");
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
            };
            //console.log("Bill by Subject Stats :",billDict);
            var billArr = [];
            for(var b=0; b<Object.keys(billDict).length; b++){
                    billArr.push({
                        subject: Object.keys(billDict)[b],
                        amount: Object.values(billDict)[b]
            });
            }
            //console.log("Bill by Subject Stats :",billArr);
            //var BBSBarGraph= new BarChart("body", "True", billArr, "subject", "amount", 500, 500, "Number of Bills")
        }
    }
);

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
            //console.log("Sponsors by Party :",sponsorDict);
            var sponsorArr = [];
            for(var b=0; b<Object.keys(sponsorDict).length; b++){
                sponsorArr.push({
                    party: Object.keys(sponsorDict)[b],
                    amount: Object.values(sponsorDict)[b]
              });
            }
            //console.log("Sponsors by Party :",sponsorArr);
           // var SBPPieChart = new PieChart("body", sponsorArr, "party", "amount", 500, 500)

        }
    }
);
