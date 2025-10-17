import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { ServiceOTKPage } from './pages/services/ServiceOTKPage';
import { ServiceMSTOPage } from './pages/services/ServiceMSTOPage';
import { ServiceInsurancePage } from './pages/services/ServiceInsurancePage';
import { ServiceTachographPage } from './pages/services/ServiceTachographPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/m1" element={<CategoryPage categoryId="m1" />} />
          <Route path="/m2-m3" element={<CategoryPage categoryId="m2-m3" />} />
          <Route path="/n1-n2-n3" element={<CategoryPage categoryId="n1-n2-n3" />} />
          <Route path="/o1-o2-o3-o4" element={<CategoryPage categoryId="o1-o2-o3-o4" />} />
          <Route path="/ktz-dangerous" element={<CategoryPage categoryId="ktz-dangerous" />} />

          {/* Service pages */}
          <Route path="/services/otk" element={<ServiceOTKPage />} />
          <Route path="/services/msto" element={<ServiceMSTOPage />} />
          <Route path="/services/insurance" element={<ServiceInsurancePage />} />
          <Route path="/services/tachograph" element={<ServiceTachographPage />} />

          {/* Catch-all route for unmatched paths - redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}