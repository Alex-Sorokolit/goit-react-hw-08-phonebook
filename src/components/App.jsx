import { Route, Routes } from 'react-router-dom';
// React
import { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { reLogIn } from 'redux/auth/auth-operations';
// Components
import { Home } from 'pages/home';
import { Layout } from './Layout/Layout';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

// Components
export const App = () => {
  const dispatch = useDispatch();

  //  логінимось при монтуванні App якщо є токен
  useEffect(() => {
    dispatch(reLogIn());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
};
