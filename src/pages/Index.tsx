
import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsBanner from "@/components/home/StatsBanner";

const Index = () => {
  return (
    <PageLayout>
      <HeroBanner />
      <AboutSection />
      <StatsBanner />
      <FeaturesSection />
    </PageLayout>
  );
};

export default Index;
