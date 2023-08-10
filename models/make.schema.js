import mongoose from "mongoose"

const MakeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true,
    },
});


export default mongoose.model("Makes", MakeSchema) 