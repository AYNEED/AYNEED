module.exports = {
  async up(db) {
    await db.createCollection('subscriptionusers');
  },

  async down(db) {
    await db.collection('subscriptionusers').drop();
  },
};
