import db from '../models/index.js';

const { events: Event } = db;

export const addEvent = (req, res) => {
  try {
    const event = new Event({ ...req.body, userId: req.userId, eventStatus: 11 });
    event.save();
    res.status(200).send({ message: 'Event added successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getEvent = async (req, res) => {
  try {
    const {userId} = req;
    const events = await Event.findAll({ userId });
    res.status(200).send({ message: 'Request completed', event: events });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getEventByid = async (req, res) => {
  try {
    const {userId} = req;
    const {eventId} = req.query;
    // Check if userId and eventId are provided
    if (!eventId) {
      throw new Error('eventId is required');
    }

    const events = await Event.findOne({ where: { userId, eventId } });

    if (!events || userId !== events.userId) {
      throw new Error('Data not found');
    }

    res.status(200).send({ message: 'Request completed', event: events });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const {userId} = req;
    const {eventId} = req.body;
    const {status} = req.body;
    // Check if userId and eventId are provided
    if (!eventId) {
      throw new Error('eventId is required');
    }
    const events = await Event.update(
      { eventStatus: status },
      { where: { userId, eventId } }
    );

    if (!events || userId !== events.userId) {
      throw new Error('Data not found');
    }

    res.status(200).send({ message: 'Request completed' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteById = async (req, res) => {
  try {
    const {userId} = req;
    const {eventId} = req.query;
    // Check if userId and eventId are provided
    if (!eventId) {
      throw new Error('eventId is required');
    }
    const events = await Event.destroy({ where: { userId, eventId } });

    if (!events || userId !== events.userId) {
      throw new Error('Data not found');
    }

    res.status(200).send({ message: 'Request completed' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
