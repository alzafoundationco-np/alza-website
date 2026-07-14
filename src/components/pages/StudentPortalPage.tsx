import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { GraduationCap, Languages, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { useTranslation } from 'react-i18next';

export function StudentPortalPage() {
  const { t } = useTranslation();

  const eligibilityChecklist = [
    t('students_eligibility1'),
    t('students_eligibility2'),
    t('students_eligibility3'),
    t('students_eligibility4'),
  ];

  const applicationSteps = [
    { step: 1, title: t('application_step1'), description: t('application_step1_text') },
    { step: 2, title: t('application_step2'), description: t('application_step2_text') },
    { step: 3, title: t('application_step3'), description: t('application_step3_text') },
    { step: 4, title: t('application_step4'), description: t('application_step4_text') },
    { step: 5, title: t('application_step5'), description: t('application_step5_text') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
            <GraduationCap size={32} />
          </div>
          <h2 className="mb-6 text-center font-bold text-2xl">
                  {t('student-portal')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('student_portal_intro')}
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <GraduationCap className="mx-auto text-primary mb-3" size={32} />
                <h3 className="mb-2">{t('university-scholarship')}</h3>
                <p className="text-sm text-muted-foreground">{t('application_university_date')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Languages className="mx-auto text-primary mb-3" size={32} />
                <h3 className="mb-2">{t('language-program_SECTION')}</h3>
                <p className="text-sm text-muted-foreground">{t('Application_time')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="mx-auto text-primary mb-3" size={32} />
                <h3 className="mb-2">{t('application-deadline')}</h3>
                <p className="text-sm text-muted-foreground">{t('calendar')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
    {/* Latest Updates Section 
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4"><b>Latest Updates</b></h1>
          <p>
            <span className="font-semibold">University Scholarship:</span> Application will open on <span className="font-semibold text-primary">MARCH 1, 2026 until MAY 15, 2026</span> for June/July University Semester.
          </p>
          <p>
            <span className="font-semibold">Language Scholarship:</span> Application is <span className="font-semibold text-primary">CURRENTLY OPEN UNTIL JANUARY 19</span>.
          </p>
        </div>
      </section>*/}
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">{t('overview_section')}</TabsTrigger>
              <TabsTrigger value="requirements">{t('requirements_section')}</TabsTrigger>
              <TabsTrigger value="apply">{t('nav_apply-now')}</TabsTrigger>
            </TabsList>
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle><b>{t('scholarship-programs')}</b></CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="text-primary" size={24} />
                        <h3>{t('university-scholarship')}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {t('scholarship_university_detail1')}:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{t('scholarship_university_detail2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{t('scholarship_university_detail3')}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Languages className="text-primary" size={24} />
                        <h3>{t('program_language_scholarship_section')}</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {t('scholarship_language_detail1')}:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{t('scholarship_language_detail2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">{t('scholarship_language_detail3')}</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle><b>{t('program_application_title')}</b></CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {applicationSteps.map((item) => (
                        <div key={item.step} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('eligibility-requirements')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {eligibilityChecklist.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t('required-documents')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2">{t('academic-records')}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t('academic-records_detail')}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">{t('recommendation-contact')}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t('recommendation-contact_detail')}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">{t('personal-statement')}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t('personal-statement_detail')}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">{t('financial-information')}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t('financial-information_detail')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="mb-2">{t('important-notes')}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• {t('important-notes_detail1')}</li>
                          <li>• {t('important-notes_detail2')}</li>
                          <li>• {t('important-notes_detail3')}</li>
                          <li>• {t('important-notes_detail4')}</li>
                          <li>• {t('important-note_detail5')}</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Application Form Tab */}
            <TabsContent value="apply">
              <Card>
                <CardHeader>
                  <CardTitle>{t('footer_apply')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <GraduationCap className="mx-auto text-primary mb-6" size={64} />
                  <h3 className="mb-4">{t('program_cta_student_call')}</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {t('student_portal_cta')}
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfupb8QnTZcTeTb_LLphBzCJtcVwl6erIYVbTW70G25qfDw5w/viewform?usp=header', '_blank')}
                  >
                    {t('open-application-form')}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-6">
                    {t('form_new_tab')}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">{t('need-help')}</h2>
          <p className="text-muted-foreground mb-6">
            {t('help_detail')}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => window.location.href = "mailto:info@alzaeducation.org"}
            >
              {t('email_title')}: info@alzaeducation.org
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}