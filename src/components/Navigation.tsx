import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/6633f9bdcf1a9d0e83d9b51432ca5cce6d301fe2.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Programs', id: 'programs' },
    { name: 'Donate', id: 'get-involved' },
    { name: 'Impact & Stories', id: 'impact' },
    { name: 'Transparency', id: 'transparency' },
    { name: 'Contact/FAQ', id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
            <img src={logo} alt="ALZA Foundation" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" onClick={() => handleNavigate('student-portal')}>
              Apply Now
            </Button>
            <Button onClick={() => handleNavigate('get-involved')}>
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-accent"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  currentPage === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleNavigate('student-portal')}
              >
                Apply Now
              </Button>
              <Button
                className="w-full"
                onClick={() => handleNavigate('donate')}
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
