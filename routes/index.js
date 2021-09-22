var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const viewModel =  { title: 'Express', author:'Miguel Angel', appName:'webApp' };
  res.render('index',viewModel); //view model
});
// nueva ruta 
router.get('/greeting', function(req, res, next) {
 // res.send('hola campeon de la Fullstack web')
 res.status(200).json({ message: 'hola campeon de la Fullstack web'})
})
// nueva ruta 2 
router.get('/welcome', function(req, res, next) {
  res.send('hola, como estas? listo para un buen dia')
})
//[browser]-->requests{info}-->http-->[server/]-->get-->[]-->[/geeting]res-->[]-->[browser]
module.exports = router;
