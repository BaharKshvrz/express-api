import Car from "../schema/car.schema.js"

// Get All Cars
async function getAllCars(skip, perPage, sortField) {
    try {
      const result = await Car.find()
                              .populate({ path: 'make', select: 'name' })
                              .populate({ path: 'model', select: 'name' })
                              .populate("reviews")
                              .skip(skip)
                              .limit(perPage)
                              .sort({ [sortField]: 1 });

      const totalCount = await Car.countDocuments({}); // Total count of cars
      return { result, totalCount};
    } catch (error) {
        throw e;
    }
 }

// Insert a Car
async function createCar(input) {
  try {
    const result = await Car.create(input)
    return result;
  } catch (error) {
      throw e;
  }
}

 export {
    getAllCars,
    createCar,
 }
 