import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom";

import {Provider} from 'react-redux'
import { ToastContainer } from 'react-toastify';
import routes from "./routes";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
      <ToastContainer />
    </div>
    </Provider>
  );
}

export default App;
