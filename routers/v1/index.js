import {
     getACarMake,
     getAllCarMakes,
     insertCarMake, 
     updateCarMake,
     deleteCarMake
   } from "../../controllers/make.controller.js";

import { 
   getAllCarModelsByMakeId,
   insertCarMakeModel 
}from "../../controllers/model.controller.js";

import { userLoginHandler } from "../../controllers/user.controller.js";

function routes(app) {
   app.post("/users/login", userLoginHandler);
   app.get("/makes", getAllCarMakes);
   app.get("/makes/:makeId", getACarMake);
   app.post("/makes", insertCarMake);
   app.put("/makes/:makeId", updateCarMake);
   app.delete("/makes/:makeId", deleteCarMake);

   app.get("/models/:makeId", getAllCarModelsByMakeId);
   app.post("/models", insertCarMakeModel);

   

}

export default routes;