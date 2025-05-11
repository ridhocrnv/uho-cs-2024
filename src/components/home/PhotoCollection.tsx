
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    alt: "Students collaborating on a project",
    caption: "Team collaboration session"
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    alt: "Computer science equipment",
    caption: "Our lab equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    alt: "Programming session",
    caption: "Coding workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    alt: "Student working on laptop",
    caption: "Project development"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    alt: "Code on screen",
    caption: "Learning programming fundamentals"
  }
];

const PhotoCollection = () => {
  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-10">Our Photo Collection</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Memories from our journey through the Computer Science program at Halu Oleo University.
        </p>
        
        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden card-hover">
                      <div className="overflow-hidden">
                        <AspectRatio ratio={4/3}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PhotoCollection;
