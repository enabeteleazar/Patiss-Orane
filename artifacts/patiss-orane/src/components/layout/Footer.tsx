import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Patiss'Orane</h3>
            <p className="text-background/80 mb-6">
              L'art de la pâtisserie artisanale, sublimé pour vos moments d'exception.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>Lyon (69)</li>
              <li>contact@patissorane.fr</li>
              <li>06 12 34 56 78</li>
              <li>Sur rendez-vous uniquement</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-primary-foreground">Navigation</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/patisseries" className="hover:text-primary transition-colors">Nos Pâtisseries</Link>
              </li>
              <li>
                <Link href="/commandes" className="hover:text-primary transition-colors">Prestations & Commandes</Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-primary transition-colors">Galerie</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">Nous Contacter</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          © {new Date().getFullYear()} Patiss'Orane. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}