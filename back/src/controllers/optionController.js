const mongoose = require("mongoose");
const Option = mongoose.model("Option");

module.exports = {
  async store(req, res) {
    try {
      const option = await Option.create(req.body);
      return res.status(201).json({
        option,
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
  async list(req, res) {
    try {
      const options = await Option.find({}).populate("Food");

      return res.status(201).json({
        options,
      });
    } catch (err) {
      return res.status(400).json({
        erro: err,
      });
    }
  },
};
