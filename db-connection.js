const mongoose = require("mongoose")
let cachedDb = null;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDb = async () => {
  try {
    if (cachedDb == null) {
      console.log("No Cacheada");
      return cachedDb = await mongoose.createConnection("mongodb+srv://admin:developer@cluster0.l1ss1.mongodb.net/pruebabk?retryWrites=true&w=majority", {
        bufferCommands: false,
        bufferMaxEntries: 0,
        ...dbOptions
      });
    } else {
      console.log("Cacheada");
      return cachedDb;
    }
  } catch (err) {
    throw err;
  }
};

module.exports.connectDb = connectDb