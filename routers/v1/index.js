import { 
     getCarsHandler,
     insertCarHandler, 
     insertCarReviewHandler
   } from "../../controllers/car.controller.js";

import {
     getMakesHandler,
     getMakeHandler,
     insertCarMakeHandler,
     deleteCarMakeHandler,
     updateCarMakeHandler
   } from "../../controllers/make.controller.js";

import { 
      deleteCarModelHandler,
      getAllCarModelsByIdHandler,
      getCarModelHandlerByIdHandler,
      insertCarModelHandler,
      updateCarModelHandler 
   } from "../../controllers/model.controller.js";

import { 
    userLoginHandler,
    userSignupHandler 
   } from "../../controllers/user.controller.js";
import authenticationToken from "../../middleware/auth.js";
   
import paginationMiddleware from "../../middleware/pagination.js";
import signUpValidation from "../../middleware/signUpValidation.js";

function routes(app) {
   // Users
   app.post("/users/signup",
            [
               signUpValidation.checkDuplicateUsernameOrEmail, 
               signUpValidation.signup
            ],
            userSignupHandler
           );
   app.post("/users/login", userLoginHandler);

   // Makes
   app.get("/makes", getMakesHandler);
   app.get("/makes/:makeId", getMakeHandler);
   app.post("/makes", insertCarMakeHandler);
   app.put("/makes/:makeId", updateCarMakeHandler);
   app.delete("/makes/:makeId", deleteCarMakeHandler);

   // Models
   app.get("/models/:makeId", getAllCarModelsByIdHandler);
   app.get("/models/:id", getCarModelHandlerByIdHandler);
   app.post("/models", insertCarModelHandler);
   app.put("/models/:modelId", updateCarModelHandler);
   app.delete("/models/:modelId", deleteCarModelHandler);
  
   // Cars
    app.get("/cars", paginationMiddleware(5), getCarsHandler);
    app.post("/cars", insertCarHandler);
    app.post("/cars/:carId/review", authenticationToken, insertCarReviewHandler);
}

export default routes;