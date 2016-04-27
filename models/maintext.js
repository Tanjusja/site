var mongoose = require('../config/mongoose');
Schema = mongoose.Schema; 
var shema = new Schema({
	name:{
		type:String,
		required:true
	},
	body:{
		type:String,
		unique:true,
		required:true
	},
	url:{
		type:String,
		unique:true,
		required:true
	},
	picture:{
		type:String
	}
});
exports.Maintext = mongoose.model('maintexts',shema);