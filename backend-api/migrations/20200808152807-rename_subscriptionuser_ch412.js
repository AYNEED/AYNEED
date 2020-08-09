module.exports = {
  async up(db) {
    await db
      .collection('subscriptionusers')
      .updateMany({}, { $rename: { recipientId: 'targetId' } });
  },

  async down(db) {
    await db
      .collection('subscriptionusers')
      .updateMany({}, { $rename: { targetId: 'recipientId' } });
  },
};
