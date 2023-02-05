const Cube = require("../models/Cube");

exports.updateById = (id, update) => Cube.findByIdAndUpdate(id, update);

exports.findById = (id) => Cube.findById(id);

exports.deleteById = (id) => Cube.deleteOne({ _id: id });