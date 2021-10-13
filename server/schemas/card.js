const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
  word: {
    type: String,
    trim: true,
    required: [true, "Please add a word"]
  },
  word_translation: {
    type: String,
    trim: true,
    required: [true, "Please provide an translation"]
  },

})

module.exports = Flashcard = mongoose.model('flashcard', RecordSchema)