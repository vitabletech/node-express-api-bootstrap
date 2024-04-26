import express from 'express';
import {
  addEvent,
  getEvent,
  getEventByid,
  deleteById,
  updateStatus
} from '../controllers/eventController.js';
import authJwt from '../middleware/authJwt.js';
import validate from '../Validations/addEventsValidation.js';

export default function guestRoutes(app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });
  app.use(express.json());
  app.post('/add-event', [authJwt.verifyToken, validate.addEventValidation], addEvent);
  app.get('/get-event', [authJwt.verifyToken], getEvent);
  app.get('/get-event-by-id', [authJwt.verifyToken], getEventByid);
  app.get('/delete-event-by-id', [authJwt.verifyToken], deleteById);
  app.post('/update-status', [authJwt.verifyToken], updateStatus);
}
