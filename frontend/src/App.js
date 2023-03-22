import Home from "./pages/Home"
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <SignUp /> : <Home />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
