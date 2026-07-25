import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from "./pages/Login";
import QMHPDashboard from "./pages/QMHPDashboard"
import ExecDashboard from "./pages/ExecutiveDashboard"
import ClientProfile from "./pages/ClientProfile"
import ClientList from "./pages/ClientList"
import Authorization from "./pages/AuthorizationDashboard"
import ProgressNotes from "./pages/ProgressNotes"
import Supervision from "./pages/SupervisionSession"
import { AuthProvider } from './auth/AuthProvider';
import ProtectedRoutes from "./utils/ProtectedRoutes"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/Dashboard' element={<QMHPDashboard />} />
          <Route path='/ExecDashboard' element={<ExecDashboard />} />
          <Route path='/ClientProfile' element={<ClientProfile />} />
          <Route path='/ClientList' element={<ClientList />} />
          <Route path='/Authorization' element={<Authorization />} />
          <Route path='/Notes' element={<ProgressNotes />} />
          <Route path='/Supervision' element={<Supervision />} />
          <Route path="*" element={<QMHPDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;