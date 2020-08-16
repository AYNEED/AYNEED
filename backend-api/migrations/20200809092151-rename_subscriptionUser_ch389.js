module.exports = {
  async up(db) {
    await db.collection('subscriptionusers').rename('subscriptions');
  },

  async down(db) {
    await db.collection('subscriptions').rename('subscriptionusers');
  },
};
