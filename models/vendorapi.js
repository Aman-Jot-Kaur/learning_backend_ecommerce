const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ApiSchema = new Schema({
  p_name: {
        type: String,
        required: [true, "product name is required"]
    }, 
 p_price: {
        type:Number,
        required: [true, "price is required"]
    }
})
const ApiModel = mongoose.model("vendorlist", ApiSchema)
module.exports = ApiModel