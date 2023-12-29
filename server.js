require("dotenv").config();
const ConnectToDatabase = require("./config/db");
const app = require("./app");
const port = process.env.PORT || 4000;


app.listen(port, () => {
  ConnectToDatabase();
  console.log(`Server running on port ${port}`);
})

