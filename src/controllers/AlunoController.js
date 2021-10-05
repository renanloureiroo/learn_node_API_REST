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
      const novoAluno = await Aluno.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        idade: req.body.idade,
        peso: req.body.peso,
        altura: req.body.altura,
      });

      return res.json(novoAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }
}

export default new AlunoController();
