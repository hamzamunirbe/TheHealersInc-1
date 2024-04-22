import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionWhyChooseUs from "../components/SectionWhyChooseUs";
import SectionExploreBestPractitio from "../components/SectionExploreBestPractitio";
import SectionExploreCategories from "../components/SectionExploreCategories";
import SectionTheHealersApp from "../components/SectionTheHealersApp";
import Footer from "../components/Footer";

const ConsumerLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[222px] box-border relative gap-[148px] max-w-full mq750:gap-[74px] mq1050:pb-36 mq1050:box-border mq450:gap-[37px] mq450:pb-[94px] mq450:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/images@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-400 z-[1]" />
        </div>
        <Header />
        <Hero />
      </section>
      <SectionWhyChooseUs />
      <SectionExploreBestPractitio />
      <SectionExploreCategories />
      <SectionTheHealersApp />
      <Footer />
    </div>
  );
};

export default ConsumerLandingPage;
