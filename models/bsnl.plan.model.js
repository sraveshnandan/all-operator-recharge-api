const mongoose = require("mongoose");

const BsnlPlanSchema = new mongoose.Schema({
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

const BsnlPlans = new mongoose.model("BsnllPlans", BsnlPlanSchema);

module.exports = BsnlPlans;
