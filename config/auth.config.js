import { config } from 'dotenv';

config();

export default {
  secret: process.env.JWT_SECRET,
  jwtOptions: {
    algorithm: 'HS256',
    expiresIn: 86400 // 24 hours
  }
};
