import { Facebook, Twitter, InstagramIcon, Linkedin, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/6633f9bdcf1a9d0e83d9b51432ca5cce6d301fe2.png';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img src={logo} alt="ALZA Foundation" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80">
              {t('footer_mission')}
            </p>
            <p className="text-primary-foreground/80">
              {t('ein')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">{t('quick-links')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('nav_about_us')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('programs')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('programs')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('impact')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('nav_impact_and_stories')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transparency')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('nav_transparency')}
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="mb-4">{t('get-involved')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('get-involved')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('nav_donate')}
                </button>
              </li>
              {/*<li>
                <button onClick={() => onNavigate('volunteer')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('volunteer')}
                </button>
              </li>*/}
              <li>
                <button onClick={() => onNavigate('student-portal')} className="text-primary-foreground/80 hover:text-primary-foreground">
                  {t('footer_apply')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">9300 Harris Glen Dr, Charlotte, NC 28269, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:eroseau@alzaeducation.org" className="text-primary-foreground/80 hover:text-primary-foreground">
                  info@alzaeducation.org
                </a>
              </li>
            {/*<li className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Facebook size={20} />
              </a>*/}
              <li href="https://www.instagram.com/alzaeducation?igsh=MWNkdWpqYjZycjlhNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <InstagramIcon size={20} className="flex-shrink-0" />
                <a href="https://www.instagram.com/alzaeducation?igsh=MWNkdWpqYjZycjlhNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">
                  @alzaeducation
                </a>
              </li>
              {/*<a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin size={20} />
              </a>*/}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} {t('footer_legal')} 
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <button 
              onClick={() => onNavigate('legal')} 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm underline"
            >
              {t('terms-of-use')}
            </button>
            <span className="text-primary-foreground/40">|</span>
            <button 
              onClick={() => onNavigate('legal')} 
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm underline"
            >
              {t('privacy')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}