import mongoose from "mongoose"

const CarSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
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
});


export default mongoose.model("Cars", CarSchema) 