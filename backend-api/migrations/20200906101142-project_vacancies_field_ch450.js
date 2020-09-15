module.exports = {
  async up(db) {
    await db.collection('projects').updateMany({}, { $set: { vacancies: [] } });
  },

  async down(db) {
    await db
      .collection('projects')
      .updateMany({}, { $unset: { vacancies: '' } });
  },
};
