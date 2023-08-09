import User from "../models/User.js";
import validator from "../utils/validate.js";

// Check the duplication in User data
const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    // Username
    try {
      const user = await User.findOne({username: req.body.username});
      if (user) {
              res.status(400).send({ message: "Failed! Username is already in use!" });
              return;
        }
     } catch (error) {
        res.status(500).send({ message: error });
        return;
    }

    // Email
      try {
        const user = await User.findOne({email: req.body.email});
        if (user) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
          }
        } catch (error) {
          res.status(500).send({ message: error });
          return;
      }
  
      next();
  };

// Signup Validation
const signup = async (req, res, next) => {
    const validationRule = {
        "email": "required|string|email",
        "username": "required|string",
        "password": "required|string|min:6",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation Failed. Please check the errors.',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    signup,
 };

export default verifySignUp;