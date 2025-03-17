import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Dataset from "./pages/Dataset";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="history" element={<History />} />
        <Route path="sampleImages" element={<Dataset />} />
        <Route index element={<Navigate to="home" />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
