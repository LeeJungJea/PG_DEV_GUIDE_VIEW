import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PaymentDoc from './pages/api/PaymentDoc';
import CancelDoc from './pages/api/CancelDoc';
import StatusDoc from './pages/api/StatusDoc';
import Playground from './pages/Playground';
import Support from './pages/Support';

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
      </Routes>
    </Layout>
  );
}

export default App;
