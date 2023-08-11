import Car from "../schema/car.schema.js"

// Insert a User's Review
export async function createCarReview(input) {
    // Find the car you want to add the review to
    const car = await Car.findById(input.carId);
    if (!car) {
        throw new Error("Could not find the car!");
    }

   try {
        const newReview = {
              userId: input.userId,
              rating: input.rating,
              comment: input.comment,
            }

        // Add the review to the car's reviews array
        car.reviews.push(newReview);
        // Save the updated car document
        try {
           await car.save();
           return newReview;
        } catch (error) {
            throw e;
        }
    } catch (error) {
         throw error;
    }
  };

 
// Insert a User's Image
export async function uploadCarImages(input) {
    // Find the car you want to add the review to
    const car = await Car.findById(input.carId);
    if (!car) {
        throw new Error("Could not find the car!");
    }
   let imagesArr = [];
   try {
     for (let img of Object.keys(input.files)) {
        let newImages = {
          // userId: "64d480af5748ba8abb9cbeee",
           imageUrl: img,
       }
      car.images.push(newImages);
      imagesArr.push(newImages);

      try {
           await car.save();
        } catch (e) {
            throw e;
        }
    }
    return imagesArr;

    } catch (error) {
         throw error;
    }
  };
