/* GET home page. */
var Maintext = require('../models/maintext').Maintext;
exports.index = function(req, res){
  if(req.params.id){
    var index=req.params.id;
	} else {
		var index='Hello';
	}
	findOne({url:index}, function(err,text){ //возвращает строку из коллекции (2 параметра: условие-json,  функция)
		if(!text){
		text = {
		name: 'Добро пожалуйста',
		body: 'Текст'
			}
		}
	});
  res.render('index', { title: text });
  
};
