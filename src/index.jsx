import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar/index';
import App from './components/App';
import MyContainer from "./components/MyContainer";
import GlobalContext from "./context/index";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
    <MyContainer>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
    </MyContainer>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);
