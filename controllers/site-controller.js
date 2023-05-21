
const Comic= require('../models/comic-model');
const User = require('../models/user-model');
const passport = require('passport');

module.exports = {
    index: (request, response) => {
       Comic.find({}, (error, allBooks) => {
            if(error){
              return error;
            } else {
              response.render('pages/index', {
                  bookData: allBooks
              });
            }
          })
    },
    
    about: (request, response) => {
        response.render('pages/about')
    },

    register_get:(request, response) => {
      response.render('pages/register');
    },

    register_post:(request, response) => {
      const {username, password} = request.body;
      User.register({username: username}, password, (error, user) => {
        if (error) {
          console.log(error);
          response.redirect('/register');
        } else {
          passport.authenticate('local')(request, response, () => {
            response.redirect('/login');
          });
        }
      }); 
    },


    login_get: (request, response) => {
        response.render('pages/login')
    },

     login_post: (request, response) => {
      const {username, password} = request.body;
      const user = new User({
        username: username,
        password: password
      });

      request.login(user, (error) => {
        if (error) {
          console.log(error)
          response.redirect('/login');
        } else {
          passport.authenticate('local')(request, response, () => {
            response.redirect('/admin-console');
          });
        }
      });
    },

    logout:(request, response) => {
      request.logout();
      response.redirect('/');
    },
  
    
    google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    google_redirect_get: [
      passport.authenticate('google', {failureRedirect: '/login'}),
      function(request, response) {
        response.redirect('/admin-console');
      }
    ]


   
}
