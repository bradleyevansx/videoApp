import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import { initializeApp } from "firebase/app";
import { config } from "../src/config/config";
import Auth from "./comonents/Auth";

initializeApp(config);

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
