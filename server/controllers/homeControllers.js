/* eslint-disable prettier/prettier */
const index = (req, res) => {
  res.render('home/index', { title: 'ProyectNotes' });
};
const greeting =(req, res)=>{
    // res.send('hola campeon de la Fullstack web')
      res.status(200).json({ message: 'hola campeon de la Fullstack web' });
    }
const about = (req, res) => {
  res.render('home/about',{title:'acerca de projnotes'})
}
export default {
  index,
  greeting,
  about,

};
