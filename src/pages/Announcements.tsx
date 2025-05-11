
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
import { id } from "date-fns/locale";

// Sample announcement data for demonstration
const announcements = [
  {
    id: "1",
    title: "Pendaftaran untuk Semester Gugur",
    content: "Pendaftaran untuk semester gugur kini telah dibuka. Harap lengkapi pendaftaran Anda sebelum tanggal 15 Agustus.",
    date: "2025-07-20",
    isImportant: true,
  },
  {
    id: "2",
    title: "Rapat Program Studi",
    content: "Akan diadakan rapat departemen pada tanggal 5 Juni pukul 14:00 di Ruang Program Studi Ilmu Komputer.",
    date: "2025-05-28",
    isImportant: false,
  },
  {
    id: "3",
    title: "Sumber Daya Perpustakaan Baru",
    content: "Perpustakaan universitas telah menambahkan sumber daya baru untuk mahasiswa Ilmu Komputer. Jangan lewatkan kesempatan untuk memanfaatkan koleksi terbaru yang dapat mendukung proses belajar Anda.",
    date: "2025-05-15",
  },
  {
    id: "4",
    title: "Job Fair",
    content: "Pameran karir yang menampilkan perusahaan-perusahaan teknologi terkemuka akan diadakan di Sport Center Universitas Halu Oleo pada tanggal 25 Mei. Jangan lewatkan kesempatan untuk bertemu dengan perusahaan-perusahaan top dan mengeksplorasi peluang karir!",
    date: "2025-05-10",
    isImportant: true,
  },
  {
    id: "5",
    title: "Presentasi Riset",
    content: "Dr. Wayan Suparta akan mempresentasikan riset terbarunya tentang kecerdasan buatan pada tanggal 8 Mei. Jangan lewatkan kesempatan untuk mendapatkan wawasan baru dari penelitian terkini di bidang ini.",
    date: "2025-05-01",
  }
];

const Announcements = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Pengumuman</h1>
          <p className="text-muted-foreground">
            Pembaruan dan pengumuman terkini dari program studi kami. Dapatkan informasi penting mengenai kegiatan, acara, dan perubahan terbaru.
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-lg">Pengumuman Terbaru</h2>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Tanggal</TableHead>
                  <TableHead>Judul</TableHead>
                  <TableHead className="hidden md:table-cell">Detail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {announcements.map((announcement) => {
                  const date = new Date(announcement.date);
                  return (
                    <TableRow key={announcement.id}>
                      <TableCell className="font-medium">
                        {format(date, "d MMMM yyyy", { locale: id})}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {announcement.isImportant && (
                            <Badge variant="destructive" className="mr-2">Penting</Badge>
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
