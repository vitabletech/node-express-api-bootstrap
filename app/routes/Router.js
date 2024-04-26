import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';
import guestRoutes from './guest.routes.js';
import eventRoutes from './event.route.js';

const applyRoutes = (app) => {
  // simple route
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Vitabletech application.' });
  });

  // routes
  authRoutes(app);
  userRoutes(app);
  guestRoutes(app);
  eventRoutes(app);
};

export default applyRoutes;