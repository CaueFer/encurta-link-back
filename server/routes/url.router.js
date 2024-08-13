const express = require("express");
const {generateNewShortUrl, getUrlShorted} = require("../controllers/url.controller");

const router = express.Router();

router.post('/', generateNewShortUrl);

router.get('/:shortId', getUrlShorted);

module.exports = router;
