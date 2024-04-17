import { Button } from "@mui/material";

const MainContent = () => {
  return (
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
              Explore a world of wellness options and embark on your journey to
              healing.
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
  );
};

export default MainContent;
