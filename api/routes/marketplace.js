const router = require("express").Router();

const marketplaceService = require("../services/marketplaceServices");
router.get("/", marketplaceService.search);

router.get("/:id", marketplaceService.searchId);

module.exports = router;
