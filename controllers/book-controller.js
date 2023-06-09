const Comic = require('../models/comic-model');



module.exports = {
    book_detail: (request, response) => {
      const {_id} = request.params;
      Comic.findOne({_id:_id}, (error,foundBook) => {
        if(error) {
          return error;
        } else {
          response.render('pages/book', {
            foundBook : foundBook
        });
      } 
    });
  },

  create: (request, response) => {
    console.log("body: ", request.body);
    const { image, title, author, publisher, genre, numpages, rating,synopsis} = request.body;
    const newBook = new Comic ({
      title: title,
      author: author,
      publisher: publisher,
      genre:genre,
      pages:numpages,
      rating: rating,
      synopsis: synopsis,
      image:image
    });

    newBook.save();

    if (title != "") {
      response.redirect("/admin-console")
    } else {
      response.redirect('/admin-console/create-book')
    }
  },

  

  update: (request, response) => {
    const {_id} = request.params
    console.log("body: ", request.body);
    const { image, title, author, publisher, genre, numpages, rating,synopsis} = request.body;

    Comic.findByIdAndUpdate(_id, {$set: {
      title :title,
      author: author,
      publisher: publisher,
      genre: genre,
      pages: numpages,  //it's really important that the name in ejs page match with the this key value
      rating: rating,
      synopsis: synopsis,
      image: image
    }},{new:true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin-console');
      }
    });
  },

  delete: (request,response) => {
    const {_id} = request.params;
    Comic.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin-console')
      }
    }); 
  }
}
   
