const express = require('express');
const router = express.Router();

require('./movies')(router);

module.exports = router;
