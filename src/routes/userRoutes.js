import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.delete('/:id', UserController.delete);

export default router;

/*
index => lista todos os usuários
store/create => cria um novo usuário
delete => deleta um usuário
show => mostra um usuário
update => atualiza um usuário
*/
