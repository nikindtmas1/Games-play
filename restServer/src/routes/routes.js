
const gameController = require('../controllers/gameController');

module.exports = (app) => {

    app.use('/journey', gameController);
    
}