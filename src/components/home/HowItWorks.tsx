
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Premium Properties",
      description: "Explore our curated selection of high-yield investment properties across various locations and property types.",
      icon: "/browse-properties.svg",
    },
    {
      id: 2,
      title: "Choose Your Investment Size",
      description: "Select the amount you wish to invest, starting from as low as ₹10,000. Each property has its own minimum investment amount.",
      icon: "/investment-size.svg",
    },
    {
      id: 3,
      title: "Complete Simple Verification",
      description: "A quick, secure KYC process to verify your identity and comply with regulatory requirements.",
      icon: "/verification.svg",
    },
    {
      id: 4,
      title: "Track Your Investment",
      description: "Monitor your property's performance and receive regular dividends directly in your bank account.",
      icon: "/track-investment.svg",
    },
  ];

  const benefits = [
    "Low Minimum Investment",
    "Regular Rental Income",
    "Professional Property Management",
    "Potential for Capital Appreciation",
    "Portfolio Diversification",
    "Hassle-free Ownership",
    "Easy Liquidation Options",
    "Complete Investment Transparency",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-gray-600">
            Investing in real estate has never been this simple. Our platform makes property investment accessible to everyone.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center animate-fade-in animation-delay-200"
            >
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-5">
                  <span className="text-xl font-bold">{step.id}</span>
                </div>
                {step.id < steps.length && (
                  <div className="absolute top-10 left-full w-full transform -translate-x-1/2 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 lg:p-12 animate-fade-in animation-delay-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Benefits of Fractional Property Ownership</h3>
              <p className="mt-4 text-gray-600">
                Join thousands of investors who are already enjoying the advantages of fractional real estate investment on our platform.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="ml-2 text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" className="rounded-md">
                  Start Investing Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Property investor checking their portfolio"
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Investment Success</p>
                      <p className="text-xs text-gray-500">15K+ satisfied investors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
