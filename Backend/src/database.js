const mongoose = require('mongoose');

// url para utilizar mongodb local
const URI = 'mongodb://localhost/mexn-stockapp-productos';

// "atlas" nos preveería también una url para connect()
mongoose.connect(URI)
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;