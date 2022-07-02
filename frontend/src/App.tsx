import React from "react";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Login from "./pages/login";
import NavBar from './components/Navbar/NavBar';
import RegisterForm from "./components/RegisterForm/RegisterForm";
import UserDashboard from './pages/userDashboard';
// React QUERY
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
