import Make from "../models/make.schema.js";
import mongoose, { deleteModel } from "mongoose"
import { createModel, deleteModelRecord, getAllCarModelsByMakeId, getModel, updateModel } from "../services/model.service.js";

// Get All Models of a Make Car
export async function getAllCarModelsByIdHandler(req, res) {
   try {
     const models = await getAllCarModelsByMakeId({"makeId": new mongoose.Types.ObjectId(req.params.makeId)})
     return res.json(models)
   } catch (error) {
      return res.json({message: error})
   }
  }

// Get a Model of a Make Car
export async function getCarModelHandlerByIdHandler(req, res) {
   try {
      const model = await getModel(req.params.id);
      return res.json(model)
   } catch (error) {
      return res.json({message: error})
   }
  }

// Add a Model of a Make Car
export async function insertCarModelHandler(req, res) {
   const {name, description, makeId} = req.body;
   
   try {
        const saveMake= await createModel({name, description, makeId});
        return res.status(201).json(saveMake)
    } catch (error) {
        res.json({message: error})
    }
}

// Update a Model of a Make Car
export async function updateCarModelHandler(req, res) {
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
       return res.json(updatedModel)
    } catch (error) {
       return res.json({message: error})
    }
}

// Remove a Model of a Make Car
export async function deleteCarModelHandler(req, res) {
   try {
       const removedModel = await deleteModelRecord({_id: req.params.modelId});
       return res.json(removedModel)
    } catch (error) {
        return res.json({message: error})
    }
}
