import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/login";
import { Todo } from "./pages/Todo/Todo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/to-do" />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
