import { ArrowRight, Users, GraduationCap, Heart, TrendingUp, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import img1 from "figma:asset/df5faa72289ee44dc36480591a28e1c5e1eec3fd.png";
import img2 from "figma:asset/a94a5d4b122ee078c672871061a6d4214f9b3b90.png";
import img3 from "figma:asset/0299c6a38e7b39248f229800c3d244b83e40191c.png";
import img4 from "figma:asset/e3a3be76c2e9290d8287af36b91cbcabaeeb3359.png";
import img5 from "figma:asset/8881e1a3a99145ac7610a512b5248cc96e189499.png";
import img6 from "figma:asset/dc13cb18f3c0ed87ec2614285f16480d58d29502.png";
import danielaImg from "figma:asset/0263f7f40c2bc666e9bf62859aef2e263ca0054a.png";
import itamarImg from "@/assets/5d37cdcd8ee043d74224177b6cab23de89e1a4ab.png";
import { useTranslation } from 'react-i18next';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation();

  const stats = [
    { label: t('metric_total-students-supported'), value: '9', icon: Users },
    { label: t('metric_active-university-scholarships'), value: '7', icon: GraduationCap },
    { label: t('metric_active-language-scholarships'), value: '4', icon: Globe },
  ];

  const recentUpdates = [
    {
      title: t('update_approval'),
      date: t('update_date_approval'),
      description: t('update_text_approval'),
    },
    {
      title: t('update_incorporation'),
      date: t('update_date_incorporation'),
      description: t('update_text_incorporation'),
    },
    {
      title: t('update_board'),
      date: t('update_date_board'),
      description: t('update_text_board'),
    },
  ];

  const testimonials = [
    {
      name: t('daniela_full_name'),
      role: t('testimonial_scholarship_type_uni'),
      quote: t('testimonial_daniela'),
      image: danielaImg,
    },
    {
      name: t('itamar_full_name'),
      role: t('testimonial_scholarship_type_lang-uni'),
      quote: t('testimonial_itamar'),
      image: itamarImg,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1678422151003-4a920e7a3de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJ0YWdlbmElMjBDb2xvbWJpYSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MjUzMzA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cartagena, Colombia"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-5xl md:text-6xl font-bold text-secondary">{t('alza_motto')}</h1>
          <p className="mb-8 max-w-2xl mx-auto">
          {t('header_mission')}  
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('get-involved')} className="px-8 py-6 text-lg">
              {t('donate-now')}
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-center font-bold text-2xl">
              {t('home_what-we-do')}
            </h2>
            <p className="mb-4 max-w-2xl mx-auto text-muted-foreground font-bold text-lg">
              {t('footer_mission')} 
            </p>
            <p className="max-w-4xl mx-auto text-muted-foreground">
              {t('Home_action-description_1')} 
            </p>
            <p className="max-w-4xl mx-auto text-muted-foreground">{t('home_action-description-2')}</p>
          </div>
          
          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Globe size={32} />
                </div>
                <h3 className="mb-3 font-bold">{t('home_program_card_language')}</h3>
                <p className="text-muted-foreground">{t('home_program_card_language_text')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <GraduationCap size={32} />
                </div>
                <h3 className="mb-3 font-bold">{t('home_program_card_university')}</h3>
                <p className="text-muted-foreground">{t('home_program_card_university_text')}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="mb-3 font-bold">{t('home_program_card_mentorship')}</h3>
                <p className="text-muted-foreground">{t('home_program_card_mentorship_text')}</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Mission & Vision Images 
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <img src={img1} alt="ALZA Foundation students with diplomas" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={img2} alt="ALZA Foundation community" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={img3} alt="ALZA Foundation teaching session" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={img4} alt="ALZA Foundation students with diplomas" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={img5} alt="ALZA Foundation community" className="w-full h-48 object-cover rounded-lg shadow-md" />
            <img src={img6} alt="ALZA Foundation teaching session" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>*/}
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('home_metric_section')}
              </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon size={32} />
                </div>
                <h2 className="mb-2">{stat.value}</h2>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('home_update_section')}
              </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max justify-center">
              {recentUpdates.map((update, index) => (
                <Card key={index} className="w-80 flex-shrink-0">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-2">{update.date}</p>
                    <h4 className="mb-2">{update.title}</h4>
                    <p className="text-sm text-muted-foreground">{update.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('home_testimonial_section')}
              </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <h4>{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-bold text-2xl">
            {t('home_newsletter_section')}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('home_newsetter_text')}
          </p>
          <div className="relative w-full" style={{ height: '270px' }}>
            <iframe 
              title='Signup form powered by Zeffy' 
              style={{ position: 'absolute', border: 0, top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%' }} 
              src='https://www.zeffy.com/en-US/embed/newsletter-form/subscribe-to-get-notified-about-new-events-31148' 
              allowTransparency={true}
            />
          </div>
        </div>
      </section>

      {/* Lawful statement */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-6x3 text-center mx-auto">
            {t('legal_statement')}
          </p>        
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">{t('home_cta_section')}</h2>
          <p className="mb-8">
            {t('home_cta_text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('get-involved')}>
              {t('home_cta_donation')}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground/10" onClick={() => onNavigate('about')}>
              {t('home_cta_programs')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}