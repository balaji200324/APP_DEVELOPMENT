import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Register from './pages/register';
import Home from './pages/Homepage';
import AboutUs from './pages/aboutus';
import Profile from'./pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from "./pages/dashboard"
import Schedule from './pages/schedule';

function App() {
  const routesWithHeaderAndFooter = ['/register', '/','/aboutus']; 
  const shouldShowHeaderAndFooter = (pathname) => {
    return routesWithHeaderAndFooter.includes(pathname);
  };

  return (
    <Router>
      <div className="App">

        {shouldShowHeaderAndFooter(window.location.pathname) && <Header />}
        
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homepage"element={<Home/>}/>
            <Route path="/profile"element={<Profile/>}/>
            <Route path="/schedule"element={<Schedule/>}/>
            <Route path="/aboutus"element={<AboutUs/>}/>
            
          </Routes>
        </main>


        {shouldShowHeaderAndFooter(window.location.pathname) && <Footer />}
      </div>
    </Router>
  );
}

export default App;
