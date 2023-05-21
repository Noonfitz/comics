const express = require('express');
const bookCtrl = require('../controllers/book-controller');
const router = express.Router()

router.route('/')
.post(bookCtrl.create)


router.route('/:_id')
.get(bookCtrl.book_detail)
.put(bookCtrl.update)
.delete(bookCtrl.delete)


module.exports = router