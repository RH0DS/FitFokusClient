import './App.css';

import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom';
import { useState, useAuth }                      from "react";
import Dashboard                                  from './Pages/Dashboard';
import NavMenu                                    from './Components/NavMenu';
import NoPage                                     from './Pages/NoPage';
import ProfilePage                                from './Pages/ProfilePage'
import HistoryPage                                from './Pages/HistoryPage'
import RegisterResultPage                         from './Pages/RegisterResultPage';
import LoginPage                                  from './Pages/LoginPage';






// function PrivateRoute({ element, ...rest }) {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? element : <Navigate to="/login" replace />;
// }
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage/>}/>  
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
