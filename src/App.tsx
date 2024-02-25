import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Dashboard from "./pages/dashboard";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import AddTask from "./pages/addTask";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import UpdateTask from "./pages/updateTask";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />=
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/addTask" element={<ProtectedRoute />}>
            <Route path="/addTask" element={<AddTask />} />
          </Route>
          <Route path="/updateTask/:id" element={<ProtectedRoute />}>
            <Route path="/updateTask/:id" element={<UpdateTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
