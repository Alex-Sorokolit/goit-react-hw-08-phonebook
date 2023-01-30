import { Route, Routes } from 'react-router-dom';
// React
// import { useEffect } from 'react';
// Redux
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// Components
import { Home } from 'pages/home';
import { Layout } from './Layout/Layout';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

// Components
export function App() {
  // const dispatch = useDispatch();

  // // запит всіх контактів при монтуванні App
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

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
}
