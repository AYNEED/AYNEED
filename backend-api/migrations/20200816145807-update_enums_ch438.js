module.exports = {
  async up(db) {
    await db
      .collection('likes')
      .updateMany({ targetModel: 'user' }, { $set: { targetModel: 'User' } });

    await db
      .collection('likes')
      .updateMany(
        { targetModel: 'project' },
        { $set: { targetModel: 'Project' } }
      );

    await db
      .collection('subscriptions')
      .updateMany({ targetModel: 'user' }, { $set: { targetModel: 'User' } });

    await db
      .collection('subscriptions')
      .updateMany(
        { targetModel: 'project' },
        { $set: { targetModel: 'Project' } }
      );
  },

  async down(db) {
    await db
      .collection('likes')
      .updateMany({ targetModel: 'User' }, { $set: { targetModel: 'user' } });

    await db
      .collection('likes')
      .updateMany(
        { targetModel: 'Project' },
        { $set: { targetModel: 'project' } }
      );

    await db
      .collection('subscriptions')
      .updateMany({ targetModel: 'User' }, { $set: { targetModel: 'user' } });

    await db
      .collection('subscriptions')
      .updateMany(
        { targetModel: 'Project' },
        { $set: { targetModel: 'project' } }
      );
  },
};
