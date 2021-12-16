const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  item: String,
});

const todoModel = mongoose.model("TODO", todoSchema);

module.exports = todoModel;
