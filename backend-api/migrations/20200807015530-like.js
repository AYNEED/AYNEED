module.exports = {
  async up(db) {
    await db.createCollection('likes');
  },

  async down(db) {
    await db.collection('likes').drop();
  },
};
