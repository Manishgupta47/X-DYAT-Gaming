import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import AdminPanel from "./pages/AdminPanel"; 
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/bg.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",  
          backgroundAttachment: "fixed", 
        }}
      >
        <Routes>
         
          <Route path="/" element={<HomePage />} />
          <Route path="/admin-info" element={<AdminPanel />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
