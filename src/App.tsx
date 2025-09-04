import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Contact from './components/Contact';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleBookingClick = () => {
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsBookingOpen(true);
  };

  const handleBookingToggle = () => {
    setIsBookingOpen(!isBookingOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation onBookingClick={handleBookingClick} />
      
      {/* Hero Section */}
      <Hero onBookingClick={handleBookingClick} />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Menu Section */}
      <Menu />
      
      {/* Contact Section */}
      <Contact isBookingOpen={isBookingOpen} onBookingToggle={handleBookingToggle} />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading text-2xl text-primary mb-4 tracking-wider">
                UNIKAT
              </h3>
              <p className="text-muted-foreground">
                Dein besonderer Treffpunkt in Herborn. Wo moderne Kultur auf traditionelle Gastfreundschaft trifft.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-foreground mb-4">
                SCHNELLE LINKS
              </h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('vibe')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Vibe
                </button>
                <button 
                  onClick={() => document.getElementById('karte')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Karte
                </button>
                <button 
                  onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-foreground mb-4">
                KONTAKT
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Hauptstraße 42, 35745 Herborn</p>
                <p>+49 2772 123456</p>
                <p>hallo@unikat-herborn.de</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Unikat Herborn. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}