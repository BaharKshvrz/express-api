import mongoose from "mongoose"

const ReviewSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Users'
    },
    rating: Number,
    comment: String
  });
  
export default ReviewSchema;