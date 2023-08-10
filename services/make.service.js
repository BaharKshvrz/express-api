import Make from "../models/make.schema.js"

// Get All Makes
export async function getAllMakes() {
    try {
      const result = await Make.find()
      return result;
    } catch (error) {
        throw e;
    }
 }
 
// Get a Make
export async function getMake(id) {
    try {
      const result = await Make.findById(id)
      return result;
    } catch (error) {
        throw e;
    }
 }
 
// Insert a Make
export async function createMake(input) {
    try {
      const result = await Make.create(input)
      return result;
    } catch (error) {
        throw e;
    }
 }

// Update a Make
export async function updateMake(filter, updateDoc) {
    try {
      const result = await Make.updateOne(filter, updateDoc);
      return result;
    } catch (error) {
        throw e;
    }
 }

// Delete a Make
export async function deleteMake(query) {
    try {
      const result = await Make.deleteOne(query);
      return result;
    } catch (error) {
        throw e;
    }
 }  