module.exports = {
  async up(db) {
    await db.createCollection('helps');
    await db.createCollection('helpitems');
  },

  async down(db) {
    await db.collection('helps').drop();
    await db.collection('helpitems').drop();
  },
};
