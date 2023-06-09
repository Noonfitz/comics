const express = require('express');
const siteCtrl = require('../controllers/site-controller');
const router = express.Router()


router.route('/')
.get(siteCtrl.index);

router.route('/about')
   .get(siteCtrl.about);

router.route('/register')
   .get(siteCtrl.register_get)
   .post(siteCtrl.register_post)

router.route('/login')
   .get(siteCtrl.login_get)
   .post(siteCtrl.login_post)

router.route('/logout')
   .get(siteCtrl.logout)


router.route('/auth/google')
   .get(siteCtrl.google_get)
 
 router.route('/auth/google/admin-console')
   .get(siteCtrl.google_redirect_get)


module.exports = router;