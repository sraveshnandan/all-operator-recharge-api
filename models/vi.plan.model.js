const mongoose = require("mongoose");

const ViPlanSchema = new mongoose.Schema({
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

const ViPlans = new mongoose.model("ViPlans", ViPlanSchema);

module.exports = ViPlans;
