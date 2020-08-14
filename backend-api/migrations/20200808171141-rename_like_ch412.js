module.exports = {
  async up(db) {
    await db.collection('likes').updateMany(
      {},
      {
        $rename: {
          owner: 'senderId',
          targetType: 'targetModel',
          statement: 'status',
        },
      }
    );
  },

  async down(db) {
    await db.collection('likes').updateMany(
      {},
      {
        $rename: {
          senderId: 'owner',
          targetModel: 'targetType',
          status: 'statement',
        },
      }
    );
  },
};
