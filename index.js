var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<html><body><h1>Hello Universe from Github!</h1></body><iframe width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=036e2b42-241d-4888-8489-071c763663fa&autoAuth=true&ctid=8b9cef57-e6fc-499a-9ff8-45c1cf0dd671&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWItcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe></html>");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);