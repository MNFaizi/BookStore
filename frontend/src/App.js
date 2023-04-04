import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {VStack} from '@chakra-ui/react'
import LoginPage from "./pages/login";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";

function App() {
  return (
    <VStack>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
