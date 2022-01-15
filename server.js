const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
//const path = require('path')

const app = express();

// Connect to Data Base
connectDB();

// Cross Access Control Enabled
app.use(cors({origin: "http://localhost:5000"})) 

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({msg: 'Welcome to contact keeper API'}));

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))
 /**
  * // Secure static assets
if(process.env.NODE_ENV === 'production') {
  //  // Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build',
    'index.html')));
}
  */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/**
 * https://clientcontactkeeper.netlify.app
 */