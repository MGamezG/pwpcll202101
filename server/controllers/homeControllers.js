/* eslint-disable prettier/prettier */
const index = (req, res) => {
  res.render('index', { title: 'ProyectNotes' });
};
const greeting =(req, res)=>{
    // res.send('hola campeon de la Fullstack web')
      res.status(200).json({ message: 'hola campeon de la Fullstack web' });
    }
export default {
  index,
  greeting,
};
