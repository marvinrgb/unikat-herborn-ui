import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onBookingClick: () => void;
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="font-heading text-2xl font-bold text-primary tracking-wider">
            UNIKAT
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('vibe')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-heading tracking-wide"
            >
              VIBE
            </button>
            <button
              onClick={() => scrollToSection('karte')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-heading tracking-wide"
            >
              KARTE
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-foreground hover:text-primary transition-colors duration-200 font-heading tracking-wide"
            >
              KONTAKT
            </button>
            <Button
              onClick={onBookingClick}
              className="bg-primary text-primary-foreground hover:bg-secondary transition-all duration-200 animate-glow"
            >
              TISCH SICHERN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection('vibe')}
              className="text-2xl text-foreground hover:text-primary transition-colors font-heading tracking-wide"
            >
              VIBE
            </button>
            <button
              onClick={() => scrollToSection('karte')}
              className="text-2xl text-foreground hover:text-primary transition-colors font-heading tracking-wide"
            >
              KARTE
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-2xl text-foreground hover:text-primary transition-colors font-heading tracking-wide"
            >
              KONTAKT
            </button>
            <Button
              onClick={() => {
                onBookingClick();
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary text-primary-foreground hover:bg-secondary transition-all duration-200 text-lg px-8 py-3"
            >
              TISCH SICHERN
            </Button>
          </div>
        </div>
      )}
    </>
  );
}