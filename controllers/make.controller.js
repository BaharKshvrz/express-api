import Make from "../models/Make.js";

// Get All Makes of Car
export async function getAllCarMakes(req, res) {
   try {
      const makes = await Make.find();
      res.json(makes)
   } catch (error) {
      return res.json({message: error})
   }
  }

// Get a Make of Car
export async function getACarMake(req, res) {
   try {
      const make = await Make.findById(req.params.makeId);
      res.json(make)
   } catch (error) {
      return res.json({message: error})
   }
  }

// Add a Make of Car
export async function insertCarMake(req, res) {
   const newMake = new Make({
       name: req.body.name,
       description: req.body.description,
   })

  try {
     const saveMake= await newMake.save();
     res.status(201).json(saveMake)
  } catch (error) {
      res.json({message: error})
  }
}

// Update a Make of Car
export async function updateCarMake(req, res) {
   const filter = { _id: req.params.makeId };
   // create a document that sets the data for make
   const updateDoc = {
       $set: {
           name: req.body.name,
           description: req.body.description,
         },
     };

   try {
       const updatedMake = await Make.updateOne(filter, updateDoc);
       res.json(updatedMake)
    } catch (error) {
        res.json({message: error})
    }
}

// Remove a Make of Car
export async function deleteCarMake(req, res) {
   try {
       const removedMake = await Make.deleteOne({_id: req.params.makeId});
       res.json(removedMake)
    } catch (error) {
        res.json({message: error})
    }
}
