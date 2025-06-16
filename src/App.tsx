import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
      </div>
    </Router>
  );
}

export default App;