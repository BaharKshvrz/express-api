import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { databaseResponseTimeHistogram } from "../utils/metrics.js";

// Add a User
export async function userSignupHandler(req, res) {
   const { firstName, lastName, email, username, password } = req.body;
   const newUser = new User({
        firstName,
        lastName,
        email,
        username,
        password,
   });

    try {
        const metricsLabels = {
            operation: "signupUser",
          };
        const timer = databaseResponseTimeHistogram.startTimer();
        await newUser.save();
        timer({ ...metricsLabels, success: "true" });
        return res.status(201).json({
            success: true,
            message: "Signup was successful!",
            data: newUser
        });
    } catch (error) {
        timer({ ...metricsLabels, success: "false" });
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
}

export async function userLoginHandler(req, res) {
   // Authentication User 
   
   // Make a jwt token
   const username = req.body.username;
   const user = { name: username };
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
   
   return res.json({ accessToken: accessToken});
  }