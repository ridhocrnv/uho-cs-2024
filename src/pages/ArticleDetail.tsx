
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Sample article data for demonstration
const articles = [
  {
    id: "1",
    title: "Pengenalan Machine Learning dengan Python",
    excerpt: "Learn the fundamentals of machine learning using Python and popular libraries like scikit-learn.",
    content: `
      <p>Machine Learning (pembelajaran mesin) adalah bidang dari kecerdasan buatan (AI) yang berfokus pada pengembangan sistem yang dapat belajar dari data. Python telah menjadi bahasa utama dalam bidang ini karena kesederhanaannya dan ekosistem pustaka (library) yang sangat luas.</p>
      <br />
      <h2>Libraries Machine Learning Populer di Python</h2>
      <br />
      <ul>
        <li><strong>scikit-learn</strong>: Pustaka serbaguna yang menyediakan berbagai algoritma pembelajaran terawasi (supervised) dan tak terawasi (unsupervised).</li>
        <li><strong>TensorFlow</strong>: Platform sumber terbuka untuk machine learning yang dikembangkan oleh Google.</li>
        <li><strong>PyTorch</strong>: Pustaka machine learning yang dikembangkan oleh laboratorium riset AI milik Facebook.</li>
        <li><strong>Keras</strong>: API jaringan saraf tingkat tinggi yang berjalan di atas TensorFlow.</li>
      </ul>

      <br />
      
      <h2>Memulai Machine Learning</h2>

      <br />
      <p>Untuk memulai perjalanan Anda dalam machine learning dengan Python, sebaiknya Anda memiliki pemahaman yang baik tentang sintaks dasar Python dan struktur data. Mengenal pustaka seperti NumPy dan Pandas juga akan sangat membantu.</p>
      <br />
      <strong>
      <p>Contoh Sederhana Model Machine Learning Menggunakan scikit-learn</p>
      </strong>

      <pre><code>
      from sklearn.datasets import load_iris
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import RandomForestClassifier

      # Memuat dataset contoh
      iris = load_iris()
      X, y = iris.data, iris.target

      # Membagi data menjadi data latih dan data uji
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

      # Melatih model Random Forest Classifier
      clf = RandomForestClassifier(n_estimators=100)
      clf.fit(X_train, y_train)

      # Membuat prediksi
      y_pred = clf.predict(X_test)

      # Mengevaluasi model
      accuracy = (y_pred == y_test).sum() / len(y_test)
      print(f"Akurasi: {accuracy:.2f}")

      </code></pre>
      
      <p>Ini hanyalah contoh sederhana. Seiring dengan kemajuan pembelajaran Anda, Anda akan mempelajari model yang lebih kompleks, rekayasa fitur (feature engineering), penyetelan parameter (hyperparameter tuning), dan banyak lagi.</p>
    `,
    author: "Dr. Wayan Suparta",
    date: "10 Mei, 2025",
    readTime: "8 min read",
    category: "technical",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    title: "Pencapaian Program Studi Ilmu Komputer 2025",
    excerpt: "Ringkasan pencapaian dan tonggak keberhasilan yang telah diraih oleh program studi kami selama setahun terakhir.",
    content: `
      <p>Tahun 2025 telah menjadi tahun yang luar biasa bagi Program Studi Ilmu Komputer di Universitas Halu Oleo. Kami telah mencapai berbagai tonggak penting dan membuat kemajuan substansial di berbagai bidang.</p>
      
      <br />

      <h2>Pencapaian Akademik</h2>
      
      <br />

      <p>Alumni program studi kami telah mempublikasikan lebih dari 50 makalah penelitian di jurnal dan konferensi internasional terkemuka. Dr. Liza Safitri menerima penghargaan "Peneliti Unggul" dari Asosiasi Ilmuwan Komputer Indonesia.</p>
      
      <br />

      <h2>Pencapaian Mahasiswa</h2>
      
      <br />

      <p>Mahasiswa kami telah unggul dalam kompetisi tingkat nasional dan internasional. Tim yang dipimpin oleh Aditya Pratama meraih juara pertama di Kontes Pemrograman Asia Tenggara. Selain itu, tiga mahasiswa kami mendapatkan beasiswa untuk melanjutkan studi pascasarjana di universitas-universitas di Amerika Serikat dan Eropa.</p>
      
      <br />

      <h2>Kolaborasi Industri</h2>
      
      <br />

      <p>Kami telah menjalin kemitraan baru dengan perusahaan-perusahaan teknologi terkemuka, yang membuka peluang magang dan pekerjaan bagi mahasiswa kami. Kolaborasi ini juga memperkaya kurikulum kami dengan materi praktis yang relevan dengan industri.</p>
      
      <br/>

      <h2>Pengembangan Infrastruktur</h2>

      <br />

      <p>Fasilitas komputasi departemen telah ditingkatkan dengan perangkat keras dan perangkat lunak terbaru, menyediakan lingkungan pembelajaran yang mutakhir bagi mahasiswa.</p>
      
      <br />

      <h2>Tujuan Masa Depan</h2>
      
      <br />
      
      <p>Melihat ke depan, kami bertujuan untuk lebih memperkuat hasil penelitian kami, meningkatkan kolaborasi internasional, dan terus menyediakan pendidikan berkualitas tinggi yang mempersiapkan mahasiswa kami untuk menghadapi perkembangan pesat dunia teknologi.</p>
    `,
    author: "Prof. Dr. Natalis Ransi",
    date: "28 April, 2025",
    readTime: "5 min read",
    category: "department",
    imageUrl: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "3",
    title: "Pameran Proyek Mahasiswa",
    excerpt: "Sorotan dari pameran proyek mahasiswa terbaru yang menampilkan solusi-solusi inovatif.",
    content: `
      <p>Pameran Proyek Mahasiswa tahunan kami tahun ini sukses besar, menampilkan berbagai solusi inovatif yang dikembangkan oleh mahasiswa-mahasiswa berbakat di berbagai bidang ilmu komputer. Berikut adalah beberapa proyek yang paling menonjol:</p>
      
      <br />

      <h2>Proyek Terkenal</h2>

      <br />
      
      <h3>1. Sistem Manajemen Lalu Lintas Cerdas</h3>

      <br />

      <p>Dikembangkan oleh tim mahasiswa tingkat akhir, sistem ini menggunakan visi komputer dan pembelajaran mesin untuk mengoptimalkan arus lalu lintas di kawasan perkotaan. Prototipe ini menunjukkan pengurangan 25% dalam kemacetan lalu lintas pada jam sibuk.</p>
      
      <br />

      <h3>2. Aplikasi Pemantauan Kesehatan</h3>

      <br />

      <p>Aplikasi mobile ini dirancang untuk perawatan lansia, yang terus memantau tanda-tanda vital dan memberi peringatan kepada pengasuh jika ada kelainan. Proyek ini memenangkan penghargaan 'Solusi Kesehatan Terbaik' di hackathon regional.</p>
      
      <br />

      <h3>3. Dasbor Energi Berkelanjutan</h3>

      <br />

      <pDasbor berbasis web yang membantu pengguna memvisualisasikan dan mengoptimalkan pola konsumsi energi mereka. Sistem ini terintegrasi dengan perangkat rumah pintar untuk memberikan wawasan dan rekomendasi secara real-time.</p>
      
      <br />

      <h3>4. Sistem Penilaian Esai Otomatis</h3>

      <br />

      <p>Menggunakan teknik pemrosesan bahasa alami, sistem ini membantu pendidik dalam menilai esai secara lebih efisien sambil memberikan umpan balik yang detail kepada siswa.</p>
      
      <br />

      <h2>Penerimaan Industri</h2>

      <br />

      <p>Pameran ini menarik perhatian perwakilan dari berbagai perusahaan teknologi, dengan dua proyek yang menerima pendanaan untuk pengembangan lebih lanjut. Banyak mahasiswa juga memperoleh kesempatan magang berdasarkan pekerjaan proyek mereka.</p>
      
      <br />
      
      <h2>Arah Masa Depan</h2>

      <br />

      <p>Keberhasilan pameran tahun ini menginspirasi rencana untuk memperluas acara ini tahun depan, termasuk kategori untuk mahasiswa junior dan proyek kolaboratif dengan departemen lain.</p>
      
      <br />

      <p>Kami sangat bangga dengan kreativitas, keterampilan teknis, dan dedikasi mahasiswa kami dalam memecahkan masalah dunia nyata melalui teknologi.</p>
    `,
    author: "Liza Safitri, M.Sc.",
    date: "15 April, 2025",
    readTime: "6 min read",
    category: "students",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

const ArticleDetail = () => {
  const { id } = useParams<{id: string}>();
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
          <Button asChild>
            <Link to="/articles">Kembali ke Artikel</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/articles" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Artikel
            </Link>
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          {article.imageUrl && (
            <div className="my-6">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full max-h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div 
            className="prose prose-blue max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-10 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">Bagikan artikel ini</h3>
            <div className="flex gap-2">
              <a 
                href={`https://web.facebook.com/?_rdc=1&_rdr#`}
                target="_blank"
                rel="noopener noreferrer"  
              >
                
                <Button variant="outline" size="sm">
                Facebook
                </Button>
              </a>

              <a
                href={`https://x.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                X
                </Button>
              </a>

              <a 
                href={`https://id.linkedin.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticleDetail;
