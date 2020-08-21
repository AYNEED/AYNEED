module.exports = {
  async up(db) {
    await db.collection('messages').updateMany(
      {},
      {
        $rename: {
          'users.senderId': 'senderId',
          'users.targetId': 'targetId',
        },
      }
    );
  },

  async down(db) {
    await db.collection('messages').updateMany(
      {},
      {
        $rename: {
          senderId: 'users.senderId',
          targetId: 'users.targetId',
        },
      }
    );
  },
};
