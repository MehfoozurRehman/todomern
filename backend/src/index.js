const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  item: String,
});

const todoModel = mongoose.model("TODO", todoSchema);

//config
const app = express();
const port = 8080;

//middleware
app.use(cors());

//dbconfig
const connection_url =
  "mongodb+srv://admin:1234567890@cluster0.q5vjk.mongodb.net/tododb?retryWrites=true&w=majority";
try {
  mongoose.connect(
    connection_url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("db connected")
  );
} catch (error) {
  console.log(error);
}
//api endpoints

app.get("/", (req, res) => {
  let data;
  todoModel.find({}, function (err, data) {
    res.send(data);
  });
});

//listners
app.listen(port, () => {
  console.log("api ready");
});
