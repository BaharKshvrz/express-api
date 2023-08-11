import { transformCarReview } from "./carReviewTransformation.js";

const transformCar = (data) => {
 const baseCar = {
      id: data._id,
      name: data.name,
      makeId: data.makeId,
      make: data.make.name,
      modelId: data.modelId,
      model: data.model.name,
      description: data.description,
      year: data.year,
      color: data.color,
      price: data.price,
 };

 let reviewArr = []
  data.reviews.forEach(review => {
     reviewArr.push(transformCarReview(review))
  });
  
  baseCar.reviews = reviewArr;
  return baseCar;
}

const transformCars = (list) => {
  let listData = [];
  if (list) {
      for(let data of list) {
          listData.push(transformCar(data));
      }
  }
  return listData;
}
  
 export {
   transformCar,
   transformCars,
 }
