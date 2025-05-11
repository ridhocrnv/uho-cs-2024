
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-uho to-uho-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ilmu Komputer
            <span className="block text-accent mt-2">Angkatan 2024</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-uho-text-light mb-8">
            Fakultas Matematika dan Ilmu Pengetahuan Alam<br />
            Universitas Halu Oleo
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/students">
                Meet Our Students
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white/10">
              <Link to="/schedule">
                View Schedule
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
