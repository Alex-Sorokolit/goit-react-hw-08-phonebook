import { Route, Routes } from 'react-router-dom';
// React
import { useEffect, lazy, Suspense } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { reLogIn } from 'redux/auth/auth-operations';
// Components
import { Layout } from './Layout/Layout';
import { selectIsReLogIn } from 'redux/auth/auth-selectors';
// Routes
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home1'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const loadingUser = useSelector(selectIsReLogIn);

  //  логінимось при монтуванні App якщо є токен
  useEffect(() => {
    dispatch(reLogIn());
  }, [dispatch]);

  // розмітка зарендериться після того як виконається запит за юзером
  return loadingUser ? (
    <h2>Loading...</h2>
  ) : (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
