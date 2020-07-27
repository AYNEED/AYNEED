module.exports = {
  async up(db) {
    await db.createCollection('beginnings');
  },

  async down(db) {
    await db.collection('beginnings').drop();
  },
};
