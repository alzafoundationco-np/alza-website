import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, MapPin, Clock, Facebook, Twitter, InstagramIcon, Linkedin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useTranslation } from 'react-i18next';

export function ContactPage() {
  const { t } = useTranslation();

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
                  {t('get-in-touch')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('contact_welcome')}
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Contact Information */}
            <div className="flex flex-col justify-between gap-4 md:gap-0 h-full">
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">{t('name')}</h4>
                      <p className="text-muted-foreground">
                        {t('alza_full_name')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">{t('address_title')}</h4>
                      <p className="text-muted-foreground">
                        9300 Harris Glen Dr, NC 28269, USA
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">{t('email_title')}</h4>
                      <a href="mailto:eroseau@alzaeducation.org" className="text-primary hover:underline">
                        info@alzaeducation.org
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">General inquiries & student applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <InstagramIcon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">Instagram</h4>
                      <a href="https://www.instagram.com/alzaeducation?igsh=MWNkdWpqYjZycjlhNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        @alzaeducation
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="mb-2 font-bold">{t('area_work')}</h4>
                      <p className="text-muted-foreground">
                        Cartagena, Colombia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle><b>{t('send_message')}</b></CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-between">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">{t('full-name')} *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t('email-address')} *</Label>
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
                        <Label htmlFor="phone">{t('phone-number')}</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">{t('subject')} *</Label>
                        <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{t('subject_option1')}</SelectItem>
                            <SelectItem value="scholarship">{t('subject_option2')}</SelectItem>
                            <SelectItem value="volunteer">{t('subject_option3')}</SelectItem>
                            <SelectItem value="partnership">{t('subject_option4')}</SelectItem>
                            <SelectItem value="donation">{t('subject_option5')}</SelectItem>
                            <SelectItem value="other">{t('subject_option6')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">{t('message')} *</Label>
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
                      {t('send-message')}
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
            {t('alza_full_presentation')}
          </p>        
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('faq')}
              </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">{t('faq_question1')}</h4>
                <p className="text-muted-foreground">
                  {t('faq_answer1')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">{t('faq_question2')}</h4>
                <p className="text-muted-foreground">
                  {t('faq_answer2')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">{t('faq_question3')}</h4>
                <p className="text-muted-foreground">
                  {t('faq_answer3-1')}<br/> {t('faq_answer3-2')}
                  {t('faq_answer3-3')}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="mb-2">{t('faq_question4')}</h4>
                <p className="text-muted-foreground">
                  {t('faq_answer4')} {t('email_info')}.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
