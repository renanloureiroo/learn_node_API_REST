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

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.json({
          errors: ['Id não informado'],
        });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.json({
          errors: ['Usuário não encontrado'],
        });
      }

      user.update(req.body);

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.json({
          errors: ['Id não informado'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.json({
          errors: ['Usuário não encontrado'],
        });
      }
      user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
