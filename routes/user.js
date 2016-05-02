var User = require('../models/user').User;
exports.index = function(req, res){
	//action выводит форму
	//console.log(req.param('err'));
	if(req.param('err')){
		var err='Ошибка!!!!';
	}
	else{
		var err='';
	}
  //res.send('respond with a resource'); текст будет шаблонным, надо его заменить res.render()
  res.render('user', {err:err});//user.jade
};
exports.add = function(req, res){
  //console.log(req.body);
  var email = req.body.email;//обращаемся к конкретному элементу на странице
  var login = req.body.login;
  var password = req.body.password;
  var users = new User({
	email: email,
	login: login,
	password: password,
	status: 'new'
  });
	users.save(function(err,user){
		
			if(user){
				console.log('Okkkkkkk');
				res.redirect('/');
			}
			else {
			console.log(err);
			console.log('Nehoroshoooo!');
			res.redirect('/users?err=true');
			}
				
	});
	//res.redirect('/');//чтоб не произошло зависания
}