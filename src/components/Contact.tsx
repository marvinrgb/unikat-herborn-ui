import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Clock, Phone, Mail, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

interface ContactProps {
  isBookingOpen: boolean;
  onBookingToggle: () => void;
}

export default function Contact({ isBookingOpen, onBookingToggle }: ContactProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedGuests, setSelectedGuests] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', 
    '21:00', '21:30', '22:00', '22:30', '23:00'
  ];

  const guestOptions = ['2', '3', '4', '5', '6', '7', '8+'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the booking logic
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      guests: selectedGuests
    });
    alert('Reservierung gesendet! Wir melden uns bald bei dir.');
  };

  return (
    <section id="kontakt" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading text-primary mb-6">
            KONTAKT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bereit für einen unvergesslichen Abend? Reserviere deinen Tisch oder kontaktiere uns für weitere Informationen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading text-foreground mb-6">
                TISCHRESERVIERUNG
              </h3>
              
              {/* Conversational Booking Interface */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Ich möchte einen Tisch für{' '}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="inline-flex items-center gap-2 text-primary underline hover:text-secondary transition-colors">
                        {selectedGuests || '[Anzahl]'}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-0">
                      <Select onValueChange={setSelectedGuests}>
                        <SelectTrigger className="border-0">
                          <SelectValue placeholder="Personen" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestOptions.map(option => (
                            <SelectItem key={option} value={option}>
                              {option} {option === '8+' ? 'Personen' : 'Personen'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </PopoverContent>
                  </Popover>
                  {' '}Personen am{' '}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="inline-flex items-center gap-2 text-primary underline hover:text-secondary transition-colors">
                        <CalendarIcon size={16} />
                        {selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: de }) : '[Datum]'}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 1} // Disable past dates and Mondays
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {' '}um{' '}
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="inline-flex items-center gap-2 text-primary underline hover:text-secondary transition-colors">
                        {selectedTime || '[Uhrzeit]'}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-0">
                      <Select onValueChange={setSelectedTime}>
                        <SelectTrigger className="border-0">
                          <SelectValue placeholder="Zeit" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(time => (
                            <SelectItem key={time} value={time}>
                              {time} Uhr
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </PopoverContent>
                  </Popover>
                  {' '}reservieren.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">
                        E-Mail *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Besondere Wünsche
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Allergien, besondere Anlässe, Fragen..."
                      className="bg-background border-border min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-secondary transition-all duration-200"
                    disabled={!selectedDate || !selectedTime || !selectedGuests || !formData.name || !formData.email}
                  >
                    RESERVIERUNG SENDEN
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading text-foreground mb-6">
                FINDEST DU UNS
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-foreground font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      Hauptstraße 42<br />
                      35745 Herborn<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-foreground font-medium">Öffnungszeiten</p>
                    <p className="text-muted-foreground">
                      Dienstag - Sonntag: 18:00 - 02:00<br />
                      Montag: Geschlossen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-foreground font-medium">Telefon</p>
                    <p className="text-muted-foreground">+49 2772 123456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-foreground font-medium">E-Mail</p>
                    <p className="text-muted-foreground">hallo@unikat-herborn.de</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <p className="text-muted-foreground font-heading">
                [GOOGLE MAPS INTEGRATION]
              </p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-heading text-foreground mb-4">
                FOLGE UNS
              </h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}