const Game = require('../models/gameModel');


const getAll = () => Game.find();

const getOne = (id) => Game.findById(id);

const createGame = (data) => Game.create(data);

const update = (id, gameData) => Game.findByIdAndUpdate(id, gameData);
 
const getOwn = (userId) => Game.find({_ownerId: userId});

const deleteGame = (id) => Game.findByIdAndDelete(id);


module.exports = {
  getAll,
  getOne,
  createGame,
  update,
  getOwn,
  deleteGame
}