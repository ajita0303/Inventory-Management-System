const express = require("express");
const {
  getAllInventory,
  createInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");
 
const router = express.Router();
 
router.route("/").get(getAllInventory).post(createInventory);
router.route("/:id").get(getInventoryById).put(updateInventory).delete(deleteInventory);
 
module.exports = router;