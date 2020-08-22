module.exports = {
  async up(db) {
    await db.createCollection('comments');
  },

  async down(db) {
    await db.collection('comments').drop();
  },
};
