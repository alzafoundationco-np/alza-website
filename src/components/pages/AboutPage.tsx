import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, Target, Eye, Users, Shield, Heart, GraduationCap, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import bryonImage from 'figma:asset/1d22f15f82c9c3f7d2bfbadb79d2f714c5ef1b7c.png';
import emilieImage from 'figma:asset/b0944624a883e20e9aee747c4ce99b394e9a1127.png';
import danielImage from 'figma:asset/9521d81cda55793fb4d45d108f8cfbad11325cd3.png';
import christinaImage from 'figma:asset/aa6db8a719ef7cf60a30a071380d836dbbad31cc.png';
import floraImage from 'figma:asset/8ac47d6c65e59e2235d8ea93d2a4063b989f4751.png';
import joelImage from 'figma:asset/b1c50466771f994d9bd6481e3fb502218b94a64d.png';
import img1 from "figma:asset/df5faa72289ee44dc36480591a28e1c5e1eec3fd.png";
import img2 from "figma:asset/a94a5d4b122ee078c672871061a6d4214f9b3b90.png";
import img3 from "figma:asset/0299c6a38e7b39248f229800c3d244b83e40191c.png";
import img4 from "figma:asset/e3a3be76c2e9290d8287af36b91cbcabaeeb3359.png";
import img5 from "figma:asset/8881e1a3a99145ac7610a512b5248cc96e189499.png";
import karaImg from"@/assets/kara.jpeg";
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Bryon Jansen',
      role: t('team_role_president'),
      bio: t('team_location_nc'),
      image: bryonImage,
    },
    {
      name: 'Emilie Roseau',
      role: t('team_role_operations'),
      bio: t('team_location_nc'),
      image: emilieImage,
    },
    {
      name: 'Kara Perez',
      role: t('team_role_secretary'),
      bio: t('team_location_ma'),
      image: karaImg,
    },
    {
      name: 'Daniel Burkowsky',
      role: t('team_role_governance'),
      bio: t('team_location_ny'),
      image: danielImage,
    },
    /*{
      name: 'Christina Bubuioc',
      role: t('team_role_programs'),
      bio: t('team_location_nc'),
      image: christinaImage,
    },*/
    {
      name: 'Flora Cazalis',
      role: t('team_role_communication'),
      bio: t('team_location_uk'),
      image: floraImage,
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % storyImages.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + storyImages.length) % storyImages.length);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  {t('about-alza-foundation')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('about_mission')}
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-5 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="text-primary" size={24} />
                  </div>
                  <h2>{t('about-us-mission-section')}</h2>
                </div>
                <p className="text-muted-foreground">
                  {t('about-us-mission-text')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <h2>{t('about-us-vision-section')}</h2>
                </div>
                <p className="text-muted-foreground">
                  {t('about-us-vision-text')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('about-us-values-section')}
              </h2>
              <p className="mb-8 text-center text-muted-foreground">{t('about-us-values-text')}</p>
        </div>
        <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Shield size={32} />
              </div>
              <h3 className="mb-3">{t('about-us-value-integrity-section')}</h3>
              <p className="text-muted-foreground">
                {t('about-us-values-integrity-text')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users size={32} />
              </div>
              <h3 className="mb-3">{t('about-us-values-respect-section')}</h3>
              <p className="text-muted-foreground">
                {t('about-us-values-respect-text')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Target size={32} />
              </div>
              <h3 className="mb-3">{t('about-us-values-accountability-section')}</h3>
              <p className="text-muted-foreground">
                {t('about-us-values-accountability-text')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award size={32} />
              </div>
              <h3 className="mb-3">{t('about-us-values-excellence-section')}</h3>
              <p className="text-muted-foreground">
                {t('about-us-values-excellence-text')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Heart size={32} />
              </div>
              <h3 className="mb-3">{t('about-us-values-students-section')}t</h3>
              <p className="text-muted-foreground">
                {t('about-us-values-students-text')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
          {/* Our Story */}
      <section className="py-10 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('about-us-origin-section')}
              </h2>
          
              <div className="relative">
                  {/* Vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 -translate-x-1/2" />
          
                  {/* Timeline item */}
                  {[
                    {
                      year: "2016–2019",
                      text:
                        t('about-us-origin-2016'),
                    },
                    {
                      year: "2019–2024",
                      text:
                        t('about-us-origin-2019'),
                    },
                    {
                      year: "2025",
                      text:
                        t('about-us-origin-2025'),
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`relative mb-12 flex items-center ${
                        index % 2 === 0
                          ? "justify-start md:justify-start"
                          : "justify-start md:justify-end"
                      }`}
                    >
                      {/* Dot */}
                      <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />
          
                      {/* Card */}
                      <div
                        className={`w-full md:w-5/12 p-6 rounded-xl bg-background shadow-sm ${
                          index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                        }`}
                      >
                        <span className="text-sm font-semibold text-primary">
                          {item.year}
                        </span>
                        <p className="mt-2 text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
          
                {/* Call to action */}
              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="font-semibold text-lg">
                  {t('about-us-statement')}
                </p>
              </div>
      
            </div>
          </div>
        </section>


      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-bold text-2xl">
                  {t('about-us-team-section')}
              </h2>
          <p className="mb-8 max-w-7xl text-center mx-auto">
            {t('about-us-team-text')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}