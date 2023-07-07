const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
   username: {
        type: String,
        unique:[true,"username already taken"],
        required: [true, "Firstname is required"]
    }, 
  password: {
        type: String,
        required: [true, "password is required"]
    },
  role:{
    type: String,
    required: [true, "role is required"]
  }

})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel