import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, MapPin, Clock, Facebook, Twitter, InstagramIcon, Linkedin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will respond within 48 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Successfully subscribed to our newsletter!');
    setNewsletterEmail('');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  Get In Touch
              </h2>
          <p className="max-w-3xl mx-auto">
            We welcome inquiries from partners, funders, and community members.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">Name</h4>
                      <p className="text-muted-foreground">
                        ALZA Foundation, Inc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">Address & Country of Registration</h4>
                      <p className="text-muted-foreground">
                        9300 Harris Glen Dr, NC 28269, USA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">Email</h4>
                      <a href="mailto:eroseau@alzaeducation.org" className="text-primary hover:underline">
                        info@alzaeducation.org
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">General inquiries & student applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <InstagramIcon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">Instagram</h4>
                      <a href="https://www.instagram.com/alzaeducation?igsh=MWNkdWpqYjZycjlhNg%3D%3D&utm_source=qr" className="text-primary hover:underline">
                        alzaeducation
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">Primary Area of Work</h4>
                      <p className="text-muted-foreground">
                        Cartagena, Colombia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle><b>Send Us a Message</b></CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="scholarship">Scholarship Information</SelectItem>
                            <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                            <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                            <SelectItem value="donation">Donation Question</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={12}
                        className="min-h-[200px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full"
                      onClick={() => window.location.href = "mailto:alza.foundation.co@gmail.com"}>
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lawful statement */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-6x3 text-center mx-auto">
            ALZA Foundation, Inc. is a U.S.-registered 501(c)(3) nonprofit organization, founded in 2025, supporting education access in Colombia. [EIN: 41-2526575]
          </p>        
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Frequently Asked Questions
              </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Is ALZA Foundation a 501(c)(3) nonprofit?</h4>
                <p className="text-muted-foreground">
                  Yes — ALZA Foundation is a public charity organization exempt under IRC Section 501(c)(3). Donors can deduct contributions they make to the foundation under IRC Section 170.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Are my donations tax-deductible?</h4>
                <p className="text-muted-foreground">
                  Yes — All donations made after our incorporation date (November 10th, 2025) are tax-deductible. Donors receive an emailed receipt for every contribution, which they can use when filing U.S. taxes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">How will my donation be used?</h4>
                <p className="text-muted-foreground">
                  Donations directly support our education and community programs, including: student scholarships, English-language education, mentorship and career readiness.<br/> Financial transparency is a priority, and we publish updates on how funds are allocated through our Newsletter.
                  ALZA Foundation is committed to maintain their annual administrative costs below 10%.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">Do you accept grant and partnership inquiries?</h4>
                <p className="text-muted-foreground">
                  Yes. We welcome inquiries from foundations and institutional partners aligned with our mission. For grant-related or partnership inquiries, please contact us directly at alza.foundation.co@gmail.com.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
