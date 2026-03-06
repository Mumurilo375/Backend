'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const items = [];

    // Cada pedido (1-45) recebe 1 a 3 itens com listagens variadas
    for (let orderId = 1; orderId <= 45; orderId++) {
      const numItems = 1 + (orderId % 3);
      const usedListings = new Set();
      for (let j = 0; j < numItems; j++) {
        let listingId = ((orderId + j * 11) % 40) + 1; // usa primeiras 40 listagens
        if (usedListings.has(listingId)) listingId = (listingId % 40) + 1;
        usedListings.add(listingId);

        const price = 49.99 + (listingId % 20);

        items.push({
          order_id: orderId,
          listing_id: listingId,
          game_key_id: null,
          price,
          created_at: now,
        });
      }
    }

    await queryInterface.bulkInsert('order_items', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order_items', null, {});
  }
};
