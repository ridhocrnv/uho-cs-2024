
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ScheduleTable, { CourseSchedule } from "@/components/schedule/ScheduleTable";
import ScheduleFilter from "@/components/schedule/ScheduleFilter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  const [selectedSemester, setSelectedSemester] = useState("1");
  
  // Sample schedules data - in a real app, this would come from an API
  const semester1Schedules: CourseSchedule[] = [
    {
      id: "1",
      day: "Monday",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Calculus I",
      lecturer: ["Dr. Ahmad"],
      room: "Room 101"
    },
    {
      id: "2",
      day: "Monday",
      startTime: "10:00",
      endTime: "11:40",
      courseName: "Introduction to Programming",
      lecturer: ["Prof. Budi"],
      room: "Lab CS-1"
    },
    {
      id: "3",
      day: "Tuesday",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Basic Electronics",
      lecturer: ["Dr. Cantika"],
      room: "Room 203"
    },
    {
      id: "4",
      day: "Wednesday",
      startTime: "13:00",
      endTime: "14:40",
      courseName: "English for Academic Purposes",
      lecturer: ["Mrs. Diana"],
      room: "Room 105"
    },
    {
      id: "5",
      day: "Thursday",
      startTime: "10:00",
      endTime: "11:40",
      courseName: "Introduction to Computer Science",
      lecturer: ["Prof. Eko"],
      room: "Auditorium"
    },
    {
      id: "6",
      day: "Friday",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Discrete Mathematics",
      lecturer: ["Dr. Fathia"],
      room: "Room 202"
    }
  ];
  
  const semester2Schedules: CourseSchedule[] = [
    {
      id: "7",
      day: "Senin",
      startTime: "08:00",
      endTime: "10:00",
      courseName: "Struktur Data",
      lecturer: ["Dr. Andi Tenriawaru, S.Si., M.Si"],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "8",
      day: "Senin",
      startTime: "13:15",
      endTime: "14:15",
      courseName: "Praktikum Kimia",
      lecturer: ["Asisten Dosen"],
      room: "Lab Terpadu"
    },
    {
      id: "9",
      day: "Senin",
      startTime: "15:30",
      endTime: "16:40",
      courseName: "Kewarganegaraan",
      lecturer: ["Rahman, S. Pd., M. Hum., & Muh. Idrus, M.Pd"],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "10",
      day: "Selasa",
      startTime: "07:30",
      endTime: "09:30",
      courseName: "Logika Matematika",
      lecturer: ["Gusti Arviana Rahman, S.Si, M,Si, & Dr. Andi Tenriawaru, S.Si., M.Si"],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "11",
      day: "Selasa",
      startTime: "10.00",
      endTime: "12.30",
      courseName: "Statistika",
      lecturer: ["Ferdinand Murni Hamundu ST, MSc., Ph.D. & Gusti Arviana Rahman, S.Si, M,Si"],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "12",
      day: "Rabu",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Kewirausahaan",
      lecturer: ["Drs. Laode Saidi, M.Kom."],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "13",
      day: "Rabu",
      startTime: "10:00",
      endTime: "12:30",
      courseName: "Kalkulus II",
      lecturer: ["Drs. Laode Saidi, M.Kom. & Drs. Herdi Budiman, M.Si."],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "14",
      day: "Kamis",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Kimia Dasar",
      lecturer: ["La Ode Kadidae, S.Si., M.Si., Ph.D. & Dr. Nohong, M.Si."],
      room: "F1.1.03 - FMIPA Gedung B Lt.1"
    },
    {
      id: "15",
      day: "Kamis",
      startTime: "13:00",
      endTime: "15:30",
      courseName: "Biologi Dasar",
      lecturer: ["Asisten Dosen"],
      room: "FMIPA Gedung A Lt.3"
    }
  ];
  
  const getAllSchedules = () => {
    switch (selectedSemester) {
      case "1":
        return semester1Schedules;
      case "2":
        return semester2Schedules;
      default:
        return [];
    }
  };
  
  const handleFilterChange = (semester: string) => {
    setSelectedSemester(semester);
  };

  return (
    <PageLayout>
      <div className="page-container">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Jadwal Kuliah</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jadwal mata kuliah saat ini untuk Ilmu Komputer angkatan 2024. Anda dapat memfilter berdasarkan semester untuk melihat jadwal tertentu.
          </p>
        </div>
        
        <Tabs defaultValue="weekly">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="weekly">Weekly View</TabsTrigger>
              <TabsTrigger value="calendar" disabled>Calendar View</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="weekly" className="space-y-6">
            <ScheduleFilter onFilterChange={handleFilterChange} />
            <ScheduleTable schedules={getAllSchedules()} />
            
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Terakhir Update: 11 Mei, 2025</p>
              <p>Catatan: Jadwal dapat berubah sewaktu-waktu. Silakan periksa secara berkala untuk pembaruan.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar">
            <div className="text-center py-10">
              <p>Fitur tampilan kalender akan segera tersedia!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Schedule;
