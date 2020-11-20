const mongoose = require("mongoose");

const OptionsSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: false,
    },
    Price: {
      type: Number,
      required: false,
    },
    Food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Option", OptionsSchema);
