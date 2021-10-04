import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, UserController.index);
// router.get('/:id', UserController.show);

router.post('/', UserController.create);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
index => lista todos os usuários
store/create => cria um novo usuário
delete => deleta um usuário
show => mostra um usuário
update => atualiza um usuário
*/
