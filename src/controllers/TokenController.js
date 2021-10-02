import jtw from 'jsonwebtoken';
import User from '../models/User';

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

    const isValidPassword = await user.checkPassword(password);

    if (!isValidPassword) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }
    const { id } = user;
    const token = jtw.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
