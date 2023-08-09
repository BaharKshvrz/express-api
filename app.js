import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from 'dotenv'
import connect  from "./config/db/mongoDB.js";
import logger from "./utils/logger.js";
import routes from "./routers/v1/index.js";
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics.js";
import responseTime from "response-time";

dotenv.config({ path: `config/.env.${process.env.NODE_ENV}`});
const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware
app.use(cors())
app.use(bodyParser.json())
app.use(
  responseTime((req, res, time) => {
    if (req?.route?.path) {
      restResponseTimeHistogram.observe(
        {
          method: req.method,
          route: req.route.path,
          status_code: res.statusCode,
        },
        time * 1000
      );
    }
  })
);





// Import Routes
// app.use("/posts", postsRoute)
// app.use("/users", usersRoute)


app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`);
    await connect("cars");
    routes(app);
  
   startMetricsServer();
     // swaggerDocs(app, port);
  });
