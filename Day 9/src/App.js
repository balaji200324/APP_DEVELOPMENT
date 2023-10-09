import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Admin/Dashboard';
import Navbar from './components/admincomp/Navbar';
import Kanban from './components/admincomp/Kanban';
import Report from './components/admincomp/Report';
import './assests/css/index.css';
import Employee from './components/admincomp/Employee';
import CustomerPage from './components/admincomp/CustomerList';
import OrderPage from './components/admincomp/OrdersTable';
import CalendarPage from './components/admincomp/Calander';
import InventoryPage from './components/admincomp/Inventory';
import UserProfile from './components/admincomp/UserProfile';
import Footer from './components/admincomp/Footer';
import TermsAndConditions from './components/admincomp/termsAndConditons';
import PrivacyPolicy from './components/admincomp/privacy';
import FAQ from './components/admincomp/Faq';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
        <Navbar />
        <Routes>
          <Route path="/AdminDashboard" exact element={<Dashboard />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Customer" element={<CustomerPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/Calender" element={<CalendarPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/userprofile" element={<UserProfile/>}/>
          <Route path="/terms" element={<TermsAndConditions/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;



