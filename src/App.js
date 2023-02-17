import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDash from './pages/AdminDash';
import StudentsHomePage from './pages/StudentsHomePage';
import SkolarineUplate from './components/SkolarineUplate';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admindashboard" element={<AdminDash />} />
          <Route path="/skolarine" element={<SkolarineUplate />} />
          <Route path="/studentshomepage" element={<StudentsHomePage />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
