module.exports = {
  async up(db) {
    await db.createCollection('subscriptionprojects');
  },

  async down(db) {
    await db.collection('subscriptionprojects').drop();
  },
};
