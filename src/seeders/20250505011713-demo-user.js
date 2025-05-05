'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Tài',
        lastName: 'Phùng',
        email: 'tai@example.com',
        password: '123456', // chỉ dùng mock, không mã hóa
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Nguyễn',
        lastName: 'Minh',
        email: 'minh@example.com',
        password: 'abcdef',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
