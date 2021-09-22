import Sequelize from 'sequelize';
import databseConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(databseConfig);

models.forEach((model) => model.init(connection));
