const cheerio = require("cheerio");

const scrapeRechargePlanData = (data) => {
  const $ = cheerio.load(data);

  // Array to store scraped plans
  const plans = [];

  // Iterate through each 'recharge_plan' div
  $(".recharge_plan").each((index, element) => {
    const validityElement = $(element).find(".recharge_plan_p1");
    const validity = validityElement
      .contents()
      .filter(function () {
        return this.nodeType === 3; // Filter out only text nodes
      })
      .text()
      .trim();
    const price = $(element).find(".button4").text().trim();
    const talktimeValidity = $(element).find(".recharge_plan_p2").text().trim();

    // Push the details of each plan to the 'plans' array
    plans.push({
      validity,
      price,
      talktimeValidity,
    });
  });

  return plans;
};

module.exports = { scrapeRechargePlanData };
