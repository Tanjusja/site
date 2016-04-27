
var Maintext = require('../models/maintext').Maintext; //создали объект модели
/* GET home page. */
exports.index = function(req, res){
//    res.render('add');
	var maintext = new Maintext({
	name: 'Урreа',
	body:'Текgfdст2dsf',
	url:'hortrbfdsf',
	picture:'media/img/3.png'
});
//console.log('ok');
var maintext=maintext.save(function(err,main){
	console.log('ok');
})
}