const Comic = require('../models/comic-model')
// const data =require('../data/data')


module.exports = {
    admin: (request, response) => {
       Comic.find({},(error, allComics) => {
        if(error){
            return error;
        } else {
            response.render('pages/admin', {
            adminData : allComics
          });
         }
       });
    },

    admin_create: (request, response) => {
        response.render('pages/create', {
          });
    },

    admin_update: (request, response) => { 
        const { _id } = request.params;
        Comic.findOne({_id:_id}, (error , foundBook) => {
            if(error) {
                return error;
            } else {
                response.render('pages/update', {  
                    foundBook : foundBook
            });
          }
       }); 
     }
}

