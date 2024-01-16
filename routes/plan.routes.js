const { FetchPlanDetails } = require("../controllers/plans.controllers");
const isAuthenticated = require("../middlewares/Auth");


const router = require("express").Router();

router.route("/recharge/plan").get(  FetchPlanDetails);

module.exports = router;
