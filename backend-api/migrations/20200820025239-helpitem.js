module.exports = {
  async up(db) {
    await db.createCollection('helpitems');
  },

  async down(db) {
    await db.collection('helpitems').drop();
  },
};
