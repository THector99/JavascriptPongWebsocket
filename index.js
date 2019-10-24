var server = require('ws').Server;
var s = new server({ port: 1234});

s.on('connection', function(ws){
		ws.on('message',function(message){
				console.log("Received: "+ message);
				
				s.clients.forEach(function e(client){
					client.send(message);
				});
				
				//ws.send(message);
		});
		
		ws.on('close', function(){
			console.log("I lost a client");
		});
		
		//console.log("one more client connected");
});