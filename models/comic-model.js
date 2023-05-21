const mongoose = require('mongoose');
const {Schema} = mongoose;  

const comicSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A first name is required.'],
    minlength:[1,'Minimun length for the first name is 1 characters.']
  },

  author: {
    type: String,
    required: [true, 'The author\'s name is required.'],
    minlength:[5,'Minimun length for the author\'s name is 5 characters.']
  },

  publisher: {
    type: String,
  },

  genre: {
    type: String,
  },

  pages: {
    type: String
  },

  rating: {
    type: Number,
  },
  synopsis: {
    type: String,
  },
  
  image:{
    type:String
  }

});

const Comic = mongoose.model('Comics', comicSchema);

module.exports = Comic;