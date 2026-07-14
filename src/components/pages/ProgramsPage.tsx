import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GraduationCap, Languages, CheckCircle, ArrowRight, Award, BookOpenCheck, Globe, University } from 'lucide-react';
import itamarImage from 'figma:asset/3c124104c796c8786c87e839747db5a083ca3ee7.png';
import alianzaCanadiennseLogo from 'figma:asset/ced06a2a3ae08985eac8a1f06157a71c028301d2.png';
import elSinuLogo from 'figma:asset/fe7c6e2b7d6c73f8b19b23556280c1b69851616e.png';
import losLibertadoresLogo from 'figma:asset/1f41148405c004c991782613dc458bf64742334b.png';
import rafaelNunezLogo from 'figma:asset/05394fb99263a9d5dbb86de8abe522d90c3be5bf.png';
import uMayorLogo from 'figma:asset/ca69cd091e4d21ea872bfc6af75b374d33b785d4.png';
import unicolomboLogo from 'figma:asset/cc9f039e0af4e080a15ba1dac877f138a1d15de5.png';
import utbLogo from 'figma:asset/03b960d2ec7fbbb14b5f1b44e88892efa0741ab3.png';
import tierrabombaImg from "@/assets/tierra-bomba.jpg";
import laboquillaImg from "@/assets/la-boquilla.jpg";
import villaaranjuezImg from "@/assets/villa-aranjuez.jpg";
import olayaherreraImg from "@/assets/olaya-herrera.jpg";
import { useTranslation } from 'react-i18next';


interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const { t } = useTranslation();

  const programs = [
    {
      title: t('program_language_scholarship_section'),
      icon: Languages,
      description: t('program_language_scholarship_text'),
      imageIcon: Globe,
      audience: [
        t('program_language_scholarship_audience1'),
        t('program_language_scholarship_audience2')
      ],
      eligibility: [
        t('program_language_scholarship_eligibility1'),
        t('program_language_scholarship_eligibility2'),
        t('program_language_scholarship_eligibility3'),
      ],
      benefits: [
        t('program_language_scholarship_benefits'),
      ],
      process: [
        t('program_language_scholarship_process1'),
        t('program_language_scholarship_process2'),
        t('program_language_scholarship_process3'),
        t('program_language_scholarship_process4'),
        t('program_language_scholarship_process35'),
      ],
    },
    {
      title: t('program_university_scholarship_section'),
      icon: GraduationCap,
      description: t('program_university_scholarship_text'),
      imageIcon: University,
      audience: [
        t('program_university_scholarship_audience1'), 
        t('program_university_scholarship_audience2'),
      ],
      eligibility: [
        t('program_university_scholarship_eligibility1'),
        t('program_university_scholarship_eligibility2'),
        t('program_university_scholarship_eligibility3'),
      ],
      benefits: [
        t('program_university_scholarship_benefits')
      ],
      process: [
        t('program_university_scholarship_process1'),
        t('program_university_scholarship_process2'),
        t('program_university_scholarship_process3'),
        t('program_university_scholarship_process4'),
        t('program_university_scholarship_process5'),
      ],
    },
  ];

  const communitiesImpacted = [
    {
      name: t('community_tierra_bomba_section'),
      story: t('community_tierra_bomba_text'),
      image: tierrabombaImg,
    },
    {
      name: t('community_boquilla_section'),
      story: t('community_boquilla_text'),
      image: laboquillaImg,
    },
    {
      name: t('community_aranjuez_section'),
      story: t('community_aranjuez_text'),
      image: villaaranjuezImg,
    },
    {
      name: t('community_olaya_section'),
      story: t('community_olaya_text'),
      image: olayaherreraImg,
    },
  ];


  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  {t('nav_programs')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('program_mission')}
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-8 bg-muted">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-bold text-2xl"> 
            {t('program_approach')}
          </h2>
          <p className="max-w-6x3 text-center mx-auto">
            {t('program_approach_text')}
          </p>
        </div>
      </section>
      
      {/* Programs Detail */}
      {programs.map((program, index) => (
        <section key={index} className={index % 2 === 0 ? 'py-16' : 'py-16 bg-muted'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                <program.imageIcon size={200} className="text-primary w-full h-[400px] object-cover rounded-lg" />
              </div>
              <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <program.icon className="text-primary" size={24} />
                  </div>
                  <h2 className="font-bold">{program.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{program.description}</p>

                <div className="space-y-6">
                  <div>
                      <h3 className="mb-3">{t('program_audience_title')}</h3>
                      <ul className="space-y-2">
                        {program.audience.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3">{t('program_eligibility_title')}</h3>
                      <ul className="space-y-2">
                        {program.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                   <div>
                      <h3 className="mb-3">{t('program_benefits_title')}</h3>
                      <ul className="space-y-6">
                        {program.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  <Button onClick={() => onNavigate('student-portal')}>
                    {t('nav_apply-now')}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-bold">{t('program_application_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {program.process.map((step, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                        {i + 1}
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}

      {/* Student Selection */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
            <Award className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4" size={32} />   
            <br/>{t('program_selection_title')}
          </h2>
          <p className="max-w-4x1 text-center mx-auto">
            {t('program_selection_text1')} <b>{t('program_selection_text2')}</b>, <b> {t('program_selection_text3')}</b>{t('program_selection_text4')} <b>{t('program_selection_text5')}</b>{t('program_selection_text6')}
          </p>
        </div>
      </section>
      
      {/* Universities */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('program_institutions_section')}
              </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <img src={alianzaCanadiennseLogo} alt="Alianza Canadiense Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Alianza Canadiense - Escuela de Idiomas Extranjeros</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={elSinuLogo} alt="El Sinu Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Universidad del Sinu</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={losLibertadoresLogo} alt="Los Libertadores Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Fundación Universitaria Los Libertadores</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={rafaelNunezLogo} alt="Rafael Nunez Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Corporacion Universitaria Rafael Nunez</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={uMayorLogo} alt="UMayor Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Institucion Universitaria Mayor de Cartagena</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={unicolomboLogo} alt="Unicolombo Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Fundacion Universitaria Colombo Internacional</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={utbLogo} alt="Universidad Tecnológica de Bolívar Logo" className="w-full h-32 object-contain mb-4" />
              <p className="text-sm text-muted-foreground">Universidad Tecnológica de Bolívar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('community_section_title')}
              </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {communitiesImpacted.map((story, index) => (
              <Card key={index} className="max-w-xs mx-auto">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="mb-1">{story.name}</h3>
                    <p className="text-muted-foreground mb-0">{story.story}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12 divide-x divide-black">
          <div  className="px-10 py-6">
            <h2 className="mb-4 text-center font-bold">{t('program_cta_student_section')}<br/>{t('program_cta_student_call')}</h2>
            <p className="text-muted-foreground mb-8">
              {t('program_cta_student_text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => onNavigate('student-portal')}>
                  {t('program_cta_student_start')}
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
                  {t('program_cta_student_questions')}
                </Button>
            </div>
          </div>
          <div className="px-10 py-6">
              <h2 className="mb-4 text-center font-bold">{t('program_cta_donor_section')}<br/>{t('program_cta_donor_call')}</h2>
              <p className="text-muted-foreground mb-8">
              {t('program_cta_donor_text')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => onNavigate('get-involved')}>
                  {t('program_cta_donor_support')}
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
                  {t('footer_contact')}
                </Button>
              </div>
            </div>
          </div>
        </section>
        
    </div>
  );
}