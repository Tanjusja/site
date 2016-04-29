var mongoose = require('../config/mongoose');
Schema = mongoose.Schema; 
var shema = new Schema({
	email:{
		type:String,
		unique:true,
		required:true
	},
	login:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	status:{
		type:String
	}
});
exports.User = mongoose.model('users',shema);