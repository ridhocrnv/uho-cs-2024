
const StatsBanner = () => {
  const stats = [
    { value: "60+", label: "Students" },
    { value: "12", label: "Courses" },
    { value: "6", label: "Projects" },
    { value: "3", label: "Student Groups" }
  ];

  return (
    <section className="py-12 bg-uho text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-uho-text-light uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
