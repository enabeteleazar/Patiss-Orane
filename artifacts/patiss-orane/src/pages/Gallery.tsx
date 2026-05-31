import { motion } from "framer-motion";

const images = [
  "/images/gallery-1.png",
  "/images/entremets.png",
  "/images/gallery-2.png",
  "/images/hero.png",
  "/images/tartes.png",
  "/images/gallery-3.png",
  "/images/gateaux.png",
  "/images/gallery-4.png",
  "/images/patisseries.png",
];

export default function Gallery() {
  return (
    <div className="pb-24">
      <div className="bg-card py-16 md:py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Galerie
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Une sélection de nos plus belles réalisations, où la gourmandise rencontre l'élégance.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-xl bg-muted">
                <img 
                  src={src} 
                  alt={`Création pâtissière ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}