const express = require('express');

const router = express.Router();

const prove03Controller = require("../../controllers/prove03/prove03");

router.get('/', prove03Controller.getProve03);

module.exports = router;