const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require("./server/src/routes/route");
const { PORT } = require("./server/src/config/config");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
