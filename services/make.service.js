import Make from "../schema/make.schema.js"

// Get All Makes
async function getAllMakes() {
    try {
      const result = await Make.find()
      return result;
    } catch (error) {
        throw e;
    }
 }
 
// Get a Make
async function getMake(id) {
    try {
      const result = await Make.findById(id)
      return result;
    } catch (error) {
        throw e;
    }
 }
 
// Insert a Make
async function createMake(input) {
    try {
      const result = await Make.create(input)
      return result;
    } catch (error) {
        throw e;
    }
 }

// Update a Make
async function updateMake(filter, updateDoc) {
    try {
      const result = await Make.findOneAndUpdate(filter, updateDoc);
      return result;
    } catch (error) {
        throw e;
    }
 }

// Delete a Make
async function deleteMake(query) {
    try {
      const result = await Make.findOneAndDelete(query);
      return result;
    } catch (error) {
        throw e;
    }
 }  

 export {
    getAllMakes,
    getMake,
    createMake,
    updateMake,
    deleteMake
 }