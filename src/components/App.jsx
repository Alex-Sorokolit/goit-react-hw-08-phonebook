import { Route, Routes } from 'react-router-dom';
// React
import { useEffect, lazy, Suspense } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { reLogIn } from 'redux/auth/auth-operations';
// Components
import { Layout } from './Layout/Layout';

import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  //  логінимось при монтуванні App якщо є токен
  useEffect(() => {
    dispatch(reLogIn());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
