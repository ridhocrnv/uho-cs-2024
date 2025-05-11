
import { CalendarDays, Users, BookOpen, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Student Directory",
      description: "Complete database of all Computer Science students from the 2024 batch with contact information."
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-accent" />,
      title: "Course Schedule",
      description: "Up-to-date class schedules, assignment deadlines, and important academic dates."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-accent" />,
      title: "Academic Resources",
      description: "Access to study materials, lecture notes, and other educational resources."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-accent" />,
      title: "Announcements",
      description: "Stay informed with the latest news, events, and important announcements."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-accent">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
