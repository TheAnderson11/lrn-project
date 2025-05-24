import LoginPage from './login';
import RegisterPage from './register';

const AuthPage = () => {
  return (
    <div>
      AuthPage
      <ul>
        <li>
          <LoginPage />
        </li>
        <li>
          <RegisterPage />
        </li>
      </ul>
    </div>
  );
};

export default AuthPage;
