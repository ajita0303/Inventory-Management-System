const inventoryService = require("../services/inventoryService");
exports.getAllInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.getAllInventory();
    res.json({ data: inventory, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.createInventory(req.body);
    res.io.emit("message",{
        status:"INVENTORY_CREATED", 
    })
    res.json({ data: inventory, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getInventoryById = async (req, res) => {
  try {
    const inventory = await inventoryService.getInventoryById(req.params.id);
    res.json({ data: inventory, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.updateInventory(req.params.id, req.body);
    res.io.emit("message",{
        status:"INVENTORY_UPDATED", 
    })
    res.json({ data: inventory, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.deleteInventory(req.params.id);
    res.io.emit("message",{
        status:"INVENTORY_DELETED", 
    })
    res.json({ data: inventory, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};