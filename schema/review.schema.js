import mongoose from "mongoose"

const ReviewSchema = new mongoose.Schema({
    user: String,
    rating: Number,
    comment: String
  });
  
export default ReviewSchema;