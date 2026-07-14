import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { useTranslation } from 'react-i18next';

export function LegalPage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
            {t('legal-information')}
          </h2>
          <p className="max-w-3xl mx-auto">
            {t('legal_invitation_to_read')}
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
                {t('terms-of-use')}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <p>
                  <strong>{t('effective-date')}</strong> {t('may')} 18, 2026
                </p>

                <p>
                   {t('tou_intro')} 
                </p>
                
                <div>
                  <h3 className="font-bold text-foreground mb-2">{t('tou1')}</h3>
                  <p>
                    {t('tou1-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">{t('tou2')}</h3>
                  <p>
                    {t('tou2-1')}
                  </p>
                  <p>
                    <strong>{t('limited-license')}:</strong> {t('tou2-2')}
                  </p>
                  <p>
                    <strong>{t('restrictions')}:</strong> {t('tou2-3')}.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">{t('tou3')}</h3>
                  <p>
                    {t('tou3-1')}
                  </p>
                  <p>
                    <strong>{t('data-processing')}:</strong> {t('tou3-2')}.
                  </p>
                  <p>
                    <strong>{t('security')}:</strong> {t('tou3-3')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">{t('tou4')}</h3>
                  <p>
                    <strong>{t('accuracy')}:</strong> {t('tou4-1')}
                  </p>
                  <p>
                    <strong>{t('no-guarantee-of-selection')}:</strong> {t('tou4-2')}
                  </p>
                  <p>
                    <strong>{t('volunteer-agreements')}:</strong> {t('tou4-3')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">5. {t('donations')} (Zeffy & Zelle)</h3>
                  <p>
                    {t('tou5')}
                  </p>
                  <p>
                    <strong>{t('donation_platform_zeffy')}:</strong> {t('tou5-1')}
                  </p>
                  <p>
                    <strong>{t('donation_platform_zelle')}:</strong> {t('tou5-2')}
                  </p>
                  <p>
                    <strong>{t('refund-policy')}:</strong> {t('tou5-3')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">6. {t('tou6')}</h3>
                  <p>
                    {t('tou6-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">7. {t('tou7')}</h3>
                  <p>
                    {t('tou7-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">8. {t('tou8')}</h3>
                  <p>
                    {t('tou8-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">9. {t('tou9')}</h3>
                  <p>
                    {t('tou9-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">10. {t('tou10')}</h3>
                  <p>
                    {t('tou10-1')}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Privacy Policy */}
            <AccordionItem value="privacy" className="border rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold hover:no-underline">
                {t('privacy')}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-4">
                <p>
                  <strong>{t('effective-date')}:</strong> {t('may')} 18, 2026
                </p>

                <p>
                  {t('at')} <strong>{t('alza_full_name')}</strong> {t('privacy_policy_intro')}
                </p>

                <div>
                  <h3 className="font-bold text-foreground mb-2">1. {t('privacy1')}</h3>
                  <p className="mb-2">
                    {t('privacy1-1')}
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- {t('privacy1-2')}.</li>
                    <li>- {t('privacy1-3')}.</li>
                    <li>- {t('privacy1-4')}.</li>
                    <li>- {t('privacy1-5')}.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">2. {t('privacy2')}</h3>
                  <p className="mb-2">
                    {t('privacy2-1')}:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- {t('privacy2-2')}.</li>
                    <li>- {t('privacy2-3')}.</li>
                    <li>- {t('privacy2-4')}.</li>
                    <li>- {t('privacy2-5')}.</li>
                    <li>- {t('privacy2-6')}.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">3. {t('privacy3')}</h3>
                  <p>
                    <strong>{t('privacy3-1')}</strong> {t('privacy3-2')}:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- <strong>{t('operational-suite')}:</strong> {t('privacy3-3')}.</li>
                    <li>- <strong>{t('cloud-database')}:</strong> {t('privacy3-4')}.</li>
                    <li>- <strong>{t('hosting')}:</strong> {t('privacy3-5')}.</li>
                    <li>- <strong>{t('donation-processing')}:</strong> {t('privacy3-6')}. </li>
                  </ul>
                  <p>
                    {t('privacy3-7')} {t('alza_full_name')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">4. {t('data-security')}</h3>
                  <p>
                    {t('privacy4')}.
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- <strong>{t('google-workspace-security')}:</strong> {t('privacy4-1')}.</li>
                    <li>- <strong>{t('supabase-security')}:</strong> {t('privacy4-2')}.</li>
                    <li>- <strong>{t('access-control')}:</strong> {t('privacy4-3')}.</li>
                  </ul>
                  <p>
                    {t('privacy4-4')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">5. {t('privacy5')}</h3>
                  <p>
                    {t('privacy5-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">6. {t('privacy6')}</h3>
                  <p>
                    {t('privacy6-1')}:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>- {t('privacy6-2')}.</li>
                    <li>- {t('privacy6-3')}.</li>
                    <li>- {t('privacy6-4')}.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">7. {t('privacy7')}</h3>
                  <p>
                    {t('privacy7-1')}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">8. {t('footer_contact')}</h3>
                  <p>
                    {t('privacy8')}:
                  </p>
                  <p>
                    <strong>{t('alza_full_name')}</strong>
                  </p>
                  <p>
                    {t('email_title')}: info@alzaeducation.org
                  </p>
                  <p>
                    {t('address')}: 9300 Harris Glen Dr, Charlotte, NC 20910
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
