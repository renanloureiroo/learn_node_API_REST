const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      nome: 'Teste1',
      email: 'teste1@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Teste2',
      email: 'teste2@gmail.com',
      password_hash: await bcryptjs.hash('642135', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Teste3',
      email: 'teste3@gmail.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  down: async () => {

  },
};
