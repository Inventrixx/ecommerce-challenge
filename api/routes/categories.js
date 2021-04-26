const router = require("express").Router();

const categoryIdService = require("../services/categoryIdService");

router.get("/:id", categoryIdService.searchId);

module.exports = router;