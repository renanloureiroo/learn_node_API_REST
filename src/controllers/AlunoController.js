import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();

      return res.json(alunos);
    } catch (error) {
      return res.json(null);
    }
  }

  async create(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);

      return res.json(novoAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.msg),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ erros: ['Missing ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ erros: ['Aluno não encontrado'] });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ erros: e.map((err) => err.msg) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ erros: ['Missing ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ erros: ['Aluno não encontrado'] });
      }

      await aluno.update(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ erros: e.map((err) => err.msg) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ erros: ['Missing ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ erros: ['Aluno não encontrado'] });
      }

      await aluno.destroy();

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ erros: e.map((err) => err.msg) });
    }
  }
}

export default new AlunoController();
