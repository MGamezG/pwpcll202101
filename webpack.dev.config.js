const path= require('path');
module.exports = {
    //establecer el modo de este archivo 
    mode:'development', 
    //1.- espesificar el archivo de entrada
    entry:'./client/index.js',
    //2.- espesificando la salida 
    output:{
        //3.- ruta absoluta
        path: path.join(__dirname,'public'),
        //4.- nombre del archivo de salida
        filename:'js/bundle.js',
        //5.- ruta del path publico
        publicPath:'/'
    },
    devServer:{
        static: path.join(__dirname,'public'),
        port:8085,
        host:'localhost'
    }
}