
import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Background images for the hero section
const backgroundImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
];

const Hero = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Automatically cycle through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    const featuredSection = document.getElementById('featured-properties');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images with transition effect */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === activeImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <span className="inline-block animate-fade-in rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
            Fractional Real Estate Investment
          </span>
          <h1 className="mt-4 animate-fade-in animation-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
            Own Premium Properties with Minimal Investment
          </h1>
          <p className="mt-6 animate-fade-in animation-delay-200 max-w-xl text-lg text-white/80">
            Access high-yield real estate opportunities previously available only to wealthy investors. Start with as little as ₹10,000.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg" className="rounded-md bg-primary text-white hover:bg-primary/90">
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-md border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
              How It Works
            </Button>
          </div>
          
          {/* Property stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
            <div>
              <p className="text-3xl font-bold text-white">200+</p>
              <p className="text-sm text-white/70">Properties Listed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">15K+</p>
              <p className="text-sm text-white/70">Happy Investors</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">₹500Cr+</p>
              <p className="text-sm text-white/70">Property Value</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">12-18%</p>
              <p className="text-sm text-white/70">Annual Returns</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors"
            aria-label="Scroll to featured properties"
          >
            <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
