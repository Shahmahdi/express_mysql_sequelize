const express = require('express');
const router = express.Router();
const { createJuntion, getAllJunctions, getJuntionById, updateJunction, deleteJunction } = require("../controllers/Junctions");

router.get('/', getAllJunctions);
router.post('/', createJuntion);
router.get('/:id', getJuntionById);
router.put('/:id', updateJunction);
router.delete('/:id', deleteJunction);

module.exports = router;
