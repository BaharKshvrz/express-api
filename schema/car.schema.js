import mongoose from "mongoose"
import ReviewSchema from "./review.schema.js";

export const ImageSchema = new mongoose.Schema({
    // userId: {
    //    type: mongoose.Schema.Types.ObjectId,
    //    required: true,
    //    ref: 'Users'
    //  },
     imageUrl: String
   });
   

const CarSchema = mongoose.Schema({
    name: String,
    make: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Makes'
    },
    model: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Models'
    },
    description: {
        type: String,
        require: true,
    },
    year: Number,
    color: String,
    price: Number,
    reviews: [ReviewSchema],  // Array of review sub-documents
    images: [ImageSchema],    // Array of images
});


export default mongoose.model("Cars", CarSchema) 