import express from 'express';
import { config } from 'dotenv';
import applyRouter from './routes/index.js';

config();

const app = express();

// Set up the router
applyRouter(app);

// set port, listen for requests
const {PORT} = process.env;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});