const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/dummy_store", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Datbase connected Successfully");
  } catch (error) {
    console.log("Error connecting to the database.");
  }
};

module.exports = connectDatabase;
