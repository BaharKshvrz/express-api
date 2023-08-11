const transformCar = (data) => {
  return {
     id: data._id,
     makeId: data.makeId,
     make: data.make.name,
     modelId: data.modelId,
     model: data.model.name,
     description: data.description,
     year: data.year,
     color: data.color,
     price: data.price,
  }
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
