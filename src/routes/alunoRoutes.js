import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const route = Router();

route.get('/', AlunoController.index);
route.post('/aluno', AlunoController.create);

export default route;
