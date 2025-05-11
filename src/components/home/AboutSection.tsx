
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Batch</h2>
            <p className="text-lg text-muted-foreground mb-4">
              The Computer Science Study Program Batch 2024 at Halu Oleo University consists of passionate students dedicated to mastering the art and science of computing. Our diverse group brings together talents from various backgrounds, united by our curiosity and drive to innovate in the digital world.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              This website serves as our digital hub - a place to strengthen our community, share important information, and document our journey through university life. It's built by students, for students, as we grow together academically and personally.
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
