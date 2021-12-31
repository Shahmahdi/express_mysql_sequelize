const express = require("express");
const router = express.Router();
const {
  addDevice,
  getAllDevices,
  getDeviceById,
  updateDevice,
  deleteDevice
} = require("../controllers/Devices");

router.post("/", addDevice);
router.get("/", getAllDevices);
router.get("/:id", getDeviceById);
router.put("/:id", updateDevice);
router.delete("/:id", deleteDevice);

module.exports = router;
