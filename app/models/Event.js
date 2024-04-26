export default (sequelize, Sequelize) => {
  const Event = sequelize.define(
    'events',
    {
      eventId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventTime: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventLocation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventStatus: {
        type: Sequelize.STRING,
        allowNull: false,
        Comment: '11 => Pending, 22 => On-going, 33 => Completed, 44=> Cancelled'
      }
    },
    {
      timestamps: true
    }
  );

  return Event;
};
