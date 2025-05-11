
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface ScheduleFilterProps {
  onFilterChange: (semester: string) => void;
}

const ScheduleFilter = ({ onFilterChange }: ScheduleFilterProps) => {
  const [semester, setSemester] = useState("1");
  
  const handleApplyFilters = () => {
    onFilterChange(semester);
  };
  
  return (
    <div className="bg-card p-4 rounded-lg shadow-sm mb-6 border">
      <h3 className="text-lg font-medium mb-4">Filter Jadwal</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="semester-select">Semester</Label>
          <Select 
            value={semester} 
            onValueChange={setSemester}
          >
            <SelectTrigger id="semester-select">
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Semester 1</SelectItem>
              <SelectItem value="2">Semester 2</SelectItem>
              <SelectItem value="3">Semester 3</SelectItem>
              <SelectItem value="4">Semester 4</SelectItem>
              <SelectItem value="5">Semester 5</SelectItem>
              <SelectItem value="6">Semester 6</SelectItem>
              <SelectItem value="7">Semester 7</SelectItem>
              <SelectItem value="8">Semester 8</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button onClick={handleApplyFilters}>Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFilter;
