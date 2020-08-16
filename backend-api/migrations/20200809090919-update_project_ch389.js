module.exports = {
  async up(db) {
    await db
      .collection('projects')
      .updateMany({}, { $set: { status: 'idea' } });
  },

  async down(db) {
    await db.collection('projects').updateMany({}, { $unset: { status: '' } });
  },
};
