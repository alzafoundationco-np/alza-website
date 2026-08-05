import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/6633f9bdcf1a9d0e83d9b51432ca5cce6d301fe2.png';
import { useTranslation } from 'react-i18next';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t('nav_home'), id: 'home' },
    { name: t('nav_about_us'), id: 'about' },
    { name: t('nav_programs'), id: 'programs' },
    { name: t('nav_donate'), id: 'get-involved' },
    { name: t('nav_impact_and_stories'), id: 'impact' },
    { name: t('nav_transparency'), id: 'transparency' },
    { name: t('nav_contact_faq'), id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted to h-auto and py-2 to give large items breathing room vertically if screen narrows */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center min-h-16 py-2 md:py-0">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
            <img src={logo} alt="ALZA Foundation" className="h-12 w-auto" />
          </div>

          {/* Mobile menu button wrapper - Fixed back to standard md:hidden */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation - PERMANENTLY SMALL TEXT (text-sm) and NO OVERLAPPING */}
          {/* We use flex-wrap here so if the screen is narrow, items wrap beautifully rather than crashing */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-x-2 lg:gap-x-4 py-2 text-sm font-medium flex-grow px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  currentPage === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA & Language Buttons - Standard md view alignment */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-accent/50 p-1 rounded-md text-sm border border-border">
              <Globe size={14} className="text-muted-foreground mx-1" />
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-0.5 rounded transition-colors font-medium ${
                  i18n.language.startsWith('en')
                    ? 'bg-white shadow text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-0.5 rounded transition-colors font-medium ${
                  i18n.language.startsWith('es')
                    ? 'bg-white shadow text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
            </div>

            <Button variant="outline" onClick={() => handleNavigate('student-portal')}>
              {t('nav_apply-now')}
            </Button>
            <Button onClick={() => handleNavigate('get-involved')}>
              {t('nav_donate')}
            </Button>
          </div>

        </div>
      </div>

      {/* Mobile menu - Back to standard md:hidden toggle layout */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base ${
                  currentPage === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <div className="pt-4 border-t border-border mt-4 space-y-3">
              {/* Mobile Language Switcher */}
              <div className="flex justify-between items-center px-3 py-1 bg-accent/30 rounded-md">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Globe size={16} /> Language / Idioma
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-1 rounded text-sm ${
                      i18n.language.startsWith('en') ? 'bg-primary text-primary-foreground font-bold' : 'bg-muted'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage('es')}
                    className={`px-3 py-1 rounded text-sm ${
                      i18n.language.startsWith('es') ? 'bg-primary text-primary-foreground font-bold' : 'bg-muted'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleNavigate('student-portal')}
              >
                {t('nav_apply-now')}
              </Button>
              <Button
                className="w-full"
                onClick={() => handleNavigate('get-involved')}
              >
                {t('nav_donate')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
