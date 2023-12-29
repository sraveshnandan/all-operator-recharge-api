
const { bsnldata, jiodata, airteldata, vidata } = require("../data/index");
const JioPlans = require("../models/jio.plan.model");
const AirtelPlans = require("../models/airtel.paln.model");
const BsnlPlans = require("../models/bsnl.plan.model");
const ViPlans = require("../models/vi.plan.model");
const { scrapeRechargePlanData } = require("../scraper/index");

//for fetching recharge plans
exports.FetchPlanDetails = async (req, res) => {
  try {
    const { operator, circle } = req.query;
    if (operator && circle) {
      if (operator === "jio") {
        const data = await JioPlans.find();
        return res.status(200).json({
          success: true,
          data,
        });
      }
      else if (operator === "airtel") {
        const data = await AirtelPlans.find();
        return res.status(200).json({
          success: true,
          data,
        });
      }
       else if (operator === "vi") {
        const data = await ViPlans.find();
        return res.status(200).json({
          success: true,
          data,
        });
      }
      else if (operator === "bsnl") {
        const data = await BsnlPlans.find();
        return res.status(200).json({
          success: true,
          data,
        });
      }
    }

    res.status(400).json({ message: "Invalid Request, Missing required parameters" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//for adding plans in database 


