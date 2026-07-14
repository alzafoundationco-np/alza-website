import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Progress } from "../ui/progress";
import {
  Heart,
  ShoppingBag,
  Users,
  Building2,
  Mail,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useTranslation } from 'react-i18next';

interface GetInvolvedPageProps {
  onNavigate: (page: string) => void;
}

export function GetInvolvedPage({
  onNavigate,
}: GetInvolvedPageProps) {
  const { t } = useTranslation();

  const [partnershipForm, setPartnershipForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const donationTiers = [
    {
      name: t('donation_type_crowdfunding'),
      amount: t('donation_platform_zeffy'),
      preferred: true,
      benefits: [
        t('donation_zeffy_benefit1'),
        t('donation_zeffy_benefit2'),
        t('donation_zeffy_benefit3'),
        t('donation_zeffy_benefit4'),
      ],
    },
    {
      name: t('donation_type_transfer'),
      amount: t('donation_platform_zelle'),
      preferred: false,
      benefits: [
        t('donation_zelle_benefit1'),
        t('donation_zelle_benefit2'),
        t('donation_zelle_benefit3'),
        t('donation_zelle_benefit4'),
      ],
    },
  ];

  const fundraisingGoals = [
    {
      name: t('donation_campaign_title'),
      target: 28000,
      current: 15724.28,
      description:
        t('donation_campaign_text'),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  {t('nav_donate')}
              </h2>
          <p className="max-w-3xl mx-auto">
            {t('donation_presentation1')}
            <br/>{t('donation_presentation2')}
          </p>
        </div>
      </section>

 {/* Impact Statement */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('donation_impact_title')}
              </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-primary mb-2">{t('donation_impact1_title')}</h3>
                <p className="text-muted-foreground">{t('donation_impact1_text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-primary mb-2">{t('donation_impact2_title')}</h3>
                <p className="text-muted-foreground">{t('donation_impact2_text')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-primary mb-2">{t('donation_impact3_title')}</h3>
                <p className="text-muted-foreground">{t('donation_impact3_text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button size="lg" onClick={() => {window.open("https://www.zeffy.com/en-US/donation-form/alza-transform-lives-through-education-in-cartagena", "_blank")}} className="px-8 py-6 text-lg">
              {t('donate-now')}
            </Button>
            <p className="text-xs text-muted-foreground mt-6 max-w-md mx-auto">
              {t('donation_zeffy_note')}
            </p>
        </div>
      </section>
      
      {/* Donation Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Heart size={32} />
            </div>
            <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('donation-options')}
              </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('donation_options_text1')} <br/>{t('donation_options_text2')}
              <br/><b> {t('donation_options_text3')}</b> 
              <br/>{t('donation_options_text4')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {donationTiers.map((tier, index) => (
              <Card
                key={index}
                className={
                  index === 0 ? "border-primary border-2" : ""
                }
              >
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <p className="text-2xl">
                    {tier.amount}
                    {tier.preferred && <span className="text-green-600"> {t('donation_zeffy_preferred')}</span>}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground"
                      >
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={index === 0 ? "default" : "outline"}
                    onClick={() => {
                        if (index === 0) {
                          window.open("https://www.zeffy.com/en-US/donation-form/alza-transform-lives-through-education-in-cartagena", "_blank");
                        } else {
                          window.open("https://www.zelle.com/", "_blank");
                        }
                      }}
                      disabled={index === 2}
                  >
                    {index === 2 ? "Coming soon" : index === 1 ? "Send to alza.foundation.co@gmail.com" : "Select"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Button "Make a donation"*/}
          {/*<div className="text-center">
            <Button
              size="lg"
              onClick={() => onNavigate("donate")}
            >
              <DollarSign size={20} className="mr-2" />
              Make a One-Time Donation
            </Button>
          </div>*/}
        </div>
      </section>

      {/* Lawful statement */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-6x3 text-center mx-auto font-bold">
            {t('donation_law_statement')}
          </p> 
          <div className="py-5 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('transparency')} className="px-8 py-6 text-lg">
              {t('transparency-page')}
            </Button>
          </div>
        </div>
      </section>

      {/* Fundraising Progress */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('donation_campaign_section')}
              </h2>
          <div className="flex flex-col items-center gap-8">
            {fundraisingGoals.map((goal, index) => (
              <Card key={index} className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>{goal.name}</CardTitle>
                  <p className="text-muted-foreground">
                    {goal.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span>
                        ${goal.current.toLocaleString()} {t('donation_status_raised')}
                      </span>
                      <span className="text-muted-foreground">
                        ${goal.target.toLocaleString()} {t('donation_goal')}
                      </span>
                    </div>
                    <Progress
                      value={(goal.current / goal.target) * 100}
                    />
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => window.open("https://www.zeffy.com/en-US/donation-form/alza-transform-lives-through-education-in-cartagena", "_blank")}
                  >
                    {t('donation_campaign_contribution')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Other Ways to Give */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  {t('donation_other')}
              </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4" size={32} />
                <h3 className="mb-3">{t('donation_wire')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('donation_wire_text')}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('contact')}
                >
                  {t('donation_wire_info')}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4" size={32} />
                <h3 className="mb-3">{t('donation_check')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('donation_check_text')}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('contact')}
                >
                  {t('donation_text_contact')}
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}