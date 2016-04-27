var express = require('express'); /*подключили модуль express*/
var http = require('http'); /*подключили модули, они встроенные*/
var path = require('path'); /*подключили модули, они встроенные*/
var favicon = require('static-favicon'); /*подключили модули, они встроенные*/
var logger = require('morgan'); /*подключили модули, они встроенные*/
var cookieParser = require('cookie-parser'); /*подключили модули, они встроенные*/
var bodyParser = require('body-parser'); /*подключили модули, они встроенные*/

var routes = require('./routes'); /*подключили файл index.js в папке routes*/
var users = require('./routes/user'); /*подключили файл index.js*/
var video=require('./routes/video'); /*ПЕРЕМЕННАЯ*/

var anketa=require('./routes/anketa'); 
var canvas=require('./routes/canvas');
var drop=require('./routes/drop');
var map=require('./routes/map');
var storage=require('./routes/storage');
var config=require('./config'); /*подключаемся к index.js*/
var add=require('./routes/add');

var app = express(); /*инициализировали объект*/

// view engine setup
app.set('views', path.join(__dirname, 'views')); /*указываем папку с шаблоном, path-стандарт. метод, все наши шаблоны находяться в views-папка*/
app.set('view engine', 'jade'); /*установили сам движок шаблонизатора, режим jade(eps)*/

app.use(favicon()); 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); /*указали что все статик-файлы находяться в папке public*/
app.use(app.router);

app.get('/', routes.index); /*прослушиваем главную страницу, маршрутизатор; вызывается routes.index; смотреть index.js*/
app.get('/users', users.list);
app.get('/video',video.index); /*ПРОСЛУШИВАТЕЛЬ*/
app.get('/anketa',anketa.index);
app.get('/canvas',canvas.index);
app.get('/drop',drop.index);
app.get('/map',map.index);
app.get('/storage',storage.index);

app.get('/:id',routes.index); /*он должен быть последним, запускается как любой параметр, если имя отличается от главной (/)или users*/
app.get('/:id/add',add.index);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) { /*если не нужно останавливаться на этой функции, то переходим к след.*/
    var err = new Error('Not Found');
    err.status = 404;
    next(err); /*обработка ошибок*/
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') == 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message, /*вывели ошибки*/
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//app.listen(8129);
app.listen(config.get('port'));
module.exports = app;
