
const gameController = require('../controllers/gameController');

module.exports = (app) => {

    app.use('/game-play', gameController);
    
}