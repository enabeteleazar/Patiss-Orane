import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Magnificent pastry visual" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-background mb-6 leading-tight shadow-sm">
              L'art de la pâtisserie artisanale, sublimé pour vos moments d'exception
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-10 font-light">
              Créations sur-mesure pour mariages, anniversaires et événements d'entreprise
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/patisseries">
                <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                  Découvrir nos créations
                </Button>
              </Link>
              <Link href="/commandes">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-background/10 text-background border-background hover:bg-background hover:text-foreground">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Notre Savoir-Faire</h2>
            <p className="text-muted-foreground text-lg">Chaque création est réalisée avec des ingrédients locaux et de saison, alliant esthétisme et gourmandise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Entremets", image: "/images/entremets.png", desc: "Des textures délicates et des saveurs équilibrées pour clore votre repas avec élégance." },
              { title: "Gâteaux de Prestige", image: "/images/gateaux.png", desc: "Des pièces montées spectaculaires qui marqueront les esprits lors de vos célébrations." },
              { title: "Tartes & Pâtisseries", image: "/images/tartes.png", desc: "Les grands classiques revisités avec une touche contemporaine et raffinée." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg aspect-square mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/patisseries">
              <Button variant="link" className="text-primary text-lg font-serif group">
                Voir toutes les pâtisseries 
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-16">Mots Doux</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Orane a réalisé notre gâteau de mariage. Tous nos invités ont été émerveillés.", author: "Marie & Thomas L.", event: "Mariage juin 2024" },
              { quote: "Les macarons commandés pour notre séminaire d'entreprise étaient absolument délicieux.", author: "Sophie D.", event: "Directrice RH" },
              { quote: "Pour l'anniversaire de ma fille, Orane a créé un gâteau qui l'a fait pleurer de joie.", author: "Isabelle R.", event: "Maman comblée" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-xl shadow-sm relative"
              >
                <div className="text-primary text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                <p className="text-lg italic text-foreground mb-6 relative z-10 pt-4">{t.quote}</p>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}