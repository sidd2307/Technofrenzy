// import './App.css';
// import './css/App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AskQuestionPage from "./pages/askquestionpage/AskQuestionPage";
import Home from "./pages/home/Home";
import IndividualQuestionPage from "./pages/individualquestion/IndividualQuestionPage";

// pages import
import Login from './pages/signup/Login';
import Register from "./pages/signup/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/question/:questionid" element={<IndividualQuestionPage />} />
          <Route path="/askquestion" element={<AskQuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
