
import { useParams } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Sample article data for demonstration
const articles = [
  {
    id: "1",
    title: "Introduction to Machine Learning with Python",
    excerpt: "Learn the fundamentals of machine learning using Python and popular libraries like scikit-learn.",
    content: `
      <p>Machine learning is a field of artificial intelligence that focuses on developing systems that learn from data. Python has become the go-to language for machine learning due to its simplicity and the extensive ecosystem of libraries available.</p>
      
      <h2>Popular Machine Learning Libraries in Python</h2>
      <ul>
        <li><strong>scikit-learn</strong>: A versatile library that provides a range of supervised and unsupervised learning algorithms.</li>
        <li><strong>TensorFlow</strong>: An open-source platform for machine learning developed by Google.</li>
        <li><strong>PyTorch</strong>: A machine learning library developed by Facebook's AI Research lab.</li>
        <li><strong>Keras</strong>: A high-level neural networks API that runs on top of TensorFlow.</li>
      </ul>
      
      <h2>Getting Started with Machine Learning</h2>
      <p>To begin your journey in machine learning with Python, you should have a good understanding of basic Python syntax and data structures. Familiarity with libraries like NumPy and Pandas will also be beneficial.</p>
      
      <p>Here's a simple example of a machine learning model using scikit-learn:</p>
      
      <pre><code>
      from sklearn.datasets import load_iris
      from sklearn.model_selection import train_test_split
      from sklearn.ensemble import RandomForestClassifier
      
      # Load a sample dataset
      iris = load_iris()
      X, y = iris.data, iris.target
      
      # Split the data into training and testing sets
      X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
      
      # Train a Random Forest Classifier
      clf = RandomForestClassifier(n_estimators=100)
      clf.fit(X_train, y_train)
      
      # Make predictions
      y_pred = clf.predict(X_test)
      
      # Evaluate the model
      accuracy = (y_pred == y_test).sum() / len(y_test)
      print(f"Accuracy: {accuracy:.2f}")
      </code></pre>
      
      <p>This is just a simple example. As you progress, you'll learn about more complex models, feature engineering, hyperparameter tuning, and more.</p>
    `,
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
    content: `
      <p>The year 2025 has been remarkable for the Computer Science Department at Halu Oleo University. We have achieved significant milestones and made substantial progress in various areas.</p>
      
      <h2>Academic Achievements</h2>
      <p>Our faculty members have published over 50 research papers in prestigious international journals and conferences. Dr. Liza Safitri received the 'Outstanding Researcher' award from the Association of Indonesian Computer Scientists.</p>
      
      <h2>Student Accomplishments</h2>
      <p>Our students have excelled in national and international competitions. The team led by Aditya Pratama won the first prize in the Southeast Asian Programming Contest. Additionally, three of our students received scholarships for postgraduate studies at universities in the United States and Europe.</p>
      
      <h2>Industry Collaborations</h2>
      <p>We have established new partnerships with leading tech companies, which have opened up internship and job opportunities for our students. These collaborations have also enhanced our curriculum with practical, industry-relevant content.</p>
      
      <h2>Infrastructure Development</h2>
      <p>The department's computing facilities have been upgraded with the latest hardware and software, providing students with a cutting-edge learning environment.</p>
      
      <h2>Future Goals</h2>
      <p>Looking ahead, we aim to further strengthen our research output, enhance international collaborations, and continue to provide high-quality education that prepares our students for the evolving tech landscape.</p>
    `,
    author: "Prof. Dr. Natalis Ransi",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "department"
  },
  {
    id: "3",
    title: "Student Projects Showcase",
    excerpt: "Highlights from the recent student projects exhibition featuring innovative solutions.",
    content: `
      <p>Our annual Student Projects Showcase was a resounding success, featuring innovative solutions developed by our talented students across various domains of computer science.</p>
      
      <h2>Notable Projects</h2>
      
      <h3>1. Intelligent Traffic Management System</h3>
      <p>Developed by a team of final-year students, this system uses computer vision and machine learning to optimize traffic flow in urban areas. The prototype demonstrated a 25% reduction in traffic congestion during peak hours.</p>
      
      <h3>2. Healthcare Monitoring App</h3>
      <p>This mobile application, designed for elderly care, continuously monitors vital signs and alerts caregivers in case of anomalies. The project won the 'Best Healthcare Solution' award at the regional hackathon.</p>
      
      <h3>3. Sustainable Energy Dashboard</h3>
      <p>A web-based dashboard that helps users visualize and optimize their energy consumption patterns. The system integrates with smart home devices to provide real-time insights and recommendations.</p>
      
      <h3>4. Automated Essay Grading System</h3>
      <p>Using natural language processing techniques, this system assists educators in grading essays more efficiently while providing detailed feedback to students.</p>
      
      <h2>Industry Reception</h2>
      <p>The showcase attracted representatives from several tech companies, with two projects receiving funding for further development. Many students also secured internship opportunities based on their project work.</p>
      
      <h2>Future Directions</h2>
      <p>The success of this year's showcase has inspired plans to expand the event next year, including categories for junior students and collaborative projects with other departments.</p>
      
      <p>We are incredibly proud of our students' creativity, technical skills, and dedication to solving real-world problems through technology.</p>
    `,
    author: "Liza Safitri, M.Sc.",
    date: "April 15, 2025",
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
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/articles">Back to Articles</Link>
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
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
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
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticleDetail;
