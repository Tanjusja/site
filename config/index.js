var nconf = require('nconf'); //модуль который подключили
var path = require('path');//глобальный модуль, отвечает за работу с путями
nconf.argv()
	 .env()
	 .file({file:path.join(__dirname,'config.json')}); //мы можем подключаться из любой директории
module.exports = nconf; //module-глобальный объект

//создали конфиг через него подключаемся к json
//обращается к конфиг json переводим в формат понятный node
//