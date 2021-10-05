import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const route = Router();

route.get('/', AlunoController.index);
route.post('/', AlunoController.create);
route.get('/:id', AlunoController.show);
route.put('/:id', AlunoController.update);
route.delete('/:id', AlunoController.delete);

export default route;
