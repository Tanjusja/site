var http = require('http'); /*подключили модули, который связывает сервер*/
http.createServer(function(req,res){ /*создаем сервер с колл-бэк функцией; все что мы видим на странице это res: 2 вида:res-вывод заголовков и вывод html*/
	res.writeHead(200, {'Content-type':'text/plain'}); /*если надо вызвать заголовок*/
	res.write('Hello world'); /*вывод html*/
	
	res.end('\<br>\Hi'); /*он обязателен!*/
	/**/
	
	}).listen(8128); /*порт слушаем*/
	console.log('Server running 8128'); /*сообщение*/