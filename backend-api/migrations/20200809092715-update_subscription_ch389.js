module.exports = {
  async up(db) {
    await db
      .collection('subscriptions')
      .updateMany({}, { $set: { targetModel: 'user' } });
  },

  async down(db) {
    await db
      .collection('subscriptions')
      .updateMany({}, { $unset: { targetModel: '' } });
  },
};
