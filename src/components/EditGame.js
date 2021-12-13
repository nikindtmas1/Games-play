import  { useState, useEffect } from'react';
import { useHistory } from 'react-router-dom';
import * as gameServise from '../services/data';

const EditGame = ({match}) => {

  let history = useHistory();
  const [currentGame, setCurrentGame] = useState({});

  useEffect(() => {

    gameServise.getOne(match.params.id)
    .then(result => setCurrentGame(result))
    
  },[]);

  const onSubmit = (e) => {
    e.preventDefauilt()

    let formData = new FormData(e.currentTarget)
    let title = formData.get('title');
    let category = formData.get('category');
    let maxLevel = formData.get('maxLevel');
    let imageUrl = formData.get('imageUrl');
    let summary = formData.get('summary');

    let data = { title, category, maxLevel, imageUrl, summary };

    console.log(data);
    gameServise.editGame(match.params.id, data)
    .then(history.push(`game-play/games/${match.params.id}`))

  }

    return (

        <section id="edit-page" className="auth">
          <form id="edit" method="POST" onSubmit={onSubmit}>
            <div className="container">

              <h1>Edit Game</h1>
              <label for="leg-title">Legendary title:</label>
              <input type="text" id="title" name="title" defaultValue={currentGame.title} />

              <label for="category">Category:</label>
              <input type="text" id="category" name="category" defaultValue={currentGame.category} />

              <label for="levels">MaxLevel:</label>
              <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={currentGame.maxLevel} />

              <label for="game-img">Image:</label>
              <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentGame.imageUrl} />

              <label for="summary">Summary:</label>
              <textarea name="summary" id="summary" defaultValue={currentGame.summary}></textarea>
              <input className="btn submit" type="submit" value="Edit Game" />

            </div>
          </form>
        </section>
    );
};

export default EditGame;