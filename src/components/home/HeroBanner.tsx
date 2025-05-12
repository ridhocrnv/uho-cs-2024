import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Komponen teks muncul huruf demi huruf
const TypewriterText = ({
  text,
  delayOffset = 0,
  className = "",
}: {
  text: string;
  delayOffset?: number;
  className?: string;
}) => {
  const letters = text.split("");
  return (
    <div className={`flex gap-[1px] flex-wrap justify-center ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delayOffset + index * 0.05,
            duration: 0.3,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};


const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-uho to-uho-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Baris 1: Ilmu Komputer */}
          <TypewriterText
            text="Ilmu Komputer"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          />

          {/* Baris 2: Angkatan 2024 (accent) */}
          <TypewriterText
            text="Angkatan 2024"
            delayOffset={1.2}
            className="text-accent text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-uho-text-light mt-6 mb-8"
          >
            Fakultas Matematika dan Ilmu Pengetahuan Alam<br />
            Universitas Halu Oleo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/students">Meet Our Students</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white/10"
            >
              <Link to="/schedule">View Schedule</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
