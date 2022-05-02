import './App.css';

import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/Components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';



const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/:userId/places' element={<UserPlaces />}></Route>
          <Route path='/places/new' index element={<NewPlace />}></Route>
          <Route path='/places/:placeId' element={<UpdatePlace />}></Route>
          <Route path='*' element={<Navigate to={"/"} replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
