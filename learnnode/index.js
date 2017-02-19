let http = require("http");

let server = http.createServer(function(req, res){ 
 res.setHeader("Content-type","text/html");
 res.end("<h1>Hello World</h1>");
});

let server2 = http.createServer(function(req, res){ 
 res.setHeader("Content-type","text/html");
 res.end("<h1>Hello World</h1>");
});

server2.listen(1213,"localhost",()=>{
    console.log("Server started, listening on port: " +1213);

});
