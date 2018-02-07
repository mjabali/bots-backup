const request = require('request');
const fs = require('fs');
const url = 'http://localhost:8080/management-api/v1/bots/';

request(url, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    var botsList = JSON.parse(body);
    console.log("Count: " + botsList.count);
    var botItems = botsList.items;
    for(i in botItems){
        console.log("Downloading... " + botItems[i].name + " with Bot ID: " + botItems[i].id);
        var options = {
            url: url + botItems[i].id,
            headers: {
                'Content-Type':'application/zip'
            }
        }
        request(options).pipe(fs.createWriteStream('bots/' + botItems[i].name + '.zip'));
    }
  });
