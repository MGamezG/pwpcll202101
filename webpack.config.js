module.exports = {
    //1.- espesificando archivo de entradas
    entry: './client/index.js',
    //2.- espesificar el archivo de salida 
    output:{
        path: '/public', //3.- ruta absolita de salida
        filename:'bundle.js' //4.- nombre del archivo de salida

    },
    devServer:{
        static:'./public'
    }
};