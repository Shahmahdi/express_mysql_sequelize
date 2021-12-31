const db = require("../models/index");

const Device = db.devices;

const addDevice = async (req, res, next) => {
  try {
    const device = await Device.create(req.body);
    res.status(200).send(device);
  } catch (error) {
    res.status(500).send("Something went wrong to create device");
  }
};

const getAllDevices = async (req, res, next) => {
  try {
    const devices = await Device.findAll({});
    res.status(200).send(devices);
  } catch (error) {
    res.status(500).send("Something went wrong to find all device");
  }
};

const getDeviceById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const device = await Device.findOne({ where: { id }});
    res.status(200).send(device);
  } catch (error) {
    res.status(500).send("Something went wrong to get single device");
  }
};

const updateDevice = async (req, res, next) => {
  try {
    const id = req.params.id;
    const device = await Device.update(req.body, { where: { id }});
    res.status(200).send(device);
  } catch (error) {
    res.status(500).send("Something went wrong to update single device");
  }
};

const deleteDevice = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Device.destroy({ where: { id }});
    res.status(200).send("Device has been deleted successfully.");
  } catch (error) {
    res.status(500).send("Something went wrong to delete single Device");
  }
};

module.exports = {
  addDevice,
  getAllDevices,
  getDeviceById,
  updateDevice,
  deleteDevice
};
