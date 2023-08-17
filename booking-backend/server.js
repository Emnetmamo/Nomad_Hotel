// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://nomad:nomad@cluster0.vgcdhu3.mongodb.net/Booking', { useNewUrlParser: true, useUnifiedTopology: true });


// Define a mongoose model for the bookings
const Booking = mongoose.model('Booking', {
  checkIn: Date,
  checkOut: Date,
  guests: Number,
  name: String,
  email: String,
});

// Handle form submissions
app.post('/api/bookings', async (req, res) => {
  try {
    const { checkIn, checkOut, guests, name, email } = req.body;

    // Create a new booking
    const booking = new Booking({
      checkIn,
      checkOut,
      guests,
      name,
      email,
    });

    // Save the booking to the database
    await booking.save();

    res.status(201).json({ message: 'Booking successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
