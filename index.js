const request = require('request');
const fs = require('fs');
const url = 'http://127.0.0.1:8080/management-api/v1/bots/';

request(url, function (error, response, body) {
    if(error){
        console.log('Error while running the server:\n', error); // Print the error if one occurred
    }
    var botsList = JSON.parse(body);
    console.log("Count: " + botsList.count);
    var botItems = botsList.items;
    for(i in botItems){
        var options = {
            url: url + botItems[i].id,
            headers: {
                'Content-Type':'application/zip'
            }
        }
        download(options, botItems[i].name)
        .then(console.log("Downloading... " + botItems[i].name + " with Bot ID: " + botItems[i].id));
    }  
  });

  async function download(options, botName){
    request(options).pipe(fs.createWriteStream('bots/' + botName + '.zip'));

  }
