const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Models
require("./model");
// Connect to DB
mongoose.connect("mongodb://localhost:27017/socket_test", {
  useNewUrlParser: true
});
mongoose.connection.on("error", err => {
  console.error(`DB ERROR:  ${err.message}`);
});
