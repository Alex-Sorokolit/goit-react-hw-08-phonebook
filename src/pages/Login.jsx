import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/auth-selectors';

const Login = () => {
  const error = useSelector(selectError);
  return (
    <div>
      <h2>Login</h2>
      <LogInForm />
      {error && <p>Неправильно введено Email або Password</p>}
    </div>
  );
};

export default Login;
