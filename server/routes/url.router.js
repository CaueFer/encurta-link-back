const express = require("express");
const {generateNewShortUrl} = require("../controllers/url.controller");

const router = express.Router();

router.post('/', generateNewShortUrl);

router.get('/:id', )


module.exports = router;