module.exports = {
  async up(db) {
    await db
      .collection('projects')
      .updateMany({}, { $set: { archivedAt: null } });
  },

  async down(db) {
    await db
      .collection('projects')
      .updateMany({}, { $unset: { archivedAt: '' } });
  },
};
