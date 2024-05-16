import { Route, Routes}from'react-router-dom';
import Profile from "./pages/Profile"
import History from "./pages/History"
import Home from "./pages/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Dashboard from './pages/Dashboard';


function App() {

  return (
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Dashboard/>}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
  );
}
export default App
