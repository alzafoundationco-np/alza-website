import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { GetInvolvedPage } from './components/pages/GetInvolvedPage';
import { ImpactStoriesPage } from './components/pages/ImpactStoriesPage';
import { TransparencyPage } from './components/pages/TransparencyPage';
import { ContactPage } from './components/pages/ContactPage';
import { StudentPortalPage } from './components/pages/StudentPortalPage';
import { VolunteerPage } from './components/pages/VolunteerPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage onNavigate={handleNavigate} />;
      case 'get-involved':
        return <GetInvolvedPage onNavigate={handleNavigate} />;
      case 'impact':
        return <ImpactStoriesPage onNavigate={handleNavigate} />;
      case 'transparency':
        return <TransparencyPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'student-portal':
        return <StudentPortalPage />;
      case 'volunteer':
        return <VolunteerPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}