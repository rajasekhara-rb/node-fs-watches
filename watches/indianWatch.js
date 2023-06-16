const fs = require('fs');


const indianWatch = () => {
    let today = new Date();

    // setting the date time to the local settings 
    let options = { timeZone: "Asia/Kolkata" }; options


    let time = today.toLocaleTimeString("en-us", options);

    let date = today.toLocaleDateString("it-IT", options);

    storeData("indianWatch.txt", `${date} ${time}`)

}

const storeData = (fileName, data) => {
    // data print in next line 
    data = `${data}\n`;

    // Append the data to the file 

    fs.appendFile(fileName, data, "utf-8", (err) => {
        if (err) throw err
        console.log("Data is stored");
    })

}

module.exports={
    indianWatch,
}