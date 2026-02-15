import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  Megaphone, 
  MessageSquare,
  Heart,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';
import mentoringImage from 'figma:asset/1263a0da10cd1aa3b3d74ed518ed9464e6e354cc.png';
import boardMeetingImage from 'figma:asset/7bff0fd82011db3729486165deb9cd058a2c433d.png';
import volunteersImage from 'figma:asset/7e25970901c7a9b2be8181302a1ebfad35a5ab97.png';

interface VolunteerPageProps {
  onNavigate: (page: string) => void;
}

export function VolunteerPage({ onNavigate }: VolunteerPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [] as string[],
    availability: '',
    experience: '',
    motivation: '',
  });

  const volunteerRoles = [
    {
      icon: <MessageSquare size={32} />,
      title: 'Conduct Student Interviews',
      description: 'Help us evaluate scholarship applicants by conducting interviews and assessing their potential and commitment to education.',
      color: 'bg-blue-800',
    },
    {
      icon: <Users size={32} />,
      title: 'Student Mentorship & Support',
      description: 'Provide guidance, tutoring, and emotional support to our scholarship recipients as they navigate their educational journey.',
      color: 'bg-blue-800',
    },
    {
      icon: <Calendar size={32} />,
      title: 'Event Organization',
      description: 'Plan and coordinate community events, workshops, and networking opportunities for students and the broader ALZA community.',
      color: 'bg-blue-800',
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Fundraising Support',
      description: 'Participate in fundraising campaigns, donor outreach, and grant writing to help secure resources for our programs.',
      color: 'bg-blue-800',
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Marketing & Promotion',
      description: 'Spread awareness about ALZA Foundation through social media, community outreach, and communications efforts.',
      color: 'bg-blue-800',
    },
    {
      icon: <Heart size={32} />,
      title: 'Community Engagement',
      description: 'Build relationships with local communities, schools, and organizations to expand our reach and impact.',
      color: 'bg-blue-800',
    },
  ];

  const interestAreas = [
    'Student Interviews',
    'Mentorship & Tutoring',
    'Event Planning',
    'Fundraising',
    'Marketing & Communications',
    'Translation (English/Spanish)',
    'Graphic Design',
    'Social Media Management',
  ];

  const volunteerPhotos = [
    {
      url: boardMeetingImage,
      caption: 'Student Mentoring Session',
    },
    {
      url: mentoringImage,
      caption: 'Fundraising Planning',
    },
    {
      url: volunteersImage,
      caption: 'Volunteer Team',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.email || formData.interests.length === 0) {
      toast.error('Please fill in all required fields and select at least one area of interest.');
      return;
    }

    // Create email body with all form data
    const emailBody = `
Volunteer Application Submission

Personal Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}

Areas of Interest:
${formData.interests.map(interest => `- ${interest}`).join('\n')}

Availability: ${formData.availability || 'Not specified'}

Relevant Experience:
${formData.experience || 'None provided'}

Motivation:
${formData.motivation}

---
This application was submitted through the ALZA Foundation Volunteer page.
    `.trim();

    // Create mailto link with encoded body
    const mailtoLink = `mailto:alza.foundation.co@gmail.com?subject=Volunteer Application - ${formData.firstName} ${formData.lastName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Success message
    toast.success('Thank you for your interest in volunteering with ALZA Foundation! We will contact you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interests: [],
      availability: '',
      experience: '',
      motivation: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  Volunteer with ALZA Foundation
              </h2>
          <p className="max-w-3xl mx-auto">
            Join our community of passionate volunteers making a real difference in the lives of students from marginalized communities in Cartagena, Colombia. Your time, skills, and dedication help us create opportunities for educational success.
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-12 text-center font-bold text-2xl">
                  Why Volunteer With ALZA?
              </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Volunteering with ALZA Foundation offers meaningful opportunities to contribute to educational equity while developing new skills and building connections within our vibrant community.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${role.color} text-white mb-4`}>
                    {role.icon}
                  </div>
                  <h3 className="mb-3">{role.title}</h3>
                  <p className="text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="mb-12 text-center font-bold text-2xl">
                  Apply to volunteer
              </h2>
            <p className="text-muted-foreground">
              Fill out the form below to express your interest in volunteering with ALZA Foundation. We'll get back to you within 72 hours.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Areas of Interest * (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    {interestAreas.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={interest} className="text-sm cursor-pointer">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both Weekdays & Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any relevant volunteer or professional experience..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to volunteer with ALZA? *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Share your motivation and what you hope to contribute..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Submit Application
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  Clicking on Submit will generate an email in your default email client. Do not forget to click "Send" in the email to submit the volunteer application to the foundation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="mb-12 text-center font-bold text-2xl">
                  Our Volunteer Community
              </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See our amazing volunteers in action as they work together to create opportunities and transform lives through education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerPhotos.map((photo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-center">{photo.caption}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Make a Difference?</h2>
          <p className="mb-8">
            Whether you have a few hours a month or can commit to regular involvement, your contribution matters. Join us in empowering the next generation of leaders from Cartagena's communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Apply Now
            </Button>
            <Button 
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}