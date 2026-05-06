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

export function AboutPage() {
  const teamMembers = [
    {
      name: 'Bryon Jansen',
      role: 'President/Chair & Co-founder',
      bio: 'North Carolina, USA',
      image: bryonImage,
    },
    {
      name: 'Emilie Roseau',
      role: 'Treasurer, Director of Operations & Co-founder',
      bio: 'North Carolina, USA',
      image: emilieImage,
    },
    {
      name: 'Kara Perez',
      role: 'Secretary',
      bio: 'Massachusetts, USA',
      image: karaImg,
    },
    {
      name: 'Daniel Burkowsky',
      role: 'Governance Director',
      bio: 'New York, USA',
      image: danielImage,
    },
    {
      name: 'Christina Bubuioc',
      role: 'Director of Programs',
      bio: 'North Carolina, USA',
      image: christinaImage,
    },
    {
      name: 'Flora Cazalis',
      role: 'Director of Communication',
      bio: 'London, UK',
      image: floraImage,
    },
  ];

  const impactMetrics = [
    { label: 'Students Supported', value: '11', icon: Users },
    { label: 'University Scholarships Awarded', value: '7', icon: GraduationCap },
    { label: 'Language Scholarships Awarded', value: '7', icon: Target },
    { label: 'Communities Supported', value: '4', icon: Target },
    { label: 'Average annual cost per Student', value: '$1,000', icon: Target },
    { label: 'Success Rate', value: '100%', icon: TrendingUp },
  ];

  
  const storyImages = [
    {
      url: img1,
      caption: 'Our students in Cartagena'
    },
    {
      url: img2,
      caption: 'English classes in our communities'
    },
    {
      url: img3,
      caption: 'Celebrating our graduates'
    },
    {
      url: img4,
      caption: 'Community engagement and support'
    },
    {
      url: img5,
      caption: 'Mentoring and guidance'
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
                  About ALZA Foundation
              </h2>
          <p className="max-w-3xl mx-auto">
            ALZA Foundation, Inc. is a U.S.-registered nonprofit organization dedicated to expanding access to language learning and higher education for high-potential students in Colombia.
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
                  <h2>Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To expand access to language education and higher education for high-potential students in Colombia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <h2>Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  A future in which talented students can pursue education regardless of socioeconomic barriers.
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
                  Our Values
              </h2>
              <p className="mb-8 text-center text-muted-foreground">From board members to volunteers and students alike, we uphold the following values in every action, decision, and interaction with our communities and donors.</p>
        </div>
        <div className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Shield size={32} />
              </div>
              <h3 className="mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Acting honestly and ethically in all circumstances.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users size={32} />
              </div>
              <h3 className="mb-3">Respect</h3>
              <p className="text-muted-foreground">
                Valuing diverse perspectives and treating everyone with dignity.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Target size={32} />
              </div>
              <h3 className="mb-3">Accountability</h3>
              <p className="text-muted-foreground">
                Taking responsibility for actions and decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award size={32} />
              </div>
              <h3 className="mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for quality and diligence in all work.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Heart size={32} />
              </div>
              <h3 className="mb-3">Student-Centered Support</h3>
              <p className="text-muted-foreground">
                Prioritizing the needs of our beneficiaries and their communities.
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
                  Our Origin
              </h2>
          
              <div className="relative">
                  {/* Vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 -translate-x-1/2" />
          
                  {/* Timeline item */}
                  {[
                    {
                      year: "2016–2019",
                      text:
                        "In Cartagena, Colombia, our founder began teaching basic English in Tierra Bomba and La Boquilla. With volunteer support, the initiative grew to serve over 30 students and open new opportunities through language.",
                    },
                    {
                      year: "2019–2024",
                      text:
                        "After returning to the U.S., our founder continued supporting students by funding their English education. As students reached university age, he stepped in to fully cover the cost of higher education.",
                    },
                    {
                      year: "2025",
                      text:
                        "To ensure no student is held back by financial barriers, ALZA Foundation, Inc. was founded and the board of directors was established.",
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
                  ALZA exists because talent is everywhere, but opportunity is not.
                </p>
              </div>
      
            </div>
          </div>
        </section>

            {/* Story Carousel 
        <section className="py-10 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mt-12">
        
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {storyImages.map((image, index) => (
                    <div key={index} className="min-w-full px-4">
                      <div className="text-center">
                        <ImageWithFallback
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-[500px] object-contain rounded-lg mx-auto"
                        />
                        <p className="text-sm text-muted-foreground mt-4">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        
              {/* Navigation Buttons
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
        
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
        
              {/* Dots Indicator
              <div className="flex justify-center gap-2 mt-6">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
        
            </div>
          </div>
        </section>*/}
      

            {/* Impact Metrics 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Impact at a Glance
              </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <metric.icon size={32} />
                </div>
                <h2 className="mb-2">{metric.value}</h2>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-bold text-2xl">
                  Our Team
              </h2>
          <p className="mb-8 max-w-7xl text-center mx-auto">
            ALZA Foundation is governed by a volunteer Board of Directors and operated with program and administrative support from volunteers and partners.
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