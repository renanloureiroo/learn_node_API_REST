import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/', UserController.index);
router.post('/', UserController.create);

export default router;

/*
index => lista todos os usuários
store/create => cria um novo usuário
delete => deleta um usuário
show => mostra um usuário
update => atualiza um usuário
*/
