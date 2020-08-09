module.exports = {
  async up(db) {
    await db
      .collection('projects')
      .updateMany({}, { $rename: { authorId: 'senderId' } });
  },

  async down(db) {
    await db
      .collection('projects')
      .updateMany({}, { $rename: { senderId: 'authorId' } });
  },
};
