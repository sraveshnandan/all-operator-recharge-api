const mongoose = require("mongoose");

const AirtelPlanSchema = new mongoose.Schema({
  operator: {
    type: String,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const AirtelPlans = new mongoose.model("AirtelPlans", AirtelPlanSchema);

module.exports = AirtelPlans;
