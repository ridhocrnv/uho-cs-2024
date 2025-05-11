
import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsBanner from "@/components/home/StatsBanner";
import PhotoCollection from "@/components/home/PhotoCollection";

const Index = () => {
  return (
    <PageLayout>
      <HeroBanner />
      <AboutSection />
      <PhotoCollection />
      <StatsBanner />
      <FeaturesSection />
    </PageLayout>
  );
};

export default Index;
