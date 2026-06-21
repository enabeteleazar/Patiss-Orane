import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Mariage",
    price: "À partir de 8€ / part",
    features: [
      "Création sur-mesure",
      "Dégustation offerte (pour 2 personnes)",
      "Livraison et installation incluses",
      "Échange avec le chef pour le design"
    ],
    highlight: true
  },
  {
    title: "Anniversaire",
    price: "À partir de 5€ / part",
    features: [
      "Personnalisation complète",
      "Choix des parfums de saison",
      "Décors en pâte à sucre ou chocolat",
      "Retrait en atelier"
    ],
    highlight: false
  },
  {
    title: "Événement d'Entreprise",
    price: "Devis sur mesure",
    features: [
      "Minimum 50 personnes",
      "Mignardises et pièces cocktail",
      "Logotypage possible",
      "Livraison sur le lieu de l'événement"
    ],
    highlight: false
  },
  {
    title: "Baptême & Communion",
    price: "À partir de 4€ / part",
    features: [
      "Décorations thématiques douces",
      "Options de parfums variés",
      "Pièce montée ou assortiments",
      "Retrait ou livraison"
    ],
    highlight: false
  }
];

export default function Orders() {
  return (
    <div className="pb-24">
      <div className="bg-card py-16 md:py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Prestations & Commandes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Pour que votre événement soit inoubliable, nous concevons des pâtisseries d'exception adaptées à vos envies.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col h-full border ${pkg.highlight ? 'bg-primary border-primary text-primary-foreground shadow-lg scale-105 z-10 relative' : 'bg-background border-border'}`}
            >
              <h3 className={`text-2xl font-serif font-bold mb-2 ${pkg.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                {pkg.title}
              </h3>
              <p className={`text-lg font-medium mb-6 pb-6 border-b ${pkg.highlight ? 'border-primary-foreground/20 text-primary-foreground/90' : 'border-border text-primary'}`}>
                {pkg.price}
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-primary-foreground' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${pkg.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/contact?type=${encodeURIComponent(pkg.title)}`}>
                <Button 
                  className="w-full" 
                  variant={pkg.highlight ? "secondary" : "default"}
                >
                  Demander un devis
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-foreground">Comment Commander ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chaque commande est unique. Contactez-nous idéalement 3 à 4 semaines à l'avance pour les gâteaux de célébration, 
            et plusieurs mois à l'avance pour les mariages.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-8 text-lg">Nous Contacter</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}