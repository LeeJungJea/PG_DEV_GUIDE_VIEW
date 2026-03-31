import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PaymentDoc from './pages/api/PaymentDoc';
import CancelDoc from './pages/api/CancelDoc';
import StatusDoc from './pages/api/StatusDoc';
import Playground from './pages/Playground';
import Support from './pages/Support';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import ApiManagement from './pages/admin/ApiManagement';
import InquiryManagement from './pages/admin/InquiryManagement';
import { useAuthStore } from './hooks/useAuth';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  // Simple check for role - in real app, we verify role === 'ADMIN'
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Navigate to="/api/payment" replace />} />
        <Route path="/api/payment" element={<PaymentDoc />} />
        <Route path="/api/cancel" element={<CancelDoc />} />
        <Route path="/api/status" element={<StatusDoc />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/support" element={<Support />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminRoute><Dashboard /></AdminRoute>} />
        <Route path="/admin/users" element={<AdminRoute><UserManagement /></AdminRoute>} />
        <Route path="/admin/api" element={<AdminRoute><ApiManagement /></AdminRoute>} />
        <Route path="/admin/support" element={<AdminRoute><InquiryManagement /></AdminRoute>} />
      </Routes>
    </Layout>
  );
}

export default App;
