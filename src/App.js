import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
