import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onBookingClick: () => void;
}

export default function Hero({ onBookingClick }: HeroProps) {
  const scrollToNext = () => {
    const element = document.getElementById('vibe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1681912406153-3c182eb94426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBiYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY3NTMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dunkles, stimmungsvolles Interieur der Unikat Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4 tracking-wider">
            UNIKAT
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-heading tracking-wide">
            HERBORN
          </p>
        </div>
        
        <h2 className="text-2xl md:text-4xl text-foreground mb-12 font-heading tracking-wide">
          DEIN ABEND. DEIN TREFFPUNKT.
        </h2>

        <Button
          onClick={onBookingClick}
          className="bg-primary text-primary-foreground hover:bg-secondary transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg animate-glow"
        >
          TISCH SICHERN
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="text-primary hover:text-secondary transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}