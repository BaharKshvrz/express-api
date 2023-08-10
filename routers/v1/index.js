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
}

export default routes;