import { Button } from "@mui/material";

const PractitionerLandingPage = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-smi text-vendor-colors-triadic font-web-secondary-underline-subtitle2-dm-sans">
      <header className="self-stretch h-[108px] bg-ghostwhite-100 flex flex-row items-start justify-center py-6 px-5 box-border gap-[732.2px] top-[0] z-[99] sticky mq450:gap-[92px] mq750:gap-[183px] mq1225:gap-[366px]">
        <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
            <img
              className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
              <img
                className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch w-64 flex flex-row items-start justify-start gap-[16px]">
          <div className="w-[79px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
            <Button
              className="self-stretch h-[38px]"
              disableElevation={true}
              variant="text"
              sx={{
                textTransform: "none",
                color: "#006a6a",
                fontSize: "18",
                borderRadius: "4px",
                height: 38,
              }}
            >
              Login
            </Button>
          </div>
          <Button
            className="self-stretch flex-1 [filter:drop-shadow(0px_2px_0px_rgba(0,_0,_0,_0.02))]"
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#006a6a",
              fontSize: "18",
              borderColor: "#006a6a",
              borderRadius: "8px",
              "&:hover": { borderColor: "#006a6a" },
            }}
          >
            Sign Up Now
          </Button>
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-14 box-border max-w-full text-left text-smi text-vendor-colors-triadic font-web-secondary-underline-subtitle2-dm-sans mq750:pb-9 mq750:box-border">
        <div className="flex-1 bg-ghostwhite-100 flex flex-col items-center justify-start py-14 px-5 box-border max-w-full mq750:pt-9 mq750:pb-9 mq750:box-border">
          <div className="w-[1240px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1225:flex-wrap">
            <div className="w-[664px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-[72.5px] px-0 box-border gap-[24px] min-w-[664px] max-w-full mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq750:min-w-full mq1225:flex-1">
              <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
                <b className="relative tracking-[1.56px] uppercase">
                  Let’s shift your business
                </b>
                <h1 className="m-0 self-stretch relative text-41xl tracking-[-2px] leading-[65px] font-bold font-inherit text-gray-200 mq450:text-17xl mq450:leading-[39px] mq750:text-29xl mq750:leading-[52px]">
                  Empower your business with The Healers.
                </h1>
              </div>
              <div className="w-[566px] relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-700 inline-block mix-blend-normal max-w-full">
                Unlock Your Healing Potential, Connect with Clients, and
                Flourish in Your Practice with The Healers App – Your Trusted
                Partner in Holistic Health and Wellness.
              </div>
              <Button
                className="w-[233px] h-[60px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#006a6a",
                  border: "#006a6a solid 1px",
                  borderRadius: "4px",
                  "&:hover": { background: "#006a6a" },
                  width: 233,
                  height: 60,
                }}
              >
                Join as Practitioner
              </Button>
            </div>
            <img
              className="w-[463px] relative max-h-full object-cover max-w-full mq1225:flex-1"
              loading="lazy"
              alt=""
              src="/divright-content@2x.png"
            />
          </div>
        </div>
      </section>
      <div className="w-[845px] flex flex-row items-start justify-center pt-0 px-5 pb-[21px] box-border max-w-full">
        <div className="w-[515px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <b className="relative tracking-[1.56px] uppercase">
            KNow more about us
          </b>
          <h1 className="m-0 self-stretch relative text-17xl tracking-[-1.2px] leading-[48px] font-bold font-inherit text-gray-200 mq450:text-3xl mq450:leading-[29px] mq750:text-10xl mq750:leading-[38px]">
            We're Here to Help You Grow Your Healing Practice: Explore The
            Healers Marketplace
          </h1>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-14 box-border max-w-full text-left text-lg text-gray-700 font-web-secondary-underline-subtitle2-dm-sans mq750:pb-9 mq750:box-border">
        <div className="w-[1110px] flex flex-row items-end justify-center gap-[95px] max-w-full mq750:gap-[24px] mq1050:flex-wrap mq1225:gap-[47px]">
          <img
            className="w-[445px] relative rounded-3xs max-h-full object-cover max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/img@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[26px] box-border min-w-[370px] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq750:gap-[50px]">
              <img
                className="self-stretch h-[377px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/divimages@2x.png"
              />
              <div className="w-[490px] relative tracking-[-0.2px] leading-[29px] inline-block mix-blend-normal max-w-full">
                Welcome to The Healers Marketplace, where healing meets
                innovation. Our platform is a vibrant ecosystem connecting
                healers, practitioners, and seekers from around the globe.
                Whether you're a seasoned healer or just beginning your journey,
                our marketplace offers a diverse range of services and
                modalities to support your holistic well-being.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-center py-14 px-5 box-border gap-[56px] max-w-full text-center text-smi text-consumer-colors-monochromatic font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[28px] mq750:pt-9 mq750:pb-9 mq750:box-border">
        <div className="w-[589px] overflow-hidden flex flex-col items-center justify-start gap-[24px] max-w-full">
          <b className="self-stretch relative tracking-[1.63px] uppercase">
            Why choose us
          </b>
          <h1 className="m-0 w-[521px] relative text-17xl tracking-[-1.2px] leading-[48px] font-bold font-inherit text-gray-200 inline-block max-w-full mq450:text-3xl mq450:leading-[29px] mq750:text-10xl mq750:leading-[38px]">
            People choose us because we serve the best for everyone
          </h1>
        </div>
        <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center py-0 px-[147px] box-border gap-[56px] min-h-[236px] max-w-full text-left text-2xl text-gray-200 mq750:gap-[28px] mq750:pl-9 mq750:pr-9 mq750:box-border mq1225:pl-[73px] mq1225:pr-[73px] mq1225:box-border">
          <div className="flex flex-row items-center justify-start py-0 pr-[22px] pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
            <img
              className="h-20 w-20 relative"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <div className="flex flex-col items-start justify-start">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Global Reach, Local Connection
              </b>
              <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 inline-block mix-blend-normal">
                Expand globally, connect locally, reach diverse customers
                effortlessly
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
            <img
              className="h-[79px] w-[79px] relative"
              alt=""
              src="/icon-1.svg"
            />
            <div className="flex flex-col items-start justify-start max-w-full">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Effortless Setup and Management
              </b>
              <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 inline-block mix-blend-normal">
                Streamlined setup, simple management, user-friendly.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
            <img
              className="h-[79px] w-[79px] relative"
              alt=""
              src="/icon-1.svg"
            />
            <div className="flex flex-col items-start justify-start max-w-full">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Marketing and Promotion Support
              </b>
              <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 inline-block mix-blend-normal">
                Boost sales, enhance visibility, targeted marketing for
                increased exposure.
              </div>
            </div>
          </div>
          <div className="w-[445px] flex flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
            <img
              className="h-[79px] w-[79px] relative"
              alt=""
              src="/icon-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
              <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                Actionable Insights for Growth
              </b>
              <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                Track trends, optimize strategy, data-driven decisions for
                business success.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-vendor-colors-primary-1 flex flex-row items-center justify-start py-14 px-[100px] box-border gap-[80px] max-w-full text-left text-smi text-consumer-colors-monochromatic font-web-secondary-underline-subtitle2-dm-sans mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[40px] mq750:py-9 mq750:px-[50px] mq750:box-border mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-center gap-[8px] min-w-[461px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <b className="w-[589px] relative tracking-[1.63px] uppercase inline-block max-w-full">
              The Healers app
            </b>
            <h1 className="m-0 self-stretch relative text-37xl leading-[110%] font-bold font-inherit text-blue-gray-900 mq450:text-15xl mq450:leading-[37px] mq750:text-26xl mq750:leading-[49px]">
              Optimize Your Healing Practices
            </h1>
          </div>
          <div className="self-stretch relative text-xl leading-[180%] text-blue-gray-900 mq450:text-base mq450:leading-[29px]">
            Maximize your potential as a practitioner with our dedicated mobile
            app. Streamline your operations, manage your products, and connect
            with customers—all from the convenience of your smartphone or
            tablet. Whether you're on the go or in your studio, our app empowers
            you to stay organized, responsive, and in control of your business.
          </div>
        </div>
        <div className="h-[575px] w-[451.1px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[24px] [transform:scale(1.168)] mq1225:flex-1"
            alt=""
            src="/divright-content-1@2x.png"
          />
        </div>
      </section>
      <footer className="self-stretch bg-m3-sys-light-on-primary flex flex-col items-center justify-start py-10 px-5 box-border gap-[32px] max-w-full text-left text-mid text-gray-200 font-web-secondary-underline-subtitle2-dm-sans mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq750:gap-[16px]">
        <div className="flex flex-row items-start justify-start gap-[61.6px] max-w-full mq450:gap-[15px] mq750:gap-[31px] mq1225:flex-wrap">
          <div className="w-64 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[32px] text-mini text-gray-700 mq450:gap-[16px]">
            <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
              <img
                className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
                alt=""
                src="/the-healers-logo-1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
                <img
                  className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/the-healers-1.svg"
                />
              </div>
            </div>
            <div className="self-stretch relative tracking-[-0.1px] leading-[26px] mix-blend-normal">
              Your all-in-one platform for effortless wellness, connecting you
              with curated fitness, wellness services and personalized
              recommendations.
            </div>
          </div>
          <div className="w-[186.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
              Company
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              About us
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Contact us
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Privacy Policy
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Terms and Conditions
            </div>
          </div>
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
              Services
            </div>
            <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
              Mind
            </div>
            <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
              Body
            </div>
            <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
              Medicine
            </div>
            <div className="relative tracking-[-0.2px]">
              Psychologists and Counselors
            </div>
          </div>
          <div className="w-[186.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[16px]">
            <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
              Links
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Sitemap
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Security
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Support Center
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Cookie Preferences
            </div>
          </div>
          <div className="w-[135px] flex flex-col items-start justify-start gap-[16px] text-4xs-4 text-m3-sys-light-on-primary font-open-sans">
            <div className="self-stretch flex flex-col items-start justify-center">
              <img
                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/app-store--filled.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-end justify-start pt-[4.6px] pb-1.5 pr-[9.2px] pl-[10.1px] relative gap-[14.6px]">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
                  <img
                    className="w-[16.2px] h-[13.4px] relative z-[2]"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.4px]">
                  <div className="relative inline-block [-webkit-text-stroke:0.2px_#fff] min-w-[40px] z-[2]">
                    GET IT ON
                  </div>
                  <img
                    className="self-stretch h-[17px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
                <img
                  className="h-[11px] w-[12.5px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[20.5px] z-[3]"
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className="h-[21.5px] w-[11.1px] absolute !m-[0] bottom-[9.2px] left-[10px] z-[4]"
                  alt=""
                  src="/vector-5.svg"
                />
                <img
                  className="h-[12.9px] w-[16.3px] absolute !m-[0] top-[7.1px] left-[10px] z-[5]"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[1240px] relative max-h-full max-w-full"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
        <div className="w-[1240px] overflow-hidden flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-mini">
          <div className="flex-1 relative tracking-[-0.1px] leading-[26px] inline-block min-w-[203px] max-w-full">
            © 2024 Copyright, All Right Reserved.
          </div>
          <div className="w-48 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/buttontwitter.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/buttonfacebook.svg"
              />
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                loading="lazy"
                alt=""
                src="/buttoninstagram@2x.png"
              />
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                loading="lazy"
                alt=""
                src="/buttonlinkedin@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PractitionerLandingPage;
