import { createCar, getAllCars } from "../services/car.service.js";
import { transformCar, transformCars } from "../transformation/carTransformation.js";
import { organizeAPIResult } from "../utils/helper.js";

// Get All Cars
export async function getCarsHandler(req, res) {
   const { currentPage, skip, perPage, sortField } = req.pagination;
   
   try {
      const { result, totalCount } = await getAllCars(skip, perPage, sortField);
      return res.json(organizeAPIResult(transformCars(result),
                      "List of cars retrieved successfully.", 
                      {
                        total: totalCount,
                        currentPage,
                        totalPages: Math.ceil(totalCount / perPage),
                        perPage}
                      ))
   } catch (error) {
      return res.json({message: error})
   }
  }


// Add a Car
export async function insertCarHandler(req, res) {
   const {name, make, model, year, color, price, description} = req.body;
   try {
      const savedCar= await createCar({name, make, model, year, color, price, description});
      return res.status(201).json(organizeAPIResult(transformCar(savedCar), "Car created successfully."))
   } catch (error) {
       return res.json({message: error})
   }
 }