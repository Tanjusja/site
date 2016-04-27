var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.get('mongoose:uri'),config.get('mongoose.options')); // получаем настройку mongoose
//аналогично mongoose.connect('mongodb:localhost/kurs')
module.exports = mongoose;
