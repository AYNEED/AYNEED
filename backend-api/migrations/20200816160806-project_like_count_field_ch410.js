module.exports = {
  async up(db) {
    await db.collection('projects').updateMany({}, { $set: { likesCount: 0 } });
  },

  async down(db) {
    await db
      .collection('projects')
      .updateMany({}, { $unset: { likesCount: 0 } });
  },
};
