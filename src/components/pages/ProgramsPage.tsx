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

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

export function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const programs = [
    {
      title: 'Foreign Language Scholarship',
      icon: Languages,
      description: 'Financial assistance for English and other language instruction.',
      imageIcon: Globe,
      audience: [
        'High-potential students with clear academic and professional goals',
        'Students seeking language training to unlock higher education opportunities'
      ],
      eligibility: [
        'Student demonstrated true financial need',
        'Student showcased academic motivation to learn a foreign language',
        'Student presented strong and relevant professional goals',
      ],
      benefits: [
        'Foreign language skill certificate from a recognized language institution',
      ],
      process: [
        'Online Registration',
        'Interview',
        'Selection Committee Decision',
        'Class Enrollment',
        'Trial Period',
      ],
    },
    {
      title: 'University Scholarship Program',
      icon: GraduationCap,
      description: 'Partial or full tuition assistance, depending on need and available funding, to support students throughout their university studies.',
      imageIcon: University,
      audience: [
        'Students pursuing undergraduate degrees, with clear academic and professional goals', 
        'Students facing financial barriers to enrollment or continuation',
      ],
      eligibility: [
        'Student demonstrated true financial need',
        'Student demonstrated strong academic performance and a consistent commitment to excellence in their studies',
        'Student presented a clear professional plan',
      ],
      benefits: [
        'University diploma from a recognized university in Cartagena'
      ],
      process: [
        'Online Enrollment',
        'Interview',
        'Select Committee Decision',
        'University Enrollment',
        'Tuition payment',
      ],
    },
  ];

  const communitiesImpacted = [
    {
      name: 'Tierra Bomba',
      story: 'Tierra Bomba is a close-knit island community near Cartagena, Colombia, rooted in fishing and cultural traditions. Ongoing local efforts focus on expanding opportunities for young people.',
      image: 'https://images.unsplash.com/photo-1579378536395-cdb09ff8e2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    },
    {
      name: 'La Boquilla',
      story: 'La Boquilla is an Afro-Caribbean coastal community north of Cartagena, known for its fishing heritage and cultural traditions. Local initiatives in sustainable tourism help strengthen economic opportunities for residents.',
      image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjEwMzcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Villas de Aranjuez',
      story: 'Villas de Aranjuez is a working-class neighborhood in Cartagena’s Barrios Unidos area. Recent improvements in infrastructure and community services support ongoing efforts to expand access to health, education, and social support.',
      image: 'https://images.unsplash.com/photo-1579378536395-cdb09ff8e2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjEwNzcyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Olaya Herrera',
      story: 'Olaya Herrera is a large neighborhood in southeast Cartagena known for its community cohesion and cultural vibrancy. The area faces challenges such as limited resources, and high violence.',
      image: 'https://images.unsplash.com/photo-1579378536395-cdb09ff8e2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjEwNzcyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const successStories = [
    {
      name: 'Itamar Sofia Rodríguez Gonzalez',
      program: 'University Scholarship',
      story: 'To be update for Itamar',
      image: itamarImage,
      outcome: 'Law Program',
    },
    {
      name: 'Jose Rodríguez Cervantes',
      program: 'Language Scholarship & University Scholarship',
      story: 'To be updated for Jose',
      image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjEwMzcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      outcome: 'Finance and International Business Program',
    },
    {
      name: 'Arniela Meza Valiente',
      program: 'Language Scholarship & University Scholarship',
      story: 'To be updated for Arniela',
      image: 'https://images.unsplash.com/photo-1579378536395-cdb09ff8e2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjEwNzcyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      outcome: 'Tourism Program',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  Our Programs
              </h2>
          <p className="max-w-3xl mx-auto">
            ALZA Foundation supports students by removing financial barriers to education through targeted scholarship programs. Our programs focus on language preparation and university access for high-potential students from underserved communities in Colombia.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-8 bg-muted">
        <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-bold text-2xl"> 
            Our Approach to Impact
          </h2>
          <p className="max-w-6x3 text-center mx-auto">
            ALZA Foundation focuses on long-term educational access rather than one-time assistance. By supporting students at critical points in their educational journey, our programs aim to reduce structural barriers and expand opportunities for academic success.
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
                      <h3 className="mb-3">Audience</h3>
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
                      <h3 className="mb-3">Eligibility Criteria</h3>
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
                      <h3 className="mb-3">Program Benefits</h3>
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
                    Apply Now
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-bold">Application Process</CardTitle>
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
            <br/>Student Selection Process
          </h2>
          <p className="max-w-4x1 text-center mx-auto">
            Students are selected through an application process that considers <b>financial need</b>, <b> motivation</b>, and <b>alignment with program goals</b>. Selection decisions are made with the goal of maximizing educational impact while ensuring equitable access.
          </p>
        </div>
      </section>
      
      {/* Universities */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Institutions Our Scholars Attend
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
                  Communities We Serve
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
            <h2 className="mb-4 text-center font-bold">STUDENTS <br/>Ready to Apply?</h2>
            <p className="text-muted-foreground mb-8">
              Take the first step towards transforming your future. Our scholarship programs are designed to support you all the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => onNavigate('student-portal')}>
                  Start Your Application
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
                  Have Questions? Contact Us
                </Button>
            </div>
          </div>
          <div className="px-10 py-6">
              <h2 className="mb-4 text-center font-bold">DONORS <br/>Interested in supporting or learning more about out Programs?</h2>
              <p className="text-muted-foreground mb-8">
              Your support can create lasting change for a student and their community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => onNavigate('get-involved')}>
                  Support Our Programs
                </Button>
                <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        
    </div>
  );
}