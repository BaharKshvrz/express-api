import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    username: String,
    email: String,
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String
      },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
});


export default mongoose.model("Users", UserSchema) 