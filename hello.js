var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World! 222'); 
  res.end(); 
}).listen(8080); 


