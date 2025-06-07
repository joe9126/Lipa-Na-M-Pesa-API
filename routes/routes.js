const express = require("express");
const router = express.Router();
const callbackController = require("../controllers/callbackController");
const stkpushRequestController = require("../controllers/stkpushRequestController");

router.post("/stkpush-request", stkpushRequestController.stkpushRequest);
router.post("/callback-request", callbackController.handleSTKCallBack);

module.exports = router;
