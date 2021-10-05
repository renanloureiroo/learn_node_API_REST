import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const route = Router();

route.get('/', AlunoController.index);
route.get('/:id', AlunoController.show);
route.post('/', loginRequired, AlunoController.create);
route.put('/:id', loginRequired, AlunoController.update);
route.delete('/:id', loginRequired, AlunoController.delete);

export default route;
