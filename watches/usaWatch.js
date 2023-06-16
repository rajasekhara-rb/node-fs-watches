const fs = require('fs');

const usaWatch = () => {
    let today = new Date();
    let options = { timeZone: 'America/Chicago' }

    let date = today.toLocaleDateString('it-IT', options);

    let time = today.toLocaleTimeString('en-us', options);

    storeData('usaWatch.txt', `${date} ${time}`);

}

const storeData = (fileName, data) => {
     data = `${data}\n`;
    fs.appendFile(fileName, data, "utf-8", (err) => {
        if (err) throw err
        console.log("data stored")
    })
}

module.exports={
    usaWatch,
}