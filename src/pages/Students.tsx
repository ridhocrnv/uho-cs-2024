
import PageLayout from "@/components/layout/PageLayout";
import StudentList from "@/components/students/StudentList";

const Students = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Mahasiswa Ilmu Komputer 2024</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temui Mahasiswa Ilmu Komputer Angkatan 2024 Universitas Halu Oleo
Angkatan kami terdiri dari mahasiswa-mahasiswi yang beragam, dengan berbagai bakat dan latar belakang yang berbeda. Kami dipersatukan oleh semangat untuk belajar dan berinovasi dalam dunia komputer, serta tekad untuk mencapai keberhasilan bersama di bidang ini.
          </p>
        </div>
        
        <StudentList />
      </div>
    </PageLayout>
  );
};

export default Students;
