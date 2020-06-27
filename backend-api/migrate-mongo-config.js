/* eslint-disable @typescript-eslint/no-var-requires */

require('./build/src/utils/env');
const { name, host, options } = require('./build/src/utils/mongodb');

module.exports = {
  mongodb: {
    url: `mongodb://${host}`,
    databaseName: name,
    options,
  },

  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
};
