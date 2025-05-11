
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
      lecturer: "Dr. Ahmad",
      room: "Room 101"
    },
    {
      id: "2",
      day: "Monday",
      startTime: "10:00",
      endTime: "11:40",
      courseName: "Introduction to Programming",
      lecturer: "Prof. Budi",
      room: "Lab CS-1"
    },
    {
      id: "3",
      day: "Tuesday",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Basic Electronics",
      lecturer: "Dr. Cantika",
      room: "Room 203"
    },
    {
      id: "4",
      day: "Wednesday",
      startTime: "13:00",
      endTime: "14:40",
      courseName: "English for Academic Purposes",
      lecturer: "Mrs. Diana",
      room: "Room 105"
    },
    {
      id: "5",
      day: "Thursday",
      startTime: "10:00",
      endTime: "11:40",
      courseName: "Introduction to Computer Science",
      lecturer: "Prof. Eko",
      room: "Auditorium"
    },
    {
      id: "6",
      day: "Friday",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Discrete Mathematics",
      lecturer: "Dr. Fathia",
      room: "Room 202"
    }
  ];
  
  const semester2Schedules: CourseSchedule[] = [
    {
      id: "7",
      day: "Monday",
      startTime: "08:00",
      endTime: "09:40",
      courseName: "Data Structures",
      lecturer: "Dr. Gina",
      room: "Lab CS-2"
    },
    {
      id: "8",
      day: "Tuesday",
      startTime: "13:00",
      endTime: "14:40",
      courseName: "Linear Algebra",
      lecturer: "Prof. Hadi",
      room: "Room 201"
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
          <h1 className="text-3xl font-bold mb-4">Course Schedule</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Current course schedule for Computer Science Batch 2024. 
            You can filter by semester to see specific schedules.
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
              <p>Last updated: May 1, 2024</p>
              <p>Note: Schedule is subject to change. Please check regularly for updates.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar">
            <div className="text-center py-10">
              <p>Calendar view coming soon!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Schedule;
