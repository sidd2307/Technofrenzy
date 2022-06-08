// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// pages import
import Login from './pages/signup/Login';
import Register from "./pages/signup/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
