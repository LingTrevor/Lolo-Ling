const axios = require("axios");
const parseString = require("xml2js").parseString;
const Mercury = require("@postlight/mercury-parser");
const { flipboardUrl } = require("../config/config");
const { addMediaField } = require("../helpers/helper");

module.exports = {
  async getFlipData(req, res) {
    await axios
      .get(flipboardUrl)
      .then(response => {
        //   console.log(response.data);
        const flipData = response.data;
        parseString(flipData, (error, result) => {
          if (error) console.log(error);
          const items = result.rss.channel[0].item;

          addMediaField(items);

          res.status(200).send(items);
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({ error: "Something went wrong" });
      });
  },
  async mercuryParseItem(req, res) {
    const link = req.body.item.link[0];
    await Mercury.parse(link)
      .then(result => {
        // console.log(result);
        res.status(200).send(result);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({ error: "Something went wrong" });
      });
  }
};
