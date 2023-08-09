import mongoose from "mongoose";
import logger from "../../utils/logger.js";

// Connect To mongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
  const connect = async (dbName) => {
    try {
        await mongoose.connect(process.env.DATABASE_URI + dbName, options);
        logger.info("DB connected");
      } catch (error) {
        logger.error("Could not connect to db");
        process.exit(1);
      }
} 

export default connect;