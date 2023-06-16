const fs = require('fs');

const russiaWatch = () => {
    let today = new Date();
    let options = { timeZone: "Europe/Moscow" }
    let date = today.toLocaleDateString('it-IT', options);

    let time = today.toLocaleTimeString("en-us", options);

    storeData("russiaWatch.txt", `${date} ${time}`);

}

const storeData = (fileName, data) => {
    data = `${data}\n`
    fs.appendFile(fileName, data, 'utf-8', (err) => {
        if (err) throw err
        console.log("data stored");
    })
}

module.exports = {
    russiaWatch,
}