import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1681912406153-3c182eb94426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBiYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY3NTMwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Interieur der Unikat Bar in Herborn - gemütliche Atmosphäre",
    size: "large"
  },
  {
    src: "https://images.unsplash.com/photo-1695927521601-3d09a9604116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza2V5JTIwZ2xhc3MlMjBhbWJlciUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1Njc1MzAxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Whiskey-Glas mit bernsteinfarbenem Licht in der Unikat Bar Herborn",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1720513840843-fd295b4acc35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdCUyMGJlZXIlMjBwb3VyJTIwZm9hbXxlbnwxfHx8fDE3NTY3NTMwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Frisch gezapftes Craft Beer mit Schaumkrone in der Unikat Bar",
    size: "medium"
  },
  {
    src: "https://images.unsplash.com/photo-1739156618936-98c98c480b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMHByZXBhcmF0aW9uJTIwYmFyfGVufDF8fHx8MTc1Njc1MzAxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Zubereitung eines Cocktails an der Theke der Unikat Bar Herborn",
    size: "small"
  },
  {
    src: "https://images.unsplash.com/photo-1659968495051-28b6354e67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBzbmFja3MlMjBhcHBldGl6ZXJzfGVufDF8fHx8MTc1NjY0NDY2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Leckere Bar-Snacks und Vorspeisen im Unikat Herborn",
    size: "small"
  }
];

export default function Gallery() {
  return (
    <section id="vibe" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading text-primary mb-6">
            VIBE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erlebe die Atmosphäre von Unikat Herborn. Ein Ort, wo sich Moderne und Tradition treffen, 
            wo jeder Abend zu einem besonderen Erlebnis wird.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                image.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2 h-96 md:h-[600px]' 
                  : image.size === 'medium'
                  ? 'h-64 md:h-80'
                  : 'h-48 md:h-60'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-sm font-heading tracking-wide uppercase">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-6">
            Bereit für deinen besonderen Abend?
          </p>
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-8 py-4">
            <p className="text-primary font-heading tracking-wide">
              ÖFFNUNGSZEITEN: Di-So 18:00-02:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}