import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import NavMenu from './Components/NavMenu';
import NoPage from './Pages/NoPage';
import ProfilePage from './Pages/ProfilePage'
import HistoryPage from './Pages/HistoryPage'
import RegisterResultPage from './Pages/RegisterResultPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* den första route med path "/" omsluter alla andra routes och blir då rot-urlen */}
        <Route path="/" element={<NavMenu/>}>
          <Route index element={<Dashboard />} />
          {/* index elementet (Dashboard i detta fall även känt som HOME) är det unika elemented som hör till roten */}
          <Route path="Profile" element={<ProfilePage />} />
          <Route path="History" element={<HistoryPage />} />      
          <Route path="RegisterResult" element={<RegisterResultPage />} />      
    
          <Route path="*" element={<NoPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
