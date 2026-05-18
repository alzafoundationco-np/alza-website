import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/6633f9bdcf1a9d0e83d9b51432ca5cce6d301fe2.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src={logo} alt="ALZA Foundation" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80">
              Expanding access to higher education for high-potential students in Colombia.
            </p>
            <p className="text-primary-foreground/80">
            [EIN: 41-2526575]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('impact')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Impact & Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transparency')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Transparency
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('get-involved')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Donate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('volunteer')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Volunteer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student-portal')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  Apply for Scholarship
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">9300 Harris Glen Dr, Charlotte, NC 28269, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:eroseau@alzaeducation.org" className="text-primary-foreground/80 hover:text-primary-foreground">
                  eroseau@alzaeducation.org
                </a>
              </li>
            </ul>
            {/*<div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin size={20} />
              </a>
            </div>*/}
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} ALZA Foundation, Inc. A U.S. registered 501(c)(3) nonprofit [EIN:  41-2526575]. All rights reserved. 
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <button 
              onClick={() => onNavigate('legal')} 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm underline"
            >
              Terms of Use
            </button>
            <span className="text-primary-foreground/40">|</span>
            <button 
              onClick={() => onNavigate('legal')} 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm underline"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}