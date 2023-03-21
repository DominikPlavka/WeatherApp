import Home from "./pages/Home"
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
