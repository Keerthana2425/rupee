
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './pages';

import SignInPage from './pages/signin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { Switch } from '@mui/material';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Home />
      <Routes>
      {/* <Switch> */}
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
      {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default App;
