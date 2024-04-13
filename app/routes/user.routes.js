import authJwt from '../middleware/authJwt.js';
import { allAccess, userBoard, adminBoard } from '../controllers/userController.js';

export default function userRoutes(app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/test/all', allAccess);

  app.get(
    '/api/test/user',
    [authJwt.verifyToken],
    userBoard
  );

  app.get(
    '/api/test/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    adminBoard
  );
}
