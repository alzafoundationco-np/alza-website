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
import { useTranslation } from 'react-i18next';

interface ImpactStoriesPageProps {
  onNavigate: (page: string) => void;
}

export function ImpactStoriesPage({ onNavigate }: ImpactStoriesPageProps) {
  const { t } = useTranslation();

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
    { name: t('impact_language_only'), value: 2 },
    { name: t('impact_university_only'), value: 3 },
    { name: t('impact_language_and_university'), value: 4 },
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
      name: t('itamar_full_name'),
      quote: t('impact_testimonial_itamar'),
      image: itamarImage,
      program: t('impact_itamar_scholarship'),
      outcome: t('impact_itamar_path'),
    },
    {
      name: t('jose_full_name'),
      quote: t('impact_testimonial_jose'),
      image: joseImg,
      program: t('impact_jose_scholarship'),
      outcome: t('impact_jose_path'),
    },
    {
      name: t('yurleidis_full_name'),
      quote: t('impact_testimonial_yurleidis'),
      image: yurleidisImg,
      program: t('impact_yurleidis_scholarship'),
      outcome: t('impact_yurleidis_path'),
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
    { name: t('community_boquilla_section'), students: 3 },
    { name: t('community_tierra_bomba_section'), students: 4 },
    { name: t('community_aranjuez_section'), students: 1 },
    { name: t('community_olaya_section'), students: 1 },
  ];

  const impactMetrics = [
    { label: t('metric_students-supported'), value: '9', icon: Users },
    { label: t('university-scholarships-awarded'), value: '7', icon: GraduationCap },
    { label: t('language-scholarships-awarded'), value: '11', icon: Target },
    { label: t('communities-supported'), value: '4', icon: House },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  {t('nav_impact_and_stories')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('impact_presentation')}
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('impact_numbers')}
              </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t('graph_student_university1')} <b>{t('graph_student_university2')}</b> {t('over_time')}</CardTitle>
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
                <CardTitle>{t('graph_student_language1')} <b>{t('graph_student_language2')}</b> {t('over_time')}</CardTitle>
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
                <CardTitle><b>{t('scholarship-attribution')}</b></CardTitle>
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
                <CardTitle><b>{t('areas-served-in-cartagena')}</b></CardTitle>
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
                  {t('impact_glance')}
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
                  {t('impact_students_stories')}
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
          <p className="py-4 max-w-6x3 text-center mx-auto"><i>{t('image_consent')}</i></p>
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