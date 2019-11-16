import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // deixa a store (estado global) para todos os components da aplicaçao
import { ToastContainer } from 'react-toastify';

import "./config/ReactotronConfig";

import GlobalStyle from  "./styles/global"
import Header from "./components/Header";
import Routes from "./routes";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <GlobalStyle/>
      <ToastContainer autoClose={3000}/>
      <Routes/>
    </BrowserRouter>
    </Provider>
  )

};


export default App;
