import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Renan',
      sobrenome: 'Loureiro',
      email: 'renanpl47@gmail.com',
      idade: 25,
      peso: 120,
      altura: 1.81,
    });
    return res.json({
      aluno: novoAluno,
    });
  }
}

export default new HomeController();
