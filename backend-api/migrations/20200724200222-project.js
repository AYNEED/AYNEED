module.exports = {
  async up(db) {
    await db.createCollection('projects');
  },

  async down(db) {
    await db.collection('projects').drop();
  },
};
