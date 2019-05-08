const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./server/src/routes/route");
const { PORT } = require("./server/src/config/config");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  //Static folder
  app.use(express.static(__dirname + "/server/src/client/public"));

  //Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/server/src/client/public/index.html");
  });
};

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
