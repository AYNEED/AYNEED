module.exports = {
  async up(db) {
    await db.createCollection('privateMessages');
  },

  async down(db) {
    await db.collection('privateMessages').drop();
  },
};
