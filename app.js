import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from 'dotenv'
import connect  from "./config/db/mongoDB.js";
import logger from "./utils/logger.js";
import routes from "./routers/v1/index.js";

dotenv.config({ path: `config/.env.${process.env.NODE_ENV}`});
const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware
app.use(cors())
app.use(bodyParser.json())

// Import Routes
// app.use("/posts", postsRoute)
// app.use("/users", usersRoute)


app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`);
    await connect("cars");
    routes(app);
  
   // startMetricsServer();
     // swaggerDocs(app, port);
  });
