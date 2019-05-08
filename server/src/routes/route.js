const express = require("express");
const router = express.Router();
const FeedController = require("../controllers/FeedController");

router.get("/feed/all", FeedController.getFlipData);
router.post("/feed/parse", FeedController.mercuryParseItem);

module.exports = router;
