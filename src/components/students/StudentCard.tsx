
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface StudentData {
  id: string;
  name: string;
  nim: string;
  imageUrl: string;
  email: string;
  phone: string;
  address: string;
  class: string;
}

interface StudentCardProps {
  student: StudentData;
}

const StudentCard = ({ student }: StudentCardProps) => {
  return (
    <Card className="card-hover overflow-hidden">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={student.imageUrl || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"}
          alt={student.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg">{student.name}</h3>
        <p className="text-muted-foreground text-sm">NIM: {student.nim}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Mail size={16} className="text-muted-foreground" />
          <span>{student.email}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Phone size={16} className="text-muted-foreground" />
          <span>{student.phone}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <MapPin size={16} className="text-muted-foreground" />
          <span>{student.address}</span>
        </div>
        
        <div className="pt-2">
          <Button variant="outline" className="w-full" size="sm">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
