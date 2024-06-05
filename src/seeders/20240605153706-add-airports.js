'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Dhanbad International Airport',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Allahabad International Airport',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kanpur International Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delhi International Airport',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});



  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
