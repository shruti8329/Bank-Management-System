import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegisterPage from "./components/RegisterPage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userInfo" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
