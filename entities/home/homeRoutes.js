const express = require('express');
const router = express.Router();

const getHomePage = require('./homeController/getHomePage');
const postHomePage = require('./homeController/postHomePage');
const openUrl = require('./homeController/openUrl');
const deleteUrl = require('./homeController/deleteUrl');

router.route('/')
.get(getHomePage)
.post(postHomePage);

router.route('/:url')
.get(openUrl);

router.route('/remove/:id')
.get(deleteUrl);

module.exports = router;