import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';

const applyRoutes = (app) => {
  // simple route
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Vitabletech application.' });
  });

  // routes
  authRoutes(app);
  userRoutes(app);
};

export default applyRoutes;