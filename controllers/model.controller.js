import Make from "../models/Make.js";
import Model from "../models/Model.js";
import mongoose from "mongoose"

// Get All Models of a Make Car
export async function getAllCarModelsByMakeId(req, res) {
   try {
     const models = await Model.find({"makeId": new mongoose.Types.ObjectId(req.params.makeId)})
     res.json(models)
   } catch (error) {
      return res.json({message: error})
   }
  }

// Get a Model of a Make Car
export async function getACarModel(req, res) {
   try {
      const model = await Model.findById(req.params.modelId);
      res.json(model)
   } catch (error) {
      return res.json({message: error})
   }
  }

// Add a Model of a Make Car
export async function insertCarMakeModel(req, res) {
   const {name, description, makeId} = req.body;
   const newModel = new Model({
       name,
       description,
       makeId,
   });

  try {
     const saveMake= await newModel.save();
     res.status(201).json(saveMake)
  } catch (error) {
      res.json({message: error})
  }
}

// Update a Model of a Make Car
export async function updateCarMake(req, res) {
   const filter = { _id: req.params.modelId };
   const {name, description} = req.body;

   // create a document that sets the data for make
   const updateDoc = {
       $set: {
           name,
           description,
         },
     };

   try {
       const updatedModel = await Model.updateOne(filter, updateDoc);
       res.json(updatedModel)
    } catch (error) {
        res.json({message: error})
    }
}

// Remove a Model of a Make Car
export async function deleteCarMakeModel(req, res) {
   try {
       const removedModel = await Make.deleteOne({_id: req.params.modelId});
       res.json(removedModel)
    } catch (error) {
        res.json({message: error})
    }
}
