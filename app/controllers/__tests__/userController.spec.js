import { allAccess } from '../userController.js';

test('checks if userController function works correctly', () => {
  const req = {};
  
  const res = {
    status: jest.fn().mockReturnThis(), // mock function, chainable
    send: jest.fn() // mock function
  };
  
  allAccess(req, res);
  
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith('Public Content.');
});