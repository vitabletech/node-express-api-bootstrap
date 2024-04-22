import db from '../../app/models/index.js';

db.sequelize.sync()
  .then(() => console.log('Database sync complete.'))
  .catch((err) => console.error('An error occurred while syncing the database:', err));
