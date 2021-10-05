import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          args: [3, 255],
          msg: 'Campo nome deve ter entra 3 e 255 caracteres',
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          args: [3, 255],
          msg: 'Campo sobrenome deve ter entra 3 e 255 caracteres',
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Idade deve ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate: {
          isFloat: {
            msg: 'Peso deve ser um número real',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate: {
          isFloat: {
            msg: 'Altura deve ser um número real',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
