
import PageLayout from "@/components/layout/PageLayout";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

// Sample announcement data for demonstration
const announcements = [
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
  },
  {
    id: "4",
    title: "Upcoming Career Fair",
    content: "A career fair featuring top tech companies will be held at the University Center on May 25th.",
    date: "2025-05-10",
    isImportant: true,
  },
  {
    id: "5",
    title: "Research Presentation",
    content: "Dr. Wayan Suparta will be presenting his latest research on artificial intelligence on May 8th.",
    date: "2025-05-01",
  }
];

const Announcements = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Announcements</h1>
          <p className="text-muted-foreground">
            Latest announcements and updates from our department
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-lg">Recent Announcements</h2>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {announcements.map((announcement) => {
                  const date = new Date(announcement.date);
                  return (
                    <TableRow key={announcement.id}>
                      <TableCell className="font-medium">
                        {format(date, "MMM d, yyyy")}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {announcement.isImportant && (
                            <Badge variant="destructive" className="mr-2">Important</Badge>
                          )}
                          {announcement.title}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <p className="text-muted-foreground">{announcement.content}</p>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Announcements;
