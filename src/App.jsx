import "./css/Tailwind.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Play from "./pages/log/Play";
import Jugar from "./pages/log/Jugar";
import NewGame from "./pages/log/game/NewGame";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/play" element={<Play />} />
          <Route path="/jugar" element={<Jugar />} />
          <Route path="/newgame" element={<NewGame />} />
          <Route path="/foro" element={<Foro />} />
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
