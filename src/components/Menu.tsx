import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
}

const menuData = {
  biere: [
    {
      name: "Herborner Helles",
      description: "Unser hauseigenes helles Lagerbier, gebraut mit regionalen Zutaten",
      price: "4,50€",
      image: "https://images.unsplash.com/photo-1720513840843-fd295b4acc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjBwb3VyJTIwZm9hbXxlbnwxfHx8fDE3NTY3NTMwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Craft IPA Selection",
      description: "Wechselnde Auswahl von lokalen und internationalen IPAs",
      price: "5,80€"
    },
    {
      name: "Weissbier Naturtrüb",
      description: "Klassisches bayerisches Weissbier vom Fass",
      price: "4,20€"
    }
  ],
  cocktails: [
    {
      name: "Unikat Old Fashioned",
      description: "Bourbon Whiskey, Ahornsirup, Angostura Bitters, Orangenzeste",
      price: "12,00€",
      image: "https://images.unsplash.com/photo-1695927521601-3d09a9604116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza2V5JTIwZ2xhc3MlMjBhbWJlciUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1Njc1MzAxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      name: "Herborn Mule",
      description: "Vodka, Ingwerlimonade, Limette, Minze",
      price: "9,50€"
    },
    {
      name: "Smoky Negroni",
      description: "Gin, Campari, süßer Wermut, geräucherte Garnish",
      price: "11,00€"
    }
  ],
  snacks: [
    {
      name: "Cheese & Charcuterie Board",
      description: "Auswahl regionaler Käse und Aufschnitt mit hausgemachtem Brot",
      price: "16,00€",
      image: "https://images.unsplash.com/photo-1659968495051-28b6354e67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBzbmFja3MlMjBhcHBldGl6ZXJzfGVufDF8fHx8MTc1NjY0NDY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Truffle Fries",
      description: "Handgeschnittene Pommes mit Trüffelöl und Parmesan",
      price: "8,50€"
    },
    {
      name: "Pulled Pork Sliders",
      description: "3 Mini-Burger mit hausgemachtem Pulled Pork und Coleslaw",
      price: "12,00€"
    }
  ]
};

const categories = [
  { id: 'biere', name: 'BIERE', items: menuData.biere },
  { id: 'cocktails', name: 'SIGNATURE DRINKS', items: menuData.cocktails },
  { id: 'snacks', name: 'SNACKS', items: menuData.snacks }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('cocktails');
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  const featuredDrink = menuData.cocktails.find(item => item.featured);

  return (
    <section id="karte" className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading text-primary mb-6">
            KARTE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecke unsere sorgfältig kuratierte Auswahl an Getränken und Snacks. 
            Jedes Element wurde mit Leidenschaft für Qualität und Geschmack ausgewählt.
          </p>
        </div>

        {/* Featured Drink */}
        {featuredDrink && (
          <div className="mb-16 bg-background rounded-lg overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80">
                <ImageWithFallback
                  src={featuredDrink.image!}
                  alt={featuredDrink.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="text-primary font-heading text-sm tracking-wide mb-2">
                  DRINK DES MONATS
                </div>
                <h3 className="text-3xl font-heading text-foreground mb-4">
                  {featuredDrink.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredDrink.description}
                </p>
                <div className="text-2xl font-heading text-primary">
                  {featuredDrink.price}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-heading tracking-wide transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {categories
              .find(cat => cat.id === activeCategory)
              ?.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-border hover:border-primary/30"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-heading text-foreground text-lg">
                      {item.name}
                    </h4>
                    <span className="text-primary font-heading">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Image Display */}
          <div className="hidden md:flex items-center justify-center">
            {hoveredItem?.image ? (
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={hoveredItem.image}
                  alt={hoveredItem.name}
                  className="w-full h-full object-cover transition-transform duration-300 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h5 className="font-heading text-xl mb-2">
                    {hoveredItem.name}
                  </h5>
                  <p className="text-sm text-white/80">
                    {hoveredItem.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground font-heading">
                  Hover über ein Item für Details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}