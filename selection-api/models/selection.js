const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const selectionSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    review: {
        type: String
    },
    cuisines: {
        type: String
    },
    description: {
        type: String
    } 
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Selection', selectionSchema);