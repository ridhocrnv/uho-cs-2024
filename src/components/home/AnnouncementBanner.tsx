
import { Link } from "react-router-dom";
import { Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Announcement = {
  id: string;
  title: string;
  content: string;
  date: string;
  isImportant?: boolean;
};

// For demonstration, using static announcements
// In a real app, this would come from an API
const sampleAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Registration for Fall Semester",
    content: "Registration for the fall semester is now open. Please complete your registration by August 15th.",
    date: "2025-07-20",
    isImportant: true,
  },
  {
    id: "2",
    title: "Department Meeting",
    content: "There will be a department meeting on June 5th at 2:00 PM in Room 302.",
    date: "2025-05-28",
  },
  {
    id: "3",
    title: "New Library Resources",
    content: "The university library has added new resources for computer science students.",
    date: "2025-05-15",
  }
];

const AnnouncementBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [announcements] = useState<Announcement[]>(sampleAnnouncements);
  
  useEffect(() => {
    if (announcements.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [announcements]);
  
  if (announcements.length === 0) return null;
  
  const announcement = announcements[currentIndex];
  
  return (
    <div className="bg-primary/10 py-3 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex-shrink-0">
            <Megaphone className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-grow overflow-hidden">
            <div className="animate-fade-in">
              <p className="font-medium truncate">
                {announcement.isImportant && (
                  <span className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded mr-2">
                    Important
                  </span>
                )}
                {announcement.title}
              </p>
              <p className="text-sm text-muted-foreground truncate">{announcement.content}</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button variant="link" size="sm" asChild>
              <Link to="/announcements" className="flex items-center">
                View All <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
        
        {announcements.length > 1 && (
          <div className="flex justify-center gap-1 mt-2">
            {announcements.map((_, i) => (
              <button 
                key={i}
                className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-primary/30'}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to announcement ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
