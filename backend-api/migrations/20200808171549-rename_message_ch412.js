module.exports = {
  async up(db) {
    await db.collection('messages').updateMany(
      {},
      {
        $rename: {
          'users.authorId': 'users.senderId',
          'users.recipientId': 'users.targetId',
          'visible.isVisibleAuthor': 'visible.isVisibleSender',
        },
      }
    );
  },

  async down(db) {
    await db.collection('messages').updateMany(
      {},
      {
        $rename: {
          'users.senderId': 'users.authorId',
          'users.targetId': 'users.recipientId',
          'visible.isVisibleSender': 'visible.isVisibleAuthor',
        },
      }
    );
  },
};
