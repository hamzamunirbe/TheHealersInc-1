import { Button } from "@mui/material";

const ConsumerLandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[222px] box-border relative gap-[148px] max-w-full text-center text-41xl text-white font-web-primary-h3-primary-dm-sans mq750:gap-[74px] mq1050:pb-36 mq1050:box-border mq450:gap-[37px] mq450:pb-[94px] mq450:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/images@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-400 z-[1]" />
        </div>
        <header className="self-stretch h-[108px] flex flex-row items-start justify-center py-6 px-5 box-border gap-[732.2px] z-[2] mq1225:gap-[366px] mq750:gap-[183px] mq450:gap-[92px]">
          <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
              <img
                className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers-logo1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
                <img
                  className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/the-healers1.svg"
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
                  color: "#fff",
                  fontSize: "18",
                  borderRadius: "4px",
                  height: 38,
                }}
              >
                Login
              </Button>
            </div>
            <Button
              className="self-stretch flex-1"
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                borderColor: "#fff",
                borderRadius: "8px",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              Sign Up Now
            </Button>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
          <div className="w-[612px] flex flex-col items-center justify-start gap-[40px] max-w-full z-[2] mq750:gap-[20px]">
            <div className="w-[599px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[65px] font-bold font-inherit mq750:text-29xl mq750:leading-[52px] mq450:text-17xl mq450:leading-[39px]">
                Find an ideal healing experience.
              </h1>
              <div className="w-[465.9px] relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-500 inline-block mix-blend-normal max-w-full">
                Explore a world of wellness options and embark on your journey
                to healing.
              </div>
            </div>
            <div className="self-stretch h-[132px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] text-left text-mini text-gray-700">
              <div className="self-stretch flex-1 rounded-3xs bg-darkorange overflow-x-auto flex flex-row items-center justify-start py-6 px-8 gap-[16px]">
                <div className="flex-1 rounded-md bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start py-3.5 px-[15px] whitespace-nowrap border-[1px] border-solid border-whitesmoke-200">
                  <div className="self-stretch relative tracking-[-0.18px] leading-[16px] mix-blend-normal">
                    Search for anything
                  </div>
                </div>
                <Button
                  className="h-12 flex-1"
                  endIcon={
                    <img
                      width="16px"
                      height="16px"
                      src="/iconoutlinelocationmarker.svg"
                    />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "rgba(22, 28, 45, 0.7)",
                    fontSize: "15",
                    background: "#fff",
                    borderRadius: "6px",
                    "&:hover": { background: "#fff" },
                    height: 48,
                  }}
                >
                  Vancouver, Canada
                </Button>
                <Button
                  className="self-stretch w-[124px]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "#006cf0",
                    borderRadius: "4px",
                    "&:hover": { background: "#006cf0" },
                    width: 124,
                  }}
                >
                  Search
                </Button>
              </div>
              <div className="relative tracking-[-0.1px] leading-[26px] text-gray-500 mix-blend-normal">
                Try Yoga, Meditation etc.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-whitesmoke-100 flex flex-row items-center justify-start py-0 px-[100px] box-border gap-[56px] max-w-full text-left text-29xl text-gray-200 font-web-primary-h3-primary-dm-sans mq1225:flex-wrap mq1225:gap-[28px] mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
        <img
          className="h-[796px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[385px] min-h-[796px] mq1225:flex-1 mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/divleft-content@2x.png"
        />
        <div className="flex-[0.8649] overflow-hidden flex flex-col items-start justify-center py-16 px-10 box-border gap-[40px] min-w-[385px] max-w-full mq1225:flex-1 mq750:gap-[20px] mq750:min-w-full mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq450:pt-[27px] mq450:pb-[27px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-1.8px] leading-[58px] font-bold font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Your Path to Holistic Wellness
            </h1>
            <div className="relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-700 mix-blend-normal">
              People choose us because we serve the best for everyone.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[82px] pl-0 gap-[32px] text-2xl mq750:gap-[16px] mq750:pr-[41px] mq750:box-border">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Diverse Healing Modalities
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                  Explore varied healing options for your holistic well-being.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Instant Notifications
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                  Receive instant notifications for appointment reminders.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Expert Practitioners
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                  Connect with skilled practitioners for personalized wellness
                  guidance.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Personalized Experiences
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-700 mix-blend-normal">
                  Tailored services to meet your unique wellness needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start py-14 px-[100px] box-border gap-[29px] max-w-full text-left text-13xl text-character-title-85 font-web-primary-h3-primary-dm-sans mq750:py-9 mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
          Explore Best Practitioners
        </h2>
        <div className="w-[1240px] overflow-x-auto flex flex-row items-start justify-start py-0 px-0 box-border gap-[32px] max-w-full text-xl text-neutral-10 mq750:gap-[16px]">
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                    1 mile
                  </div>
                  <div className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/near-me.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                    1 mile
                  </div>
                  <img className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                    1 mile
                  </div>
                  <img className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                    1 mile
                  </div>
                  <img className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium">
                    1 mile
                  </div>
                  <img className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium">
                    1 mile
                  </div>
                  <img className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium">
                    1 mile
                  </div>
                  <img className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start py-14 px-[100px] box-border gap-[24px] max-w-full text-left text-13xl text-character-title-85 font-web-primary-h3-primary-dm-sans mq750:py-9 mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
          Explore Categories
        </h2>
        <div className="self-stretch overflow-x-auto flex flex-row flex-wrap items-start justify-start gap-[32px_30px] min-h-[332px] max-w-full text-center text-white">
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[27px] px-[7px] box-border bg-[url('/public/divcategory@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Psychologists and Counselors
            </h2>
          </div>
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/divcategory1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Mind
            </h2>
          </div>
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/divcategory2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Body
            </h2>
          </div>
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/divcategory3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Medicine
            </h2>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-consumer-colors-primary-1 flex flex-row items-start justify-start py-[140.5px] px-[100px] box-border gap-[56px] max-w-full text-left text-smi text-consumer-colors-monochromatic font-web-primary-h3-primary-dm-sans mq1225:flex-wrap mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border mq750:gap-[28px] mq750:py-[91px] mq750:px-[25px] mq750:box-border">
        <div className="w-[690px] flex flex-col items-start justify-start gap-[32px] min-w-[690px] max-w-full mq1225:flex-1 mq750:gap-[16px] mq1050:min-w-full">
          <div className="w-[589px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <b className="self-stretch relative tracking-[1.63px] uppercase">
              The Healers app
            </b>
            <h1 className="m-0 w-[568px] relative text-37xl tracking-[-1.8px] leading-[110%] font-bold font-inherit text-gray-200 inline-block max-w-full mq750:text-26xl mq750:leading-[49px] mq450:text-15xl mq450:leading-[37px]">
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
        <div className="w-64 flex flex-col items-start justify-start pt-[39.5px] px-0 pb-0 box-border min-w-[256px] text-lgi text-m3-black mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[36px] mq450:gap-[18px]">
            <div className="rounded-2xl bg-white flex flex-row items-start justify-start p-4 gap-[16px]">
              <div className="flex flex-row items-start justify-start py-1 px-0">
                <div className="h-4 w-4 relative rounded-[50%] bg-lightcoral" />
              </div>
              <b className="relative tracking-[-0.2px]">
                <p className="m-0">{`Booking Made `}</p>
                <p className="m-0">Simple</p>
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-center text-white">
              <div className="w-[213px] flex flex-row items-start justify-start relative">
                <div className="h-[530px] w-[409.1px] absolute !m-[0] top-[-242px] right-[-238px]">
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
                  <div className="flex flex-row items-start justify-start py-0 px-7">
                    <img
                      className="h-[46px] w-[109px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-2.svg"
                    />
                  </div>
                  <b className="self-stretch relative tracking-[-0.2px]">
                    Best Practitioners
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-white flex flex-col items-center justify-start py-10 px-5 box-border gap-[32px] max-w-full text-left text-mid text-gray-200 font-web-primary-h3-primary-dm-sans mq750:gap-[16px] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border">
        <div className="flex flex-row items-start justify-start gap-[61.6px] max-w-full mq1225:flex-wrap mq750:gap-[31px] mq450:gap-[15px]">
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
          <div className="w-[135px] flex flex-col items-start justify-start gap-[16px] text-4xs-4 text-white font-open-sans">
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
                src="/buttoninstagram@2x.png"
              />
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
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

export default ConsumerLandingPage;
