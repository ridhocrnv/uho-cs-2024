
import PageLayout from "@/components/layout/PageLayout";
import HeroBanner from "@/components/home/HeroBanner";
import AnnouncementBanner from "@/components/home/AnnouncementBanner";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsBanner from "@/components/home/StatsBanner";
import PhotoCollection from "@/components/home/PhotoCollection";

const Index = () => {
  return (
    <PageLayout>
      <HeroBanner />
      <AnnouncementBanner />
      <AboutSection />
      <PhotoCollection />
      <StatsBanner />
      <FeaturesSection />
    </PageLayout>
  );
};

export default Index;
