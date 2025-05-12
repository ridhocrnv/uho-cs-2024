
import { useState } from "react";
import StudentCard, { StudentData } from "./StudentCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample student data 
const sampleStudents: StudentData[] = [
  {
    id: "049",
    name: "Ridho Ahmad Irawan",
    nim: "F1G124049",
    imageUrl: "public/img049.webp",
    email: "ridhoahmadirawan281@gmail.com",
    phone: "+62 813-3872-8015",
    address: "Kendari",
    class: "A"
  },
  {
    id: "2",
    name: "Dewi Anggraini",
    nim: "F1A124002",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    email: "dewi.anggraini@student.uho.ac.id",
    phone: "+62 813-4567-8901",
    address: "Kendari",
    class: "A"
  },
  {
    id: "3",
    name: "Budi Santoso",
    nim: "F1A124003",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    email: "budi.santoso@student.uho.ac.id",
    phone: "+62 814-5678-9012",
    address: "Kendari",
    class: "A"
  },
  {
    id: "4",
    name: "Siti Rahayu",
    nim: "F1A124004",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    email: "siti.rahayu@student.uho.ac.id",
    phone: "+62 815-6789-0123",
    address: "Kendari",
    class: "A"
  },
  {
    id: "5",
    name: "Dimas Putra",
    nim: "F1A124005",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    email: "dimas.putra@student.uho.ac.id",
    phone: "+62 816-7890-1234",
    address: "Kendari",
    class: "A"
  },
  {
    id: "6",
    name: "Putri Wulandari",
    nim: "F1A124006",
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    email: "putri.wulandari@student.uho.ac.id",
    phone: "+62 817-8901-2345",
    address: "Kendari",
    class: "A"
  },
  {
    id: "7",
    name: "Agus Hidayat",
    nim: "F1A124007",
    imageUrl: "",
    email: "agus.hidayat@student.uho.ac.id",
    phone: "+62 818-9012-3456",
    address: "Kendari",
    class: "A"
  },
  {
    id: "8",
    name: "Maya Indah",
    nim: "F1A124008",
    imageUrl: "",
    email: "maya.indah@student.uho.ac.id",
    phone: "+62 819-0123-4567",
    address: "Kendari",
    class: "A"
  },
  {
    id: "9",
    name: "Agus Hidayat",
    nim: "F1A124007",
    imageUrl: "",
    email: "agus.hidayat@student.uho.ac.id",
    phone: "+62 818-9012-3456",
    address: "Kendari",
    class: "A"
  },
  {
    id: "10",
    name: "Maya Indah",
    nim: "F1A124008",
    imageUrl: "",
    email: "maya.indah@student.uho.ac.id",
    phone: "+62 819-0123-4567",
    address: "Kendari",
    class: "A"
  }
];

const StudentList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = sampleStudents.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.nim.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="text"
          placeholder="Cari berdasarkan nama atau NIM..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredStudents.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      
      {filteredStudents.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No students found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default StudentList;
