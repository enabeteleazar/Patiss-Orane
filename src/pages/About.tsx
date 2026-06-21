import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/about-portrait.png" 
              alt="Orane dans son atelier" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 lg:pl-10"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">L'Histoire d'Orane</h1>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Orane est pâtissière depuis plus de 15 ans. Formée dans les meilleures maisons de Paris, 
              elle a décidé de mettre son savoir-faire au service de votre bonheur.
            </p>
            <p>
              Sa passion pour la pâtisserie est née dès son plus jeune âge, guidée par les odeurs de 
              caramel et de vanille qui s'échappaient de la cuisine familiale. Aujourd'hui, cette passion 
              se traduit par une exigence sans faille et une créativité renouvelée à chaque saison.
            </p>
            <p>
              L'excellence est au cœur de chaque réalisation. Chaque création est réalisée avec des 
              ingrédients locaux et de saison. Du beurre AOP aux fruits frais sélectionnés avec soin, 
              jusqu'aux chocolats grands crus, rien n'est laissé au hasard pour vous offrir une 
              expérience gustative inoubliable.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-2 gap-6 pt-10 border-t border-border">
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">Ingrédients Nobles</h3>
              <p className="text-sm text-muted-foreground">Sélection rigoureuse de produits locaux et de saison.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">Sur-Mesure</h3>
              <p className="text-sm text-muted-foreground">Des créations uniques qui vous ressemblent.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">Fait Main</h3>
              <p className="text-sm text-muted-foreground">Un travail artisanal, de la pâte jusqu'au décor.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">Passion</h3>
              <p className="text-sm text-muted-foreground">L'amour du goût transmis dans chaque bouchée.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}