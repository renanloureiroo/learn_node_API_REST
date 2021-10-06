import Sequelize, { Model } from 'sequelize';

import app from '../config/app';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          msg: "Don't empty",
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "Don't empty",
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${app.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
