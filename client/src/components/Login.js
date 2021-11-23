//import { useHistory} from 'react-router-dom';
import * as authServise from '../services/authServise';

const Login = ({
  history,
  onLogin
}) => {

//let historyHook = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget)
    let email = formData.get("email");
    let password = formData.get("password");

    console.log(email, password);
    //onLogin(email)
    history.push('/')
    //historyHook.push('/games');

    authServise.login(email)
  };

    return (
        <section id="login-page" class="auth">
        <form id="login" onSubmit={onFormSubmit} method="POST">

          <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
            <input type="submit" class="btn submit" value="Login" />
            <p class="field">
              <span>If you don't have profile click <a href="#">here</a></span>
            </p>
          </div>
        </form>
      </section>
    );
};

export default Login;