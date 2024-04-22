import { Button } from "@mui/material";

const FirstLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch bg-gray-300 flex flex-col items-start justify-start pt-0 px-0 pb-[205px] box-border gap-[109px] max-w-full text-center text-[72px] text-neutral-1 font-web-primary-h3-primary-dm-sans mq450:gap-[27px] mq750:gap-[54px] mq750:pb-[133px] mq750:box-border">
        <header className="self-stretch flex flex-row items-start justify-start py-6 px-[100px] top-[0] z-[99] sticky mq450:gap-[101px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
            <img
              className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo-11.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
              <img
                className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers2.svg"
              />
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[698px] flex flex-col items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-black font-inherit mq450:text-[43px] mq450:leading-[48px] mq750:text-[58px] mq750:leading-[63px]">
              Ready to transform your life?
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-5xl mq750:pl-8 mq750:pr-8 mq750:box-border">
              <h3 className="m-0 flex-1 relative text-inherit leading-[160%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[31px]">
                Join The Healers today and take the first step towards a
                healthier, happier you.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center max-w-full text-left text-5xl text-neutral-1 font-web-primary-h3-primary-dm-sans">
        <div className="h-[500px] flex-1 relative max-w-full">
          <div className="absolute top-[0px] left-[0px] w-[720px] overflow-hidden flex flex-col items-start justify-start pt-14 px-[100px] pb-[287px] box-border bg-[url('/public/divpractitionernavigation@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[500px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[0.5px] font-bold font-inherit mq450:text-lgi">
                Join our community of healers and showcase your fitness and
                wellness services to a wide audience.
              </h3>
              <Button
                className="w-[206px] h-10 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#e08e2b",
                  border: "#e08e2b solid 1px",
                  borderRadius: "4px",
                  "&:hover": { background: "#e08e2b" },
                  width: 206,
                  height: 40,
                }}
              >
                Join as practitioner
              </Button>
            </div>
          </div>
          <div className="absolute top-[0px] left-[720px] w-[720px] overflow-hidden flex flex-col items-start justify-start pt-14 px-[100px] pb-[287px] box-border bg-[url('/public/divconsumernavigation@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[500px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 gap-[24px]">
              <h3 className="m-0 self-stretch relative text-inherit tracking-[0.5px] font-bold font-inherit mq450:text-lgi">
                Explore a variety of fitness and wellness services offered by
                our trusted providers to enhance your well-being.
              </h3>
              <Button
                className="w-[181px] h-10 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#e08e2b",
                  border: "#e08e2b solid 1px",
                  borderRadius: "4px",
                  "&:hover": { background: "#e08e2b" },
                  width: 181,
                  height: 40,
                }}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
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
      <section className="self-stretch bg-consumer-colors-primary-1 flex flex-row items-start justify-start py-[140.5px] px-[100px] box-border gap-[56px] max-w-full text-left text-smi text-consumer-colors-monochromatic font-web-primary-h3-primary-dm-sans mq1225:flex-wrap mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border mq750:gap-[28px] mq750:py-[91px] mq750:px-[25px] mq750:box-border">
        <div className="w-[690px] flex flex-col items-start justify-start gap-[32px] min-w-[690px] max-w-full mq1225:flex-1 mq1050:min-w-full mq750:gap-[16px]">
          <div className="w-[589px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <b className="self-stretch relative tracking-[1.63px] uppercase">
              The Healers app
            </b>
            <h1 className="m-0 w-[568px] relative text-37xl tracking-[-1.8px] leading-[110%] font-bold font-inherit text-gray-200 inline-block max-w-full mq450:text-15xl mq450:leading-[37px] mq750:text-26xl mq750:leading-[49px]">
              Experience Wellness On the Go
            </h1>
          </div>
          <div className="self-stretch relative text-xl tracking-[-0.2px] leading-[180%] text-gray-700 mix-blend-normal mq450:text-base mq450:leading-[29px]">
            Take your wellness journey with you wherever you go with our mobile
            app. Seamlessly access our services, schedule appointments, and stay
            connected with your practitioner—all from the palm of your hand.
            With user-friendly navigation and convenient features, our app makes
            it easy to prioritize your well-being, no matter how busy life gets.
          </div>
        </div>
        <div className="w-[243px] flex flex-col items-start justify-start pt-[39.5px] px-0 pb-0 box-border min-w-[243px] text-lgi text-m3-black mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
            <div className="rounded-2xl bg-neutral-1 flex flex-row items-start justify-start p-4 gap-[16px]">
              <div className="flex flex-row items-start justify-start py-1 px-0">
                <div className="h-4 w-4 relative rounded-[50%] bg-lightcoral" />
              </div>
              <div className="relative tracking-[-0.2px]">
                <p className="m-0">{`Booking Made `}</p>
                <p className="m-0">Simple</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-center text-neutral-1">
              <div className="w-[200px] flex flex-row items-start justify-start relative">
                <div className="h-[530px] w-[409.1px] absolute !m-[0] top-[-242px] right-[-251px]">
                  <div className="absolute top-[0px] left-[234.1px] rounded-3xs bg-orange w-[175px] h-[216px] mix-blend-normal" />
                  <img
                    className="absolute top-[393.2px] left-[0px] w-[170px] h-[79px] object-contain"
                    alt=""
                    src="/group-101@2x.png"
                  />
                  <div className="absolute top-[28px] left-[118.1px] w-[227px] h-[502px] z-[1] flex items-center justify-center">
                    <img
                      className="w-full h-full z-[1] object-contain absolute left-[0px] top-[42px] [transform:scale(1.476)]"
                      loading="lazy"
                      alt=""
                      src="/group-5@2x.png"
                    />
                  </div>
                </div>
                <div className="flex-1 rounded-2xl bg-tomato flex flex-col items-start justify-start py-8 px-6 gap-[24px] z-[2]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[21px] pl-[21.5px]">
                    <img
                      className="h-[46px] w-[109px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-21.svg"
                    />
                  </div>
                  <div className="self-stretch relative tracking-[-0.2px]">
                    Best Practitioners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-neutral-1 flex flex-col items-center justify-start py-10 px-5 box-border gap-[32px] max-w-full text-left text-mid text-gray-200 font-web-primary-h3-primary-dm-sans mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq750:gap-[16px]">
        <div className="flex flex-row items-start justify-start gap-[61.6px] max-w-full mq1225:flex-wrap mq450:gap-[15px] mq750:gap-[31px]">
          <div className="w-64 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[32px] text-mini text-gray-700 mq450:gap-[16px]">
            <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
              <img
                className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers-logo-11.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
                <img
                  className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
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
          <div className="w-[135px] flex flex-col items-start justify-start gap-[16px] text-4xs-4 text-neutral-1 font-open-sans">
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
                    loading="lazy"
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
                src="/buttoninstagram1@2x.png"
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

export default FirstLandingPage;
