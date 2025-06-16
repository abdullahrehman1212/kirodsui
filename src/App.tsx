import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AdminProvider } from './contexts/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import WordPressHosting from './pages/WordPressHosting';
import WooCommerceHosting from './pages/WooCommerceHosting';
import WebHosting from './pages/WebHosting';
import CloudHosting from './pages/CloudHosting';
import AgencyHosting from './pages/AgencyHosting';
import WebsiteBuilder from './pages/WebsiteBuilder';
import EcommerceBuilder from './pages/EcommerceBuilder';
import DomainSearch from './pages/DomainSearch';
import DomainTransfer from './pages/DomainTransfer';
import KirodsReach from './pages/KirodsReach';
import BusinessEmail from './pages/BusinessEmail';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import AdminMedia from './pages/admin/AdminMedia';
import AdminSettings from './pages/admin/AdminSettings';
import AdminContentEditor from './pages/admin/AdminContentEditor';
import AdminLayoutEditor from './pages/admin/AdminLayoutEditor';
import AdminThemeEditor from './pages/admin/AdminThemeEditor';
import AdminTypographyEditor from './pages/admin/AdminTypographyEditor';
import AdminWHMCSAPI from './pages/admin/AdminWHMCSAPI';

function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Toaster position="top-right" />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="media" element={<AdminMedia />} />
              <Route path="settings/:type" element={<AdminSettings />} />
              <Route path="pages/:page/:section" element={<AdminContentEditor />} />
              <Route path="layout/:type" element={<AdminLayoutEditor />} />
              <Route path="layout/theme" element={<AdminThemeEditor />} />
              <Route path="layout/typography" element={<AdminTypographyEditor />} />
              <Route path="whmcs-api" element={<AdminWHMCSAPI />} />
            </Route>
            
            {/* Public Routes */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <main className="transition-all duration-300 ease-in-out">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/forgot-password" element={<ForgotPassword />} />
                      <Route path="/wordpress-hosting" element={<WordPressHosting />} />
                      <Route path="/woocommerce-hosting" element={<WooCommerceHosting />} />
                      <Route path="/web-hosting" element={<WebHosting />} />
                      <Route path="/cloud-hosting" element={<CloudHosting />} />
                      <Route path="/agency-hosting" element={<AgencyHosting />} />
                      <Route path="/website-builder" element={<WebsiteBuilder />} />
                      <Route path="/ecommerce-builder" element={<EcommerceBuilder />} />
                      <Route path="/domain-search" element={<DomainSearch />} />
                      <Route path="/domain-transfer" element={<DomainTransfer />} />
                      <Route path="/kirods-reach" element={<KirodsReach />} />
                      <Route path="/business-email" element={<BusinessEmail />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AdminProvider>
  );
}

export default App;