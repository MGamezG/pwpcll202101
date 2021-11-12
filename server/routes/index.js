// improtando el router de home
import home from './home';
// importando router de users
import userRouter from './user';
// importando router para projects
import projectRouter from './proyects';

/* GET home page. */

const addRoutes = (app) => {
  // home routes
  app.use('/', home);
  // projects routes
  app.use('/projects', projectRouter);
  app.use('/', userRouter);
};

export default {
  addRoutes,
};
