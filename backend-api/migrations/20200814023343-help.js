module.exports = {
  async up(db) {
    await db.createCollection('helps');
  },

  async down(db) {
    await db.collection('helps').drop();
  },
};
