import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create({
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
      });

      return res.json({
        user: novoUser,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new UserController();
