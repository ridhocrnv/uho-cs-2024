
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface CourseSchedule {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  courseName: string;
  lecturer: string;
  room: string;
}

interface ScheduleTableProps {
  schedules: CourseSchedule[];
}

const ScheduleTable = ({ schedules }: ScheduleTableProps) => {
  // Group schedules by day
  const schedulesByDay: Record<string, CourseSchedule[]> = {};
  
  schedules.forEach(schedule => {
    if (!schedulesByDay[schedule.day]) {
      schedulesByDay[schedule.day] = [];
    }
    schedulesByDay[schedule.day].push(schedule);
  });
  
  // Order of days
  const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Sort days
  const sortedDays = Object.keys(schedulesByDay).sort(
    (a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b)
  );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Day</TableHead>
            <TableHead className="w-[150px]">Time</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Lecturer</TableHead>
            <TableHead>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedDays.map(day => (
            schedulesByDay[day].map((schedule, index) => (
              <TableRow key={schedule.id}>
                {index === 0 ? (
                  <TableCell 
                    rowSpan={schedulesByDay[day].length}
                    className="font-medium bg-muted/50"
                  >
                    {day}
                  </TableCell>
                ) : null}
                <TableCell className="font-medium">
                  {schedule.startTime} - {schedule.endTime}
                </TableCell>
                <TableCell>{schedule.courseName}</TableCell>
                <TableCell>{schedule.lecturer}</TableCell>
                <TableCell>{schedule.room}</TableCell>
              </TableRow>
            ))
          ))}
          
          {schedules.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                No schedule available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ScheduleTable;
