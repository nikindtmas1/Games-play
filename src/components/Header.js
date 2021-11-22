import { Link } from 'react-router-dom';

const Header = ({
  isAuthenticated,
  username
}) => {

  let guestNavigation = (
    <div id="guest">
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
  );

  let userNavigation = (
    <div id="user">
    <Link to="/create-game">Create Game</Link>
    <Link to="/logout">Logout</Link>
  </div>
  )

  return (
      <header>
      <h1><Link class="home" to="/home">GamesPlay</Link></h1>
      <nav>
        <Link to="/games">All games</Link>
        
       {isAuthenticated
        ? userNavigation
        : guestNavigation
       }
      </nav>
      </header>
  );
};

export default Header;