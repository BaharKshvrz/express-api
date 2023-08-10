import jwt from "jsonwebtoken";
import { databaseResponseTimeHistogram } from "../utils/metrics.js";
import { createUser } from "../services/user.service.js";
import { transformUser } from "../transformation/userTransformation.js";

// Add a User
async function userSignupHandler(req, res) {
   const { firstName, lastName, email, username, password } = req.body;

   const timer = databaseResponseTimeHistogram.startTimer();
   const metricsLabels = {
    operation: "signupUser",
  };
   try {
        const newUser = await createUser({ firstName, lastName, email, username, password });
        timer({ ...metricsLabels, success: "true" });
        return res.status(201).json({
            success: true,
            message: "Signup was successful!",
            data: transformUser(newUser)
        });
    } catch (error) {
        timer({ ...metricsLabels, success: "false" });
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
}

async function userLoginHandler(req, res) {
   // Authentication User 
   
   // Make a jwt token
   const username = req.body.username;
   const user = { name: username };
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
   
   return res.json({ accessToken: accessToken});
  }

export {
    userSignupHandler,
    userLoginHandler,
}  