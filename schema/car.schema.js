import mongoose from "mongoose"
import ReviewSchema from "./review.schema.js";

const CarSchema = mongoose.Schema({
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
    reviews: [ReviewSchema]  // Array of review sub-documents
});


export default mongoose.model("Cars", CarSchema) 