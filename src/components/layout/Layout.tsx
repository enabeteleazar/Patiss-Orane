import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}