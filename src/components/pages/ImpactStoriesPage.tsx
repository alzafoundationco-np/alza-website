import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, ComposedChart } from 'recharts';
import { Play, Quote, Award, Target, Eye, Users, Shield, Heart, GraduationCap, TrendingUp, ChevronLeft, ChevronRight, House } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import itamarImage from 'figma:asset/3c124104c796c8786c87e839747db5a083ca3ee7.png';
import img1 from "figma:asset/df5faa72289ee44dc36480591a28e1c5e1eec3fd.png";
import img2 from "figma:asset/a94a5d4b122ee078c672871061a6d4214f9b3b90.png";
import img3 from "figma:asset/0299c6a38e7b39248f229800c3d244b83e40191c.png";
import img4 from "figma:asset/e3a3be76c2e9290d8287af36b91cbcabaeeb3359.png";
import img5 from "figma:asset/8881e1a3a99145ac7610a512b5248cc96e189499.png";
import yurleidisImg from "@/assets//yurleidis-screenshot.png";
import joseImg from "@/assets/jose-screenshot.png";

interface ImpactStoriesPageProps {
  onNavigate: (page: string) => void;
}

export function ImpactStoriesPage({ onNavigate }: ImpactStoriesPageProps) {
  const studentUniversitySupportData = [
    { year: '2023', students: 2 },
    { year: '2024', students: 2 },
    { year: '2025', students: 5 },
    { year: '2026 Est.', students: 9 },
  ];

  const studentLanguageSupportData = [
    { year: '2022', students: 5 },
    { year: '2023', students: 5 },
    { year: '2024', students: 6 },
    { year: '2025', students: 2 },
    { year: '2026 Est.', students: 7 },
  ];

  const scholarshipConversionData = [
    { name: 'Language Only', value: 2 },
    { name: 'University Only', value: 3 },
    { name: 'Language & University', value: 4 },
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

  const COLORS = ['#003087', '#FFBB28', '#FF8042'];

  const testimonials = [
    {
      name: 'Itamar Sofia Rodríguez Gonzalez',
      quote: 'Itamar was one of the first students to take part of the ALZA Foundation’s Scholarship programs. Her educational motivation led her to be accepted to the University Rafael Nunez where she is currently enrolled in a Law program with a focus on Criminal Law and Criminology. With support through the program, she strengthened her English language skills and became a summer English teacher in her community, Tierra Bomba. From Itamar: "La universidad ha sido un desafío, pero también una experiencia increíble que me ha permitido crecer como persona y profesional.',
      image: itamarImage,
      program: 'University Scholarship 2022',
      outcome: 'Law - Specialization in Criminal Law and Criminology',
    },
    {
      name: 'Jose Rodríguez Cervantes',
      quote: 'José is a highly studious and driven student supported by the ALZA Foundation. With remarkable discipline and determination, he taught himself English and achieved fluency in less than two years. His ambition, initiative, and commitment to self-improvement reflect the kind of perseverance that inspires those around him and positions him for continued success. From Jose: Este apoyo no es solo financiero, también me da esperanza y me recuerda que hay personas que creen en estudiantes como yo y eso significa más de lo que puedo explicar.',
      image: joseImg,
      program: 'Language and University Scholarship 2025',
      outcome: 'Finance and International Business',
    },
    {
      name: 'Yurleidis Herrera Herrera',
      quote: 'Yurleidis is one of the dedicated students supported by the ALZA Foundation. She was among the most studious students our founder had the privilege to teach, consistently demonstrating strong motivation, focus, and determination. Through her hard work and perseverance, she is successfully completing her university studies in Nursing to get prepared to serve as a pillar of strength and care within her community. From Yurleidis: Este apoyo no solo representa una contribución económica, sino también un voto de confianza en mi potencial y en mis sueños.',
      image: yurleidisImg,
      program: 'University Scholarship 2023',
      outcome: 'Nursing - Specialization in Audit Nursing',
    },
  ];

  const videoTestimonials = [
    {
      name: 'Itamar Sofia Rodríguez Gonzalez',
      title: 'From Street Vendor to Software Engineer',
      thumbnail: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjEwMzcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Bryon Jansen and Tierra Bomba students',
      title: 'Education through many forms',
      thumbnail: 'https://images.unsplash.com/photo-1760348082205-8bda5fbdd7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3VjY2VzcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MTA1MjUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Daniela Patricia Meza Valiente',
      title: 'Teaching the Next Generation',
      thumbnail: 'https://images.unsplash.com/photo-1758522276267-b3472583e954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjB0ZWFjaGluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYxMDQwNTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const areasServed = [
    { name: 'La Boquilla', students: 3 },
    { name: 'Tierra Bomba', students: 4 },
    { name: 'Villas de Aranjuez', students: 1 },
    { name: 'Olaya Herrera', students: 1 },
  ];

  const communitiesImpacted = [
    {
      name: 'Tierra Bomba',
      story: 'Tierra Bomba is a close-knit island community just minutes from Cartagena, Colombia, known for its strong cultural roots, fishing traditions, and resilience amid economic challenges, with growing efforts to create better opportunities for its residents, especially youth.',
      image: itamarImage,
    },
    {
      name: 'La Boquilla',
      story: 'La Boquilla is an Afro-Caribbean fishing neighborhood just north of Cartagena, known for its authentic coastal culture, calm beaches, and growing community-led sustainable tourism that highlights local history, nature, and traditions while strengthening opportunities for residents.',
      image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjEwMzcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Villas de Aranjuez',
      story: 'Villas de Aranjuez is a working-class neighborhood in Cartagena’s Barrios Unidos area where residents are seeing recent improvements in infrastructure, services, and community spaces, alongside ongoing efforts to expand access to health, education, and social support within the community.',
      image: 'https://images.unsplash.com/photo-1579378536395-cdb09ff8e2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjEwNzcyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Olaya Herrera',
      story: 'Olaya Herrera is a large, long-standing neighborhood in southeast Cartagena known for its strong community spirit and cultural vibrancy despite facing deep-rooted challenges like poverty, limited services, and high levels of violence.',
      image: 'https://images.unsplash.com/photo-1579378536395-cdb09ff8e2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2xvbWJpYW4lMjBzdHVkZW50cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjEwNzcyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const impactMetrics = [
    { label: 'Students Supported', value: '9', icon: Users },
    { label: 'University Scholarships Awarded', value: '7', icon: GraduationCap },
    { label: 'Language Scholarships Awarded', value: '11', icon: Target },
    { label: 'Communities Supported', value: '4', icon: House },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  Impact & Stories
              </h2>
          <p className="max-w-3xl mx-auto">
            See how your generosity opens the door to education and opportunity.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Our Impact in Numbers
              </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Students Supported Through <b>University</b> Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="96%" height={300}>
                  <BarChart data={studentUniversitySupportData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      yAxisId="left" 
                      label={{ value: 'Students', angle: -90, position: 'insideLeft', offset: 0 }} 
                    />
                    <Legend />
                    <Bar yAxisId="left" type="monotone" dataKey="students" fill="#003087" strokeWidth={2} name="Students" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Students Supported With <b>Foreign Language Classes</b> Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="96%" height={300}>
                  <BarChart data={studentLanguageSupportData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      yAxisId="left" 
                      label={{ value: 'Students', angle: -90, position: 'insideLeft', offset: 0 }} 
                    />
                    <Legend />
                    <Bar yAxisId="left" type="monotone" dataKey="students" fill="#FCD116" strokeWidth={2} name="Students" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><b>Scholarship Attribution</b></CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={scholarshipConversionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {scholarshipConversionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle><b>Areas Served in Cartagena</b></CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={areasServed} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={120} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section 
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Communities We Serve
              </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {communitiesImpacted.map((story, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-1">{story.name}</h3>
                    <p className="text-sm text-primary mb-3">{story.program}</p>
                    <p className="text-muted-foreground mb-4">{story.story}</p>
                    <p className="text-sm">{story.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Video Testimonials 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Video Stories
              </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="text-primary ml-1" size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1">{video.name}</h3>
                    <p className="text-sm text-muted-foreground">{video.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Impact Metrics */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Impact at a Glance
              </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
      </section>

      {/* Written Testimonials */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Student Stories
              </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Quote className="text-primary mb-4" size={32} />
                  <p className="mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                      <p className="text-sm text-primary">{testimonial.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="py-4 max-w-6x3 text-center mx-auto"><i>Stories and images shared with consent.</i></p>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center font-bold text-2xl">
            Stay Connected
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about new events, student stories, and impact updates from ALZA Foundation.
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

       {/* Story Carousel 
        <section className="py-10">
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


      {/* CTA 
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 font-bold">Be Part of the Next Success Story</h2>
          <p className="mb-8">
            Your support can help write the next chapter in a student's journey.
          </p>
          <Button size="lg" variant="secondary"
            
          >
            Support a Student Today
          </Button>
        </div>
      </section>*/}
    </div>
  );
}