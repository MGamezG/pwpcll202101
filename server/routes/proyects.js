/* eslint-disable prettier/prettier */
import { Router } from 'express';
// importar el controlador de proyectos
import projectsController from '@server/controllers/projectController';

const router = new Router();

// "/proyect" "/proyect/index"
router.get(['/','/index'],projectsController.index);

// "/prouect/add"
router.get(['/add'],projectsController.add);


export default router;
