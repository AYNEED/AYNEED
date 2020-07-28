module.exports = {
  async up(db) {
    await db.createCollection('messages');
  },

  async down(db) {
    await db.collection('messages').drop();
  },
};
