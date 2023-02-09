const express = require('express');
const router = express.Router()
// gọi ra hàm Router để xử lý các route
const newsController = require('../app/controllers/NewsController')
router.use('/:slug', newsController.show) // slug trước, '/' là cái sau cùng
router.use('/', newsController.index)
// newsController.index là handler function
module.exports = router;