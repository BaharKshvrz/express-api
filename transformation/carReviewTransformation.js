const transformCarReview = (data) => {
  return {
     id: data._id,
     user: data.userId,
     rating: data.rating,
     comment: data.comment,
  }
}

const transformCarReviews = (list) => {
  let listData = [];
  if (list) {
      for(let data of list) {
          listData.push(transformCar(data));
      }
  }
  return listData;
}
  
 export {
     transformCarReview,
     transformCarReviews,
 }
