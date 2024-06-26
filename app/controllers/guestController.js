import db from '../models/index.js';

const { guests: Guest } = db;

// Method to add new guests
export const addGuest = (req, res) => {
  // Destructure required fields from the request body
  const { name, contact, email, address } = req.body;

  // Check if the required fields are provided
  if (!name || !contact) {
    return res.status(400).json({ error: 'Name and contact are mandatory fields.' });
  }
  
  // Create a new Guest object with provided data
  return Guest.create({
    name,
    contact,
    email, // email not a mandatory parameter
    address // It's okay if these are undefined
  })
    .then(savedGuest => 
    // Respond with the saved guest object
      res.status(200).json(savedGuest)
    )
    .catch(err => {
      console.error('Error saving guest:', err);
      return res.status(500).send('Error saving guest.');
    });
};

// Method to delete a guest
export const deleteGuest = (req, res) => {
  const guestId = req.query.guestid;;

  Guest.destroy({
    where: { guestId }
  })
    .then(num => {
      if (num === 1) {
        res.send({ message: 'Guest was deleted successfully!' });
      } else {
        res.send({ message: `Cannot delete Guest with id=${guestId}. Maybe Guest was not found!` });
      }
    })
    .catch(() => {
      res.status(500).send({ message: `Could not delete Guest with id=${  guestId}` });
    });
};

// Method to update details of an existing guest
export const updateGuest = (req, res) => {
  const { name, contact, email, address, guestId } = req.body;
  const updateData = { name, contact };
  if (email !== undefined) {
    updateData.email = email;
  }
  if (address !== undefined) {
    updateData.address = address;
  }
  Guest.update(
    updateData,
    { where: { guestId } }
  )
    .then(([affectedCount]) => {
      if (affectedCount > 0) {
        res.send({ message: 'Guest updated successfully!' });
      } else {
        res.send({ message: `Cannot update Guest with id=${guestId}. Maybe Guest was not found or req.body is empty!` });
      }
    })
    .catch((err) => {
      console.error('Error updating guest:', err);
      res.status(500).send({ message: `Error updating Guest with id=${  guestId}` });
    });
};