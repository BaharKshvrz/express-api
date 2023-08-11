import Car from "../schema/car.schema.js"

// Insert a User Review
export async function createCarReview(input) {
   try {
        // Find the car you want to add the review to
        const car = await Car.findById(input.carId);
        if (!car) {
            return;
        }

        const newReview = {
              userId: input.userId,
              rating: input.rating,
              comment: input.comment,
            }

            console.log("new", newReview);

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
