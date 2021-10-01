import User from '../models/User';
import { } from 'jsonwebtoken';

class TokenController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não encontrado'],
      });
    }
    return res.json(user);
  }
}

export default new TokenController();
