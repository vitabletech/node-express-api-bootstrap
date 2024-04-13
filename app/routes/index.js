import cors from 'cors';
import express from 'express';
import applyRoutes from './Router.js';

const applyCors = (app) => {
  const corsOptions = {
    origin: 'http://localhost:8081'
  };
  app.use(cors(corsOptions));
};

const applyBodyParsers = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};


const applyNotFoundHandler = (app) => {
  // Catch-all route for unmatched routes
  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });
};


const applyRouter = (app) => {
  applyCors(app);
  applyBodyParsers(app);
  applyRoutes(app);
  applyNotFoundHandler(app);
};

export default applyRouter;