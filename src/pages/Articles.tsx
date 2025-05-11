
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Sample article data for demonstration
const articles = [
  {
    id: "1",
    title: "Introduction to Machine Learning with Python",
    excerpt: "Learn the fundamentals of machine learning using Python and popular libraries like scikit-learn.",
    content: "Full content here...",
    author: "Dr. Wayan Suparta",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "technical",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    title: "Computer Science Department Achievements 2025",
    excerpt: "A summary of the achievements and milestones reached by our department in the past year.",
    content: "Full content here...",
    author: "Prof. Dr. Natalis Ransi",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "department"
  },
  {
    id: "3",
    title: "Student Projects Showcase",
    excerpt: "Highlights from the recent student projects exhibition featuring innovative solutions.",
    content: "Full content here...",
    author: "Liza Safitri, M.Sc.",
    date: "April 15, 2025",
    readTime: "6 min read",
    category: "students",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
  }
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => {
  return (
    <Card className="h-full flex flex-col card-hover">
      {article.imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl hover:text-primary transition-colors">
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </CardTitle>
        <CardDescription>{article.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground border-t pt-4 flex flex-wrap gap-3 justify-between">
        <div className="flex items-center gap-1">
          <User className="h-3 w-3" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>{article.readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

const Articles = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Artikel</h1>
            <p className="text-muted-foreground">
              Artikel, Berita, dan Pembaruan Terbaru dari Program Studi Kami
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button size="sm" variant="outline">Berlangganan Pembaruan</Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">Semua Artikel</TabsTrigger>
            <TabsTrigger value="technical">Teknikal</TabsTrigger>
            <TabsTrigger value="department">Program Studi</TabsTrigger>
            <TabsTrigger value="students">Mahasiswa</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="technical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {articles.filter(a => a.category === "technical").map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="department">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {articles.filter(a => a.category === "department").map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="students">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {articles.filter(a => a.category === "students").map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Articles;
