const { FetchPlanDetails } = require("../controllers/plans.controllers");


const router = require("express").Router();

router.route("/recharge/plan").get(FetchPlanDetails);

module.exports = router;
