import { createCar, getAllCars, getAllCarsForUplaod } from "../services/car.service.js";
import { createCarReview, uploadCarImages } from "../services/carInfo.services.js";
import { transformCarReview } from "../transformation/carReviewTransformation.js";
import { transformCar, transformCars } from "../transformation/carTransformation.js";
import { organizeAPIResult } from "../utils/helper.js";
import path from "path";
import { fileURLToPath } from 'url'

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

// Add a Review to a Car
export async function insertCarReviewHandler(req, res) {
  const carId = req.params.carId;
  const { userId, rating, comment } = req.body;
  try {
      const savedCarComment = await createCarReview({ carId, userId, rating, comment });
      return res.status(201).json(organizeAPIResult(transformCarReview(savedCarComment), "Car review created successfully."))
   } catch (error) {
       return res.json({message: error.message || error})
   }
 }

// Upload Photo for a car
export async function uploadCarImageHandler(req, res) {
   const cars = await getAllCarsForUplaod();
   let carsArr = [];
   for(let car of cars) {
       carsArr.push([car._id, car.name])
   }
   res.render('index', {data: carsArr});
  }
 
 // Add a Photo to a car
export async function insertCarImageHandler(req, res) {
   const __filename = fileURLToPath(import.meta.url)
   const __dirname = path.dirname(__filename)
   const files = req.files

   Object.keys(files).forEach(key => {
       const filepath = path.join(__dirname, 'public/images/cars', files[key].name)
       files[key].mv(filepath, (err) => {
           if (err) return res.status(500).json({ status: "error", message: err })
       })
   })

   // Add to car images
   const { carId }  = req.body;
   try {
      const savedCarImages = await uploadCarImages({ carId, files });
      return res.status(201).json(organizeAPIResult(transformCarReview(savedCarImages), "Car imgages uploaded successfully."))
   } catch (error) {
       return res.json({message: error.message || error})
   }


   // return res.json({ status: 'success', message: Object.keys(files).toString() })
  }
  