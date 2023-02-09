const express = require('express');
const router = express.Router()
// gọi ra hàm Router để xử lý các route
const siteController = require('../app/controllers/SiteController')
router.use('/search', siteController.search) 
router.use('/', siteController.index)
module.exports = router;