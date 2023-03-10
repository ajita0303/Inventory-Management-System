const inventoryModel = require("../models/inventory");
 
exports.getAllInventory = async () => {
  return await inventoryModel.find();
};
 
exports.createInventory = async (inventory) => {
  return await inventoryModel.create(inventory);
};
exports.getInventoryById = async (id) => {
  return await inventoryModel.find({"id": id})
};
 
exports.updateInventory = async (id, inventory) => {
  return await inventoryModel.findOneAndUpdate({"id": id}, inventory)
};
 
exports.deleteInventory = async (id) => {
  return await inventoryModel.findOneAndDelete({"id": id});
};