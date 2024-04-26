import express from 'express';
import { addGuest, deleteGuest, updateGuest } from '../controllers/guestController.js'; // Import addGuest function

export default function guestRoutes(app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });
  app.use(express.json());
  app.post('/addguest', addGuest);
  app.delete('/deleteguest', deleteGuest);
  app.put('/updateguest',updateGuest);
}
