const mongoose = require("mongoose");
const Company = mongoose.model("Company");

module.exports = {
  async store(req, res) {
    try {
      const company = await Company.create(req.body);
      return res.status(201).json({ company });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },

  async uploadImage(req, res) {
    console.log(req.body);
    try {
    //   const company = await Company.updateOne(
    //     { $set: { UrlPhoto: `files/${req.file.filename}` } }
    //   );

    //   return res.status(200).json({
    //     company,
    //   });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
};
