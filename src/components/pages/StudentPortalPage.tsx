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

export function StudentPortalPage() {
  const [applicationData, setApplicationData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    neighborhood: '',
    // Academic Info
    currentSchool: '',
    grade: '',
    gpa: '',
    // Program Selection
    programType: '',
    preferredLanguage: '',
    // Essay
    essay: '',
    // Financial Info
    householdIncome: '',
    dependents: '',
    // Documents
    transcript: null as File | null,
    idDocument: null as File | null,
    recommendation: null as File | null,
    // Agreement
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationData.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    toast.success('Application submitted successfully! We will review your application and contact you within 2 weeks.');
  };

  const eligibilityChecklist = [
    'Middle School/High school student or recent graduate from Cartagena',
    'Demonstrated financial need',
    'Strong academic record and leadership potential',
    'Commitment to community service',
  ];

  const applicationSteps = [
    { step: 1, title: 'Review Requirements', description: 'Check eligibility criteria and gather documents' },
    { step: 2, title: 'Complete Application', description: 'Fill out all sections of the application form' },
    { step: 3, title: 'Submit Documents', description: 'Upload transcripts and required documents' },
    { step: 4, title: 'Essay Submission', description: 'Write and submit your personal statement' },
    { step: 5, title: 'Review & Submit', description: 'Review your application and submit' },
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
                  Student Portal
              </h2>
          <p className="max-w-3xl mx-auto">
            Start your journey to educational excellence. Apply for our scholarship programs and take the first step toward your future.
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
                <h3 className="mb-2">University Scholarship</h3>
                <p className="text-sm text-muted-foreground">Application open from March 1, 2026 to May 15, 2026</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Languages className="mx-auto text-primary mb-3" size={32} />
                <h3 className="mb-2">Language Program</h3>
                <p className="text-sm text-muted-foreground">Applications open all year-round</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="mx-auto text-primary mb-3" size={32} />
                <h3 className="mb-2">Application Deadline</h3>
                <p className="text-sm text-muted-foreground">Download the calendar</p>
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
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="apply">Apply Now</TabsTrigger>
            </TabsList>
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle><b>Scholarship Programs</b></CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="text-primary" size={24} />
                        <h3>University Scholarship</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Comprehensive support for university education including:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">Full tuition coverage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">Academic mentorship</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Languages className="text-primary" size={24} />
                        <h3>Foreign Language Scholarship</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Language training to enhance your career opportunities:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">Partnership with certified language schools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-1 flex-shrink-0" size={16} />
                          <span className="text-muted-foreground">Classes fees covered</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle><b>Application Process</b></CardTitle>
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
                    <CardTitle>Eligibility Requirements</CardTitle>
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
                    <CardTitle>Required Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2">Academic Records</h4>
                        <p className="text-sm text-muted-foreground">
                          Official middle school / high school transcript or university records (if applicable)
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">Recommendation Contact</h4>
                        <p className="text-sm text-muted-foreground">
                          Letter/Message from a teacher, counselor, or community leader in contact with ALZA Foundation
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">Personal Statement</h4>
                        <p className="text-sm text-muted-foreground">
                          Essay about your goals and why you're applying (100 words for Language Scholarship // 250-500 words for University Scholarship)
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2">Financial Information</h4>
                        <p className="text-sm text-muted-foreground">
                          Household occupational and income information
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
                        <h4 className="mb-2">Important Notes</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• All documents must be in Spanish or English (official translations accepted)</li>
                          <li>• Applications are reviewed on a rolling basis</li>
                          <li>• Selected candidates will be contacted for an interview within 2 weeks</li>
                          <li>• Final decisions are made by our scholarship committee</li>
                          <li>• Incomplete applications will not be reviewed</li>
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
                  <CardTitle>Apply for Scholarship</CardTitle>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <GraduationCap className="mx-auto text-primary mb-6" size={64} />
                  <h3 className="mb-4">Ready to Apply?</h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Click the button below to access our scholarship application form. Please have all required documents ready before you begin.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfupb8QnTZcTeTb_LLphBzCJtcVwl6erIYVbTW70G25qfDw5w/viewform?usp=header', '_blank')}
                  >
                    Open Application Form
                  </Button>
                  <p className="text-sm text-muted-foreground mt-6">
                    The form will open in a new tab
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
          <h2 className="mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Our operations team is here to assist you with the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline"
              onClick={() => window.location.href = "mailto:alza.foundation.co@gmail.com"}
            >
              Email: alza.foundation.co@gmail.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}