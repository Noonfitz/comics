const express = require('express');
const adminCtrl = require('../controllers/admin-controller');
const router = express.Router()

router.route('/')
.get(adminCtrl.admin)

router.route('/create-book')
.get(adminCtrl.admin_create)

router.route('/update-book/:_id')
.get(adminCtrl.admin_update)


module.exports = router

