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

interface GetInvolvedPageProps {
  onNavigate: (page: string) => void;
}

export function GetInvolvedPage({
  onNavigate,
}: GetInvolvedPageProps) {
  const [partnershipForm, setPartnershipForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const donationTiers = [
    {
      name: "Crowdfunding",
      amount: "Zeffy",
      preferred: true,
      benefits: [
        "No transaction fees",
        "One-time/Recurring payment",
        "Credit/Debit card",
        "Tax receipt",
      ],
    },
    {
      name: "Direct Transfer",
      amount: "Zelle",
      preferred: false,
      benefits: [
        "No transaction fees",
        "One-time/Recurring payment",
        "Instant transfer",
        "Tax receipt",
      ],
    },
    {
      name: "Online Payment",
      amount: "Stripe",
      preferred: false,
      benefits: [
        "Transaction Fees",
        "One-time/Recurring payment",
        "Credit/Debit card",
        "Tax receipt",
      ],
    },
  ];

  const fundraisingGoals = [
    {
      name: "First Year Fundraising Campaign",
      target: 28000,
      current: 7812.30,
      description:
        "Support 10 students with full university scholarship and foreign language courses in 2026.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-center font-bold text-2xl">
                  Donate
              </h2>
          <p className="max-w-3xl mx-auto">
            Your support helps high-potential students in Colombia access language learning and higher education.
            <br/>ALZA Foundation is a U.S.-registered 501(c)(3) nonprofit; donations are tax-deductible.
          </p>
        </div>
      </section>

 {/* Impact Statement */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Impact of your donation
              </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-primary mb-2">$50</h3>
                <p className="text-muted-foreground">Covers costs of one exam</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-primary mb-2">$350</h3>
                <p className="text-muted-foreground">Covers language course tuition for one level</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-primary mb-2">$4,000</h3>
                <p className="text-muted-foreground">Funds a full-year university scholarship</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button size="lg" onClick={() => {window.open("https://www.zeffy.com/en-US/donation-form/alza-transform-lives-through-education-in-cartagena", "_blank")}} className="px-8 py-6 text-lg">
              Donate Now
            </Button>
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
                  Donation Options
              </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your financial support directly impacts students' lives. <br/>Choose a giving method that works for you.
              <br/><b> All transactions are secure.</b> 
              <br/>ALZA Foundation is a U.S.-registered 501(c)(3) nonprofit, and your donation is tax-deductible. Please make sure to include your email address in the payment note to receive a tax receipt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                    {tier.preferred && <span className="text-green-600"> - Preferred</span>}
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
            Please find all the information on how we manage our received donations.
          </p> 
          <div className="py-5 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('transparency')} className="px-8 py-6 text-lg">
              Transparency Page
            </Button>
          </div>
        </div>
      </section>

      {/* Fundraising Progress */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-bold text-2xl">
                  Current Fundraising Campaigns
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
                        ${goal.current.toLocaleString()} raised
                      </span>
                      <span className="text-muted-foreground">
                        ${goal.target.toLocaleString()} goal
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
                    Contribute to This Campaign
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
                  Other Ways to Give
              </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4" size={32} />
                <h3 className="mb-3">Wire Transfer</h3>
                <p className="text-muted-foreground mb-4">
                  For large donations, wire transfers may be more convenient. Contact us for bank details.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('contact')}
                >
                  Contact us to get the Bank information
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <CheckCircle className="text-primary mb-4" size={32} />
                <h3 className="mb-3">Check or Money Order</h3>
                <p className="text-muted-foreground mb-4">
                  Mail checks payable to "ALZA Foundation" to our Charlotte, NC office address.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => onNavigate('contact')}
                >
                  Contact us to get the address
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}