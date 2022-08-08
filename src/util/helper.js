function printDate() {
    const d=new Date().getDate()+1;
    console.log("today date is :"+d);
}

function printMonth() {
    const d=new Date().getMonth();
    console.log("today month is :"+d);
}

function getBatchInfo() {
    console.log("plutonium, W3D3, the topic for today is Nodejs module system");
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;