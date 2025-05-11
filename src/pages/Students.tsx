
import PageLayout from "@/components/layout/PageLayout";
import StudentList from "@/components/students/StudentList";

const Students = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Computer Science Students</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the Computer Science batch 2024 students of Halu Oleo University. 
            Our diverse group of students brings together various talents and backgrounds.
          </p>
        </div>
        
        <StudentList />
      </div>
    </PageLayout>
  );
};

export default Students;
