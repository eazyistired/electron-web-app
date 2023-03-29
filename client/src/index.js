import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import MissingPage from "./pages/Missing";
import AdminDashboardPage from "./pages/AdminDashboard";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* PROTECTED ROUTES */}
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
