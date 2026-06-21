import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Entremets",
    description: "Des jeux de textures et des associations de saveurs audacieuses pour des moments de dégustation intenses.",
    image: "/images/entremets.png",
    items: ["Framboise & Litchi", "Chocolat Caramel Fleur de Sel", "Vanille Bourbon & Fruits Exotiques"]
  },
  {
    title: "Gâteaux de Célébration",
    description: "Des créations sur-mesure et spectaculaires pour vos mariages et grands événements.",
    image: "/images/gateaux.png",
    items: ["Gâteau de Mariage à Étages", "Number Cake Personnalisé", "Drip Cake Élégant"]
  },
  {
    title: "Tartes",
    description: "Le croustillant de la pâte sablée associé à la générosité des fruits de saison ou de la gourmandise.",
    image: "/images/tartes.png",
    items: ["Tarte Citron Meringuée", "Tarte aux Fruits Rouges", "Tarte Chocolat Pralinée"]
  },
  {
    title: "Pâtisseries Individuelles",
    description: "Des mignardises raffinées pour accompagner vos cafés ou vos séminaires.",
    image: "/images/patisseries.png",
    items: ["Macarons Assortis", "Éclairs Maison", "Choux à la Crème"]
  }
];

export default function Pastries() {
  return (
    <div className="pb-24">
      <div className="bg-card py-16 md:py-24 mb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Nos Créations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Découvrez notre collection de pâtisseries artisanales, pensées pour ravir les yeux et les papilles.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="flex-1 w-full">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{cat.title}</h2>
                <p className="text-lg text-muted-foreground mb-8">{cat.description}</p>
                <ul className="space-y-4 mb-8">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/commandes">
                  <Button className="text-md px-6">Commander</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}