
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Angkatan Kami</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Program Studi Ilmu Komputer Angkatan 2024 Universitas Halu Oleo terdiri dari mahasiswa-mahasiswi yang penuh semangat dan berkomitmen untuk menguasai ilmu dan teknologi komputer. Kami adalah kelompok yang beragam, berasal dari berbagai latar belakang, namun dipersatukan oleh rasa ingin tahu, semangat belajar, dan tekad untuk berinovasi di dunia digital.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Website ini menjadi pusat digital kami — tempat untuk mempererat tali silaturahmi, berbagi informasi penting, serta mendokumentasikan perjalanan kami selama menempuh pendidikan di bangku kuliah. Dibangun oleh mahasiswa, untuk mahasiswa, situs ini menjadi simbol pertumbuhan kami secara akademis maupun pribadi.
            </p>  
            <div className="flex flex-wrap gap-4">
              <Button className="bg-uho hover:bg-uho-light">Our Mission</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="CS UHO students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-accent p-4 rounded-lg shadow-lg">
              <p className="text-white font-bold text-xl">Class of 2024</p>
              <p className="text-white text-sm">Building the future together</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
