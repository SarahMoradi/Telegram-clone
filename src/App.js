import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
