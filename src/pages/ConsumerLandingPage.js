import MainContent from "../components/MainContent";
import SectionWhyChooseUs1 from "../components/SectionWhyChooseUs1";
import SectionExploreBestPractitio from "../components/SectionExploreBestPractitio";
import SectionExploreCategories from "../components/SectionExploreCategories";
import SectionTheHealersApp from "../components/SectionTheHealersApp";
import Footer from "../components/Footer";

const ConsumerLandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <MainContent />
      <SectionWhyChooseUs1 />
      <SectionExploreBestPractitio />
      <SectionExploreCategories />
      <SectionTheHealersApp />
      <Footer buttonInstagram="/buttoninstagram@2x.png" />
    </div>
  );
};

export default ConsumerLandingPage;
