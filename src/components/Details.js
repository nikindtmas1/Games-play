 import { useState, useEffect } from "react";
 import { Link } from 'react-router-dom';

 //import * as gameService from '../services/gameService';
 import * as services  from '../services/data';
 
 const Details = ({
   match
  }) => {

    const [game, setGame] = useState({});

    useEffect(() => {
       services.getOne(match.params.id)
        .then(result => setGame(result))
    }, [match.params.id]);

    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

          <div className="game-header">
            <img className="game-img" alt="" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>

          <p className="text">
            {game.summary}
          </p>

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            <p className="no-comment">No comments.</p>
          </div>

          <div className="buttons">
            <Link to={`/edit/${game._id}`} className="button">Edit</Link>
            <Link to={`/delete/${game._id}`} className="button">Delete</Link>
          </div>
        </div>

        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>

      </section>
    );

 };

 export default Details;