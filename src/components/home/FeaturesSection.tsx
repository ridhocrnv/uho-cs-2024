
import { CalendarDays, Users, BookOpen, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Direktori Mahasiswa",
      description: "Basis data lengkap seluruh mahasiswa Program Studi Ilmu Komputer Angkatan 2024, dilengkapi dengan informasi kontak."
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-accent" />,
      title: "Jadwal Kuliah",
      description: "Jadwal kuliah terkini, tenggat waktu tugas, dan tanggal-tanggal penting akademik."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-accent" />,
      title: "Sumber Daya Akademik",
      description: "Akses ke materi studi, catatan kuliah, dan sumber daya pendidikan lainnya."
    },
    {
      icon: <Megaphone className="h-10 w-10 text-accent" />,
      title: "Pengumuman",
      description: "Berita terbaru, acara, dan pengumuman penting."
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Apa yang Kami Tawarkan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-accent">
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
