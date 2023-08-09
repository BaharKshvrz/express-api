import mongoose from "mongoose"

const ModelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true,
    },
    makeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Makes'
    },
});


export default mongoose.model("Models", ModelSchema) 