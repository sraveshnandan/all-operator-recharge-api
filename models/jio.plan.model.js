const mongoose = require("mongoose");

const JioPlanSchema = new mongoose.Schema({
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

const JioPlans = new mongoose.model("jioPlans", JioPlanSchema);


module.exports=JioPlans;
