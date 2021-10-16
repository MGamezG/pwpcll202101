
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from '@s-routes/index';
import usersRouter from '@s-routes/users';

//webpack modules
import Webpack, { webpack } from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackConfig from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';


//consultar el modo en que se ejecuta la aplicacion
const env = process.env.NODE_ENV || 'development';



//se crea la aplicacion express
var app = express();

//verificando el modo de ejcecucion de la aplicacion
if(env === 'development') {
  console.log('> Excecuting in Development Mode: Webpack Hot Reloading');
  //paso 1.- agregando la ruta del HMR
  //reload=true: habilita la recarga del frontend cuando hay cambios en el codigo fuente del forntend
  //timeout=1000: teimpo de espera entre recarga y carga 
  WebpackConfig.entry = ['webpack-hot-middleware/client?reload=true&timeout=1000', WebpackConfig.entry];
  //paso 2.- agregamos los plugins
  WebpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());
 

  //paso 3.- crear el compilador de webpack

  const compiler = webpack(WebpackConfig);

  //paso 4.- agregando el middleware a la cadena de middleware de la aplciacion
  app.use(WebpackDevMiddleware(compiler,{
    publicPath: webpackDevConfig.output.publicPath
  }));

  //paso 5.- agregando el WHM 
  app.use(WebpackHotMiddleware(compiler));

} else{
  console.log('> Excecuting in Production Mode...');
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev')); //req=>[middelware 01] => [middelware 02]
app.use(express.json());// transformador a json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//manejo e cookies
app.use(express.static(path.join(__dirname,'..', 'public')));// refrerencia a la parte estatica 


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
