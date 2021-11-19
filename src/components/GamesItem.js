import { Link } from 'react-router-dom';

const GamesItem = ({ 
    game,
    }) => {

   

    return (
        <div class="allGames">
            <div class="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <Link to={`/details/${game._id}`} class="details-button">Details</Link>
            </div>
        </div>

    );
};

export default GamesItem;