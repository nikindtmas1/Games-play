const express = require('express');
const router = express.Router();

const gameService = require('../services/gameServices');

// router.get('/', (req, res) => {
//     res.json({text: 'It is working!'})
// });

router.get('/games', async (req, res) => {

    let games = await gameService.getAll()
    res.json(games);
  
});

router.get('/games/:id', async (req, res) => {
    let game = await gameService.getOne(req.params.id);

    res.json(game)
});

// router.get('/details/:id', async (req, res) => {

   
//     try {
//         let result = await gameService.getOne(req.params.id);
        
//         res.json(result);

//     } catch (error) {
//         console.log(error);
//     }
// });

router.post('/games', async (req, res) => {

   await gameService.createGame({...req.body});
   res.json({ok: true})

});

module.exports = router;