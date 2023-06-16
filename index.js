const indianWatch = require("./watches/indianWatch");
const usaWatch = require('./watches/usaWatch');
const russiaWatch = require("./watches/russiaWatch");

setInterval(indianWatch.indianWatch, 1000);
setInterval(usaWatch.usaWatch, 1000);

setInterval(russiaWatch.russiaWatch, 1000);



