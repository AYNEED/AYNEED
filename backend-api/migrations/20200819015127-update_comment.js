module.exports = {
  async up(db) {
    await db
      .collection('comments')
      .updateMany({}, { $set: { commentsCount: 0 } });
  },

  async down(db) {
    await db
      .collection('comments')
      .updateMany({}, { $unset: { commentsCount: 0 } });
  },
};
