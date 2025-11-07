// Import mongoose
const mongoose = require('mongoose');

// Define the structure
const bugSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, default: 'open' }
});

// Export model
module.exports = mongoose.model('Bug', bugSchema);