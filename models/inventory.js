const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const inventorySchema = new Schema({
    id: {type: String, index: true},
    name : String,
    quantity : Number
});
 
module.exports = mongoose.model("inventory", inventorySchema);