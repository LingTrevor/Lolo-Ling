const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../server/src/client/public"),
  devServer: {
    proxy: "http://localhost:5005"
  }
};
