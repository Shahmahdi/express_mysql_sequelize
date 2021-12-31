const db = require("../models/index");

const Junction = db.junctions;

const createJuntion = async (req, res, next) => {
  try {
    const junction = await Junction.create(req.body);
    res.status(200).send(junction);
  } catch (error) {
    res.status(500).send("Something went wrong to create junction");
  }
};

const getAllJunctions = async (req, res, next) => {
  try {
    const junctions = await Junction.findAll({});
    res.status(200).send(junctions);
  } catch (error) {
    res.status(500).send("Something went wrong to get all junctions");
  }
};

const getJuntionById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const junction = await Junction.findOne({ where: { id }});
    res.status(200).send(junction);
  } catch (error) {
    res.status(500).send("Something went wrong to get single junctions");
  }
};

const updateJunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const junction = await Junction.update(req.body, { where: { id }});
    res.status(200).send(junction);
  } catch (error) {
    res.status(500).send("Something went wrong to update single junctions");
  }
};

const deleteJunction = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Junction.destroy({ where: { id }});
    res.status(200).send("Junction has been deleted successfully.");
  } catch (error) {
    res.status(500).send("Something went wrong to delete single junctions");
  }
};

module.exports = {
  createJuntion,
  getAllJunctions,
  getJuntionById,
  updateJunction,
  deleteJunction
};
