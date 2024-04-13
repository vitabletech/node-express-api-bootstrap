import verifySignUp from '../middleware/verifySignUp.js';
import {signup, signin} from '../controllers/auth.controller.js';

const authRoutes = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post(
    '/api/auth/signup',
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    signup
  );

  app.post('/api/auth/signin', signin);
};

export default authRoutes;