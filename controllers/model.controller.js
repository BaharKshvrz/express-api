import mongoose from "mongoose"
import { 
         createModel, 
         deleteModelRecord,
         getAllCarModelsByMakeId,
         getModel, 
         updateModel 
   } from "../services/model.service.js";

import { 
     transformModel,
     transformModels
   } from "../transformation/modelTransformation.js";
import { organizeAPIResult } from "../utils/helper.js";

// Get All Models of a Make Car
async function getAllCarModelsByIdHandler(req, res) {
   try {
     const models = await getAllCarModelsByMakeId({"makeId": new mongoose.Types.ObjectId(req.params.makeId)})
     return res.json(organizeAPIResult(transformModels(models), "List of items retrieved successfully."))
   } catch (error) {
      return res.json({message: error})
   }
  }

// Get a Model of a Make Car
async function getCarModelHandlerByIdHandler(req, res) {
   try {
      const model = await getModel(req.params.id);
      return res.json(organizeAPIResult(transformModel(model), "Item retrieved successfully."))

   } catch (error) {
      return res.json({message: error})
   }
  }

// Add a Model of a Make Car
async function insertCarModelHandler(req, res) {
   const {name, description, makeId} = req.body;
   try {
        const saveModel= await createModel({name, description, makeId});
        return res.status(201).json(organizeAPIResult(transformModel(saveModel), "Item created successfully."))
    } catch (error) {
        res.json({message: error})
    }
}

// Update a Model of a Make Car
async function updateCarModelHandler(req, res) {
   const filter = { _id: req.params.modelId };
   const {name, description} = req.body;
   // Create a document that sets the data for model
   const updateDoc = {
       $set: {
           name,
           description,
         },
     };

   try {
       const updatedModel = await updateModel(filter, updateDoc);
       return res.json(organizeAPIResult(transformModel(updatedModel, "Item updated successfully.")))
    } catch (error) {
       return res.json({message: error})
    }
}

// Remove a Model of a Make Car
async function deleteCarModelHandler(req, res) {
   try {
       const removedModel = await deleteModelRecord({_id: req.params.modelId});
       return res.json(organizeAPIResult(transformModel(removedModel), "Item deleted successfully."))
    } catch (error) {
        return res.json({message: error})
    }
}

export {
   getAllCarModelsByIdHandler,
   getCarModelHandlerByIdHandler,
   insertCarModelHandler,
   updateCarModelHandler,
   deleteCarModelHandler,
}