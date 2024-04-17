import HeroSection from "../components/HeroSection";
import SectionPractitionerAndVendo from "../components/SectionPractitionerAndVendo";
import SectionTheHealersApp1 from "../components/SectionTheHealersApp1";
import Footer from "../components/Footer";

const FirstLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeroSection />
      <SectionPractitionerAndVendo />
      <section className="self-stretch flex flex-col items-center justify-center py-14 px-0 box-border gap-[56px] max-w-full text-center text-smi text-consumer-colors-monochromatic font-web-primary-h3-primary-dm-sans mq750:gap-[28px] mq750:pt-9 mq750:pb-9 mq750:box-border">
        <div className="w-[1240px] overflow-hidden flex flex-col items-center justify-center py-0 px-5 box-border gap-[24px] max-w-full">
          <b className="relative tracking-[1.51px] uppercase inline-block min-w-[128px]">
            Why choose us
          </b>
          <h1 className="m-0 w-[521px] relative text-17xl tracking-[-1.2px] leading-[48px] font-bold font-inherit text-gray-200 inline-block max-w-full mq450:text-3xl mq450:leading-[29px] mq750:text-10xl mq750:leading-[38px]">
            People choose us because we serve the best for everyone
          </h1>
        </div>
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center py-0 px-[164px] box-border gap-[56px] min-h-[236px] max-w-full text-left text-2xl text-gray-200 mq1225:pl-[82px] mq1225:pr-[82px] mq1225:box-border mq750:gap-[28px] mq750:pl-[41px] mq750:pr-[41px] mq750:box-border">
          <div className="w-[428px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[16px]">
            <img
              className="h-20 w-20 relative"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Booking and Scheduling
              </b>
              <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                Book appointments with confidence using our secure booking
                system.
              </div>
            </div>
          </div>
          <div className="w-[428px] flex flex-row items-center justify-start py-0 pr-[17px] pl-0 box-border gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[16px]">
            <img
              className="h-[79px] w-[79px] relative"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Rating and Reviews
              </b>
              <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                Make informed decisions by reading reviews and ratings from
                other users.
              </div>
            </div>
          </div>
          <div className="w-[428px] flex flex-row items-center justify-start py-0 pr-[17px] pl-0 box-border gap-[32px] max-w-full mq450:flex-wrap mq450:gap-[16px]">
            <img
              className="h-[79px] w-[79px] relative"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Vendor Dashboard
              </b>
              <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                Access a comprehensive dashboard to manage bookings, track
                earnings.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
            <img
              className="h-[79px] w-[79px] relative"
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Personalized Recommendations
              </b>
              <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 inline-block mix-blend-normal">
                Receive recommendations based on your past bookings and
                interests.
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionTheHealersApp1 />
      <Footer buttonInstagram="/buttoninstagram1@2x.png" />
    </div>
  );
};

export default FirstLandingPage;
