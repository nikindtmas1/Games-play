import * as service from '../services/gameService';

//const host = 'https://parseapi.back4app.com/';
//const host = 'http://localhost:3030';
const host = 'http://localhost:5000';
service.settings.host = host;

export async function getAll(){
    let games = await service.get(host + `/game-play/games`);
    let result = Object.values(games)
    return result;
 }
 
 //let games = await service.get(host + `/jsonstore/games`);

 export async function getOne(id){
     let game = await service.get(host + `/game-play/games/${id}`);
     //let result = Object.values(game)
     //console.log(result);
     return game;
     //.then(res => res.json())
 }
 
 export async function create(data){
    return await service.post(host + '/game-play/games',data);
}

export async function editGame(id, data){
    
    const response = await service.put(host + '/games' + id, data);
   
    return response
}

export async function deleteGame(id){
    return await service.del(host + '/games' + id);
}

// export async function searchCars(query){
//     return await service.get(host + `/37CCEB5C-F7E5-BFB6-FFAA-12879CF3A000/775F0275-7F15-48D6-87F9-41CFA9076E16/data/test_menu?props=price,${query}`)//url take not from test
// }
