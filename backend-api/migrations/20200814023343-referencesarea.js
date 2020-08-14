module.exports = {
  async up(db) {
    await db.createCollection('ReferencesArea');
  },

  async down(db) {
    await db.collection('ReferencesArea').drop();
  },
};
