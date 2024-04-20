export default (sequelize, Sequelize) => {
  const Guest = sequelize.define('guests', {
    guestId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
      
    },
    contact: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  });

  return Guest;
};
