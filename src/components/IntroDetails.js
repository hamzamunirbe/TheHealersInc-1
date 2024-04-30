import { Button } from "@mui/material";
import TextField from "./TextField";

const IntroDetails = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-3xs text-m3-black font-heading-h5">
      <div className="w-[919px] flex flex-col items-start justify-start gap-[4.1px] max-w-full">
        <div className="w-56 h-3 flex flex-row items-start justify-center py-0 px-5 box-border">
          <div className="self-stretch w-0 relative tracking-[0.05em] uppercase font-semibold inline-block z-[2]" />
        </div>
        <div className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start p-6 box-border gap-[24px] max-h-[700px] max-w-full z-[2] text-left text-13xl font-web-secondary-underline-subtitle2-dm-sans mq750:pt-5 mq750:pb-5 mq750:box-border">
          <div className="self-stretch h-[11px] relative rounded-lg bg-whitesmoke-1200 mix-blend-normal">
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_435.5px)] rounded-lg bg-whitesmoke-1200 w-full hidden mix-blend-normal" />
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_435.5px)] rounded-lg bg-consumer-colors-complemantary w-[146.1px] mix-blend-normal z-[1]" />
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[491px] max-w-full mq750:min-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                Add Tags
              </h1>
              <div className="self-stretch relative text-sm leading-[22px]">
                Add related tags for respective categories, this will help users
                find you easily.
              </div>
            </div>
            <div className="rounded overflow-hidden flex flex-row items-start justify-start py-1 px-4 gap-[10px]">
              <div className="bg-hitbox-1000 overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/wrapper@2x.png"
                />
              </div>
              <Button
                className="relative min-w-[83px]"
                disableElevation={true}
                variant="text"
                sx={{ borderRadius: "0px 0px 0px 0px" }}
              >
                Skip for now
              </Button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
            <div className="self-stretch relative leading-[24px] font-semibold">
              Mind:
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[16px] max-w-full text-xs text-text-secondary">
              <TextField />
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[58px] pl-0 box-border gap-[16px_15.2px] min-h-[88px] text-center text-sm text-highlight-darkest lg:pr-[29px] lg:box-border">
                <div className="rounded-3xl bg-highlight-lightest flex flex-row items-center justify-center py-1.5 px-2 gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative leading-[24px] inline-block min-w-[71px]">
                      Bootcamp
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[106px]">
                      Circuit Training
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[62px]">
                      Nutrition
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[118px]">
                      Personal Training
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[50px]">
                      Fitness
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[62px]">
                      Wellness
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[46px]">
                      Health
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[40px]">
                      Other
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
              </div>
              <div className="self-stretch h-px flex flex-row items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                <div className="h-px w-0 relative overflow-hidden shrink-0 hidden" />
                <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-divider" />
              </div>
              <div className="self-stretch relative text-base leading-[24px] font-semibold text-m3-black">
                Body:
              </div>
              <TextField />
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[62px] pl-0 gap-[16px_15.2px] mq1050:pr-[29px] mq1050:box-border">
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[71px]">
                      Bootcamp
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[106px]">
                      Circuit Training
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[62px]">
                      Nutrition
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[118px]">
                      Personal Training
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[50px]">
                      Fitness
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                  <img
                    className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/left-icon.svg"
                  />
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative text-sm leading-[24px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-highlight-darkest text-center min-w-[62px]">
                      Wellness
                    </b>
                  </div>
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/cancel1.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
            <Button
              className="self-stretch h-[60px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] mq450:pl-5 mq450:pr-5 mq450:box-border"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#006a6a",
                border: "#006a6a solid 1px",
                borderRadius: "8px",
                "&:hover": { background: "#006a6a" },
                height: 60,
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroDetails;
