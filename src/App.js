import './App.css';

import { BrowserRouter, Routes, Route  }   from 'react-router-dom';
import Dashboard                                    from './Pages/Dashboard';
import NavMenu                                      from './Components/NavMenu';
import NoPage                                       from './Pages/NoPage';
import ProfilePage                                  from './Pages/ProfilePage'
import HistoryPage                                  from './Pages/HistoryPage'
import RegisterResultPage                           from './Pages/RegisterResultPage';
import LoginPage                                    from './Pages/LoginPage';
import { useAuth0 }                                 from '@auth0/auth0-react';




function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage/>}/>  
          {/* den första route med path "/" omsluter alla andra routes och blir då rot-urlen */}
          <Route path="/"  element = { (isAuthenticated ? <NavMenu isAuthenticated={isAuthenticated}/> : <LoginPage/>)}>

            <Route index element={<Dashboard />} />
            {/* index elementet (Dashboard i detta fall även känt som HOME) är det unika elemented som hör till roten */}
            <Route path="Profile" element={<ProfilePage />} />
            <Route path="Login" element={<LoginPage />} />
            <Route path="History" element={<HistoryPage />} />      
            <Route path="RegisterResult" element={<RegisterResultPage />} />      
  
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
