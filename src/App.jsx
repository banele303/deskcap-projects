import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import JournalPage from './pages/JournalPage';
import FAQPage from './pages/FAQPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

import { services } from './data/servicesData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Find active service page (if on a service route like 'service-painting')
  const activeService = services.find(s => s.slug === currentPage) || null;

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F1611] flex flex-col font-sans">
      {/* Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onSelectProject={(proj) => setSelectedProject(proj)}
            showToast={showToast}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'services' && (
          <ServicesPage setCurrentPage={setCurrentPage} />
        )}
        {/* Individual Service Pages — all 10 */}
        {activeService && (
          <ServiceDetailPage
            service={activeService}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'blog' && (
          <JournalPage
            setCurrentPage={setCurrentPage}
            showToast={showToast}
          />
        )}
        {currentPage === 'faq' && (
          <FAQPage
            onOpenChat={() => setChatOpen(true)}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 'careers' && (
          <CareersPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'contact' && (
          <ContactPage showToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} showToast={showToast} />

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => {
          setSelectedProject(null);
          setCurrentPage('contact');
        }}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
