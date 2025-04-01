
import { Building2, Percent, TrendingUp, Users } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Curated Properties",
      description: "We thoroughly evaluate every property listing to ensure quality investment opportunities with strong potential returns.",
    },
    {
      icon: <Percent className="h-6 w-6 text-primary" />,
      title: "Higher Returns",
      description: "Our properties deliver 12-18% annual returns on average, significantly outperforming traditional investment options.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Growth Potential",
      description: "Benefit from property value appreciation while earning regular rental income from your investment.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Community Ownership",
      description: "Join thousands of like-minded investors in our community and co-own premium properties across the country.",
    },
  ];

  const stats = [
    { value: "₹500 Cr+", label: "Assets Under Management" },
    { value: "18%", label: "Average Annual Return" },
    { value: "15,000+", label: "Active Investors" },
    { value: "98%", label: "Client Satisfaction Rate" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in animation-delay-100">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Revolutionizing Real Estate Investment for Everyone
            </h2>
            <p className="mt-4 text-gray-600">
              We're making real estate investment accessible, transparent, and profitable for everyday investors. Our platform breaks down the barriers to property ownership, allowing anyone to build a diversified real estate portfolio with minimal capital.
            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in animation-delay-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                alt="Modern building investment opportunity"
                className="w-full h-auto"
              />
              
              {/* Overlay information */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-semibold">Premium Office Space</h4>
                    <p className="text-white/80 text-sm">Mumbai, Maharashtra</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">16.5%</p>
                    <p className="text-white/80 text-sm">Annual Yield</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-float">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    alt="Investor avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Rahul M.</p>
                  <p className="text-xs text-gray-500">"I've earned 17% returns on my property investments in just 12 months!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
