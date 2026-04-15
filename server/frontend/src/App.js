import LoginPanel from "./components/Login/Login"
import Header from "./components/Header/Header"
import Register from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;