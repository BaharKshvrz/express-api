import jwt from "jsonwebtoken";

export async function userLoginHandler(req, res) {
   // Authentication User 
   
   // Make a jwt token
   const username = req.body.username;
   const user = { name: username };
   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
   
   return res.json({ accessToken: accessToken});
  }