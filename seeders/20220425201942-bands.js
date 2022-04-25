'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [
      {
        name: 'Van Halen',
        genre: 'Rock',
        available_start_time: '2022-04-25Z11:00:00',
        end_time: '2022-04-25Z23:00:00'
      },
      {
        name: 'Kiss',
        genre: 'Rock',
        available_start_time: '2022-04-25Z11:00:00',
        end_time: '2022-04-25Z23:00:00'
      },
      {
        name: 'Metallica',
        genre: 'Rock',
        available_start_time: '2022-04-25Z11:00:00',
        end_time: '2022-04-25Z23:00:00'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}