import Sequelize from 'sequelize';
import databseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databseConfig);

models.forEach((model) => model.init(connection));
