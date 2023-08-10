import Model from "../schema/model.schema.js"

// Get All Models
export async function getAllCarModelsByMakeId(query) {
    try {
      const result = await Model.find(query)
      return result;
    } catch (error) {
        throw e;
    }
 }
 
// Get a Model
export async function getModel(id) {
    try {
      const result = await Model.findById(id)
      return result;
    } catch (error) {
        throw e;
    }
 }
 
// Insert a Model
export async function createModel(input) {
    try {
      const result = await Model.create(input)
      return result;
    } catch (error) {
        throw e;
    }
 }

// Update a Model
export async function updateModel(filter, updateDoc) {
    try {
      const result = await Model.findOneAndUpdate(filter, updateDoc);
      return result;
    } catch (error) {
        throw e;
    }
 }

// Delete a Model
export async function deleteModelRecord(query) {
    try {
      const result = await Model.findOneAndDelete(query);
      return result;
    } catch (error) {
        throw e;
    }
 }  