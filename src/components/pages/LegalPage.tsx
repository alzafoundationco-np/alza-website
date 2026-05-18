import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function LegalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
            Legal Information
          </h2>
          <p className="max-w-3xl mx-auto">
            Please review our Terms of Use and Privacy Policy to understand how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Terms of Use */}
            <AccordionItem value="terms" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                Terms of Use
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <p>
                  <strong>Effective Date</strong> May 18, 2026
                </p>

                <p>
                   Welcome to the ALZA Foundation, Inc. website (the "Site"). The Site is owned and operated by ALZA Foundation, Inc. ("we," "us," or "our"), a nonprofit organization registered in the State of North Carolina. By accessing or using our Site, you agree to be bound by these Terms of Use. 
                </p>
                
                <div>
                  <h3 className="font-bold text-foreground mb-2">1. Purpose of the Site</h3>
                  <p>
                    The ALZA Foundation, Inc. provides educational resources, scholarship information, and program updates. The content on this Site—including program descriptions, impact stories, and transparency reports—is provided for informational and educational purposes only. It does not constitute professional, legal, or financial advice.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">2. Intellectual Property</h3>
                  <p>
                    All content on this Site, including but not limited to text, graphics, logos, and the unique design elements of our interface, is the exclusive property of the ALZA Foundation, Inc..
                  </p>
                  <p>
                    <strong>Limited License:</strong> You are granted a limited, non-exclusive license to access and use the materials for personal, non-commercial educational purposes.
                  </p>
                  <p>
                    <strong>Restrictions:</strong> You may not copy, redistribute, or use our branding for commercial gain without prior written authorization from the Foundation.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">3. Data Collection and Third-Party Services</h3>
                  <p>
                    We collect information that you voluntarily provide to us through our contact forms, program applications, and volunteer sign-ups.
                  </p>
                  <p>
                    <strong>Data Processing:</strong> We use third-party service providers to securely store and process your data. This currently includes Google LLC (Google Sheets) and/or Supabase, Inc.
                  </p>
                  <p>
                    <strong>Security:</strong> By using the Site, you acknowledge that your information may be transferred to and maintained on computers located outside of your state or country, where privacy laws may differ. We strive to use commercially acceptable means to protect your personal information through these providers.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">4. Program Applications & Volunteer Inquiries</h3>
                  <p>
                    <strong>Accuracy:</strong> You agree to provide truthful, accurate, and complete information in all forms submitted on the Site.
                  </p>
                  <p>
                    <strong>No Guarantee of Selection:</strong> Submission of an application for a scholarship or program does not guarantee acceptance, funding, or an award. All selections are made at the sole discretion of the ALZA Foundation, Inc.
                  </p>
                  <p>
                    <strong>Volunteer Agreements:</strong> Participation as a volunteer is subject to a separate Liability Waiver and Release which must be signed prior to beginning any service.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">5. Donations (Zeffy & Zelle)</h3>
                  <p>
                    We accept donations to support our mission through the following methods:
                  </p>
                  <p>
                    <strong>Zeffy:</strong> Donations made via Zeffy are processed securely by Zeffy and its payment partners. We do not store your credit card information.
                  </p>
                  <p>
                    <strong>Zelle:</strong> For donations sent via Zelle, donors are responsible for ensuring the accuracy of our recipient information (alza.foundation.co@gmail.com). Direct transfers via Zelle are generally instantaneous and cannot be reversed by the Foundation once initiated.
                  </p>
                  <p>
                    <strong>Refund Policy:</strong> All donations are final and non-refundable. If you believe a technical error occurred during a Zeffy transaction, please contact us within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">6. Transparency & Third-Party Links</h3>
                  <p>
                    We value transparency and provide data regarding our impact and financials. While we strive for accuracy, this data is provided "as-is." Our Site may contain links to external websites (such as social media or educational tools). We are not responsible for the content, security, or privacy practices of these third-party sites.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">7. Limitation of Liability</h3>
                  <p>
                    To the fullest extent permitted by law, the ALZA Foundation, Inc., its directors, and officers shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the Site or any errors in the content provided.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">8. Governing Law</h3>
                  <p>
                    These Terms of Use are governed by and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law principles.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">9. Changes to These Terms</h3>
                  <p>
                    We reserve the right to update these Terms at any time. We will notify you of any changes by posting the new Terms of Use on this page and updating the "Effective Date" at the top.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">10. Contact Information</h3>
                  <p>
                    If you have any questions or concerns regarding these Terms, please contact us at info@alzaeducation.org
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Privacy Policy */}
            <AccordionItem value="privacy" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                Privacy Policy
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <p>
                  <strong>Effective Date:</strong> May 18, 2026
                </p>

                <p>
                  At <strong>ALZA Foundation, Inc.</strong> ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and secure your data when you visit https://www.alzaeducation.org/ (the "Site").
                </p>

                <div>
                  <h3 className="font-bold text-foreground mb-2">1. Information We Collect</h3>
                  <p className="mb-2">
                    We collect information that you voluntarily provide to us when you express interest in our programs, apply for scholarships, or sign up to volunteer. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- Identity Data: Name, date of birth, and gender.</li>
                    <li>- Contact Data: Email address, phone number, and mailing address.</li>
                    <li>- Educational Data: School name, grade level, transcripts, or academic interests.</li>
                    <li>- Volunteer Data: Availability, skills, and background information.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">2. How We Use Your Information</h3>
                  <p className="mb-2">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- Process program and scholarship applications.</li>
                    <li>- Communicate with you regarding Foundation updates and opportunities.</li>
                    <li>- Coordinate volunteer activities.</li>
                    <li>- Improve our Site and educational offerings.</li>
                    <li>- Comply with legal obligations and transparency reporting for 501(c)(3) organizations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">3. Data Storage and Third-Party Processors</h3>
                  <p>
                    <strong>We do not sell your personal information.</strong> To provide our services, we utilize professional third-party infrastructure to store and process your data securely:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- <strong>Operational Suite:</strong> We utilize Google Workspace (including Google Drive, Forms, and Sheets) for administrative document storage, internal data organization, and initial information collection.</li>
                    <li>- <strong>Cloud Database:</strong> We utilize Supabase, Inc. for our primary cloud database management, ensuring secure and scalable access to student and program records.</li>
                    <li>- <strong>Hosting:</strong> Our Site is hosted via Netlify, which may collect basic technical logs (such as IP addresses) for security and site performance monitoring.</li>
                    <li>- <strong>Donation Processing:</strong> Zeffy and Zelle. When you donate via Zeffy, they collect payment data; when you donate via Zelle, we receive only the information provided by the banking institution (usually name and memo). </li>
                  </ul>
                  <p>
                    All third-party providers are selected based on their ability to provide industry-standard security and are restricted from using your data for any purpose other than providing services to the ALZA Foundation, Inc.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">4. Data Security</h3>
                  <p>
                    We implement commercially reasonable technical and organizational security measures to protect your data against unauthorized access, alteration, or disclosure.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- <strong>Google Workspace Security:</strong> Our administrative data, forms, and documents are managed through Google Workspace for Nonprofits. This provides enterprise-level security, including encrypted data at rest and in transit, and is governed by Google’s data protection agreements designed for professional organizations.</li>
                    <li>- <strong>Supabase Security:</strong> For our cloud database, we utilize Supabase with Row Level Security (RLS) and encrypted storage. This ensures that sensitive student and program information is strictly isolated and accessible only to authorized Foundation personnel.</li>
                    <li>- <strong>Access Control:</strong> Access to your personal data is restricted to ALZA Foundation staff and authorized volunteers who require the information to perform their specific duties.</li>
                  </ul>
                  <p>
                    While we strive to use industry-standard protections, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">5. Children's Privacy</h3>
                  <p>
                    Our Site is intended for students and educators. If we collect personal information from individuals under the age of 13, we strive to comply with the Children’s Online Privacy Protection Act (COPPA). We encourage parents and guardians to supervise their children's online activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">6. Your Rights</h3>
                  <p>
                    Depending on your location, you may have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- Request access to the personal data we hold about you.</li>
                    <li>- Request that we correct or delete your personal information.</li>
                    <li>- Withdraw consent for email communications at any time by clicking "Unsubscribe" or contacting us directly.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">7. Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date" at the top.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">8. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy or how your data is handled via Google Sheets or Supabase, please contact us at:
                  </p>
                  <p>
                    <strong>ALZA Foundation, Inc.</strong>
                  </p>
                  <p>
                    Email: info@alzaeducation.org
                  </p>
                  <p>
                    Address: 9300 Harris Glen Dr, Charlotte, NC 20910
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
