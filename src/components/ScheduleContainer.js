import { Button } from "@mui/material";

const ScheduleContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full text-left text-13xl text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq675:gap-[28px]">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
        <div className="w-[444px] flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
            Weekly Schedule
          </h1>
          <div className="self-stretch relative text-sm leading-[22px]">{`Check your schedule and slots here. `}</div>
        </div>
        <div className="w-[189px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
          <Button
            className="self-stretch h-[34px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#006a6a",
              border: "#006a6a solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#006a6a" },
              height: 34,
            }}
          >
            Add new Schedule
          </Button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-base text-neutral-10 mq675:flex-wrap">
        <div className="w-[367px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
          <div className="h-[52px] flex-1 relative min-w-[197px] w-auto">
            <div className="absolute h-[76.92%] top-[11.54%] bottom-[11.54%] left-[calc(50%_-_96.5px)] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded bg-m3-sys-light-on-primary flex flex-row items-start justify-start py-2 px-4 box-border whitespace-nowrap">
              <div className="relative leading-[24px]">
                15 Feb 2024 - 28 Feb 2024
              </div>
            </div>
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_151.5px)] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-29xl bg-m3-sys-light-on-primary flex flex-row items-start justify-start py-[11px] px-4 box-border gap-[8px] w-full z-[1] text-xl">
              <b className="relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                1 Feb 2024 - 14 Feb 2024
              </b>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/keyboard-arrow-down.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-10 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
            <button className="cursor-pointer py-1.5 px-[7px] bg-m3-sys-light-on-primary self-stretch shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] rounded-81xl overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-m3-sys-light-on-primary">
              <div className="w-2.5 relative text-sm leading-[22px] font-components-helper-text text-m3-sys-light-on-primary text-center hidden shrink-0">
                A
              </div>
              <div className="overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/edit-calendar.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[200px] rounded-13xl bg-whitesmoke-1200 flex flex-row items-start justify-start p-1 box-border text-center text-sm text-neutral-dark-light">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="rounded-3xl flex flex-row items-start justify-start py-2 px-[25px]">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[46px]">
                Week 1
              </div>
            </div>
          </div>
          <img
            className="h-2.5 w-0 relative hidden z-[1]"
            alt=""
            src="/divider3.svg"
          />
          <Button
            className="h-10 flex-1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1f2024",
              fontSize: "14",
              background: "#fff",
              borderRadius: "24px",
              "&:hover": { background: "#fff" },
              height: 40,
            }}
          >
            Week 2
          </Button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-neutral-10">
        <div className="self-stretch rounded-13xl flex flex-row items-center justify-center gap-[24px] mq800:flex-wrap">
          <div className="flex-[0.638] rounded-13xl bg-consumer-colors-complemantary flex flex-col items-center justify-center py-2 px-[33px] box-border min-w-[115px] max-w-[117px] text-m3-sys-light-on-primary mq450:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[51px]">
              Sunday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[33px]">{`Feb 1 `}</div>
          </div>
          <div className="flex-[0.6879] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[31px] box-border min-w-[115px] max-w-[117px] mq450:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[55px]">
              Monday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
              Feb 2
            </div>
          </div>
          <div className="flex-[0.7129] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[30px] box-border min-w-[115px] max-w-[117px] mq450:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[57px]">
              Tuesday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
              Feb 3
            </div>
          </div>
          <div className="flex-1 rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 pr-[18px] pl-[19px] box-border min-w-[115px] max-w-[117px]">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[80px]">
              Wednesday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[38px]">
              Feb 4
            </div>
          </div>
          <div className="flex-[0.8002] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 pr-[27px] pl-[26px] box-border min-w-[115px] max-w-[117px] mq450:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[64px]">
              Thursday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
              Feb 5
            </div>
          </div>
          <div className="flex-[0.5368] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 pr-[37px] pl-[37.1px] box-border min-w-[115px] max-w-[117px] mq450:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[43px]">
              Friday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
              Feb 6
            </div>
          </div>
          <div className="flex-[0.774] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 pr-[27.6px] pl-[27.5px] box-border min-w-[115px] max-w-[117px] mq450:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[62px]">
              Saturday
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[36px]">
              Feb 7
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
        <div className="self-stretch flex flex-row items-center justify-start">
          <b className="relative leading-[30px] whitespace-nowrap mq450:text-base mq450:leading-[24px]">
            09:00 AM - 05:00 PM
          </b>
        </div>
        <div className="self-stretch bg-m3-sys-light-on-primary flex flex-row flex-wrap items-center justify-start gap-[24px] text-lg text-character-title-85-700">
          <div className="w-[291px] rounded-xl bg-m3-sys-light-on-primary box-border flex flex-col items-center justify-start py-[22px] px-[15px] gap-[24px] border-[1px] border-solid border-silver-200">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <b className="relative leading-[28px] inline-block min-w-[74px]">
                  Slot No 1
                </b>
              </div>
              <img
                className="self-stretch w-[45px] relative rounded-181xl max-h-full overflow-hidden shrink-0 min-h-[28px]"
                loading="lazy"
                alt=""
                src="/toggle.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px] text-right text-base text-m3-black">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-center text-left">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[77px] whitespace-nowrap">
                    09:00 AM
                  </div>
                </div>
                <div className="relative text-xs leading-[18px] inline-block min-w-[16px]">
                  TO
                </div>
                <div className="flex flex-col items-end justify-center">
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[77px] whitespace-nowrap">
                    05:00 AM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-daybreak-blue-1 rounded flex flex-row items-center justify-center hover:bg-gainsboro-300">
                  <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-primary-6 text-center inline-block min-w-[37px]">
                    Open
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-1.5 px-2 bg-silver-100 rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-gray1-800">
                  <div className="relative text-sm leading-[22px] font-web-secondary-underline-subtitle2-dm-sans text-gray-900 text-center inline-block min-w-[74px]">
                    90 Minutes
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-m3-sys-light-on-primary hidden flex-col items-center justify-start py-6 px-[15px] gap-[24px] border-[1px] border-solid border-silver-200">
            <div className="w-[259px] flex flex-row items-center justify-between gap-[20px]">
              <div className="h-7 w-[79px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                <b className="self-stretch flex-1 relative leading-[28px] flex items-center">
                  Slot No 4
                </b>
              </div>
              <img
                className="h-7 w-[45px] relative rounded-181xl overflow-hidden shrink-0"
                alt=""
                src="/toggle.svg"
              />
            </div>
            <div className="w-[259px] flex-1 flex flex-col items-end justify-start gap-[8px] text-right text-base text-m3-black">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-center text-left">
                  <div className="self-stretch h-6 relative leading-[24px] font-semibold inline-block whitespace-nowrap">
                    04:00 PM
                  </div>
                </div>
                <div className="relative text-xs leading-[18px]">TO</div>
                <div className="flex flex-col items-end justify-center">
                  <div className="self-stretch h-6 relative leading-[24px] font-semibold inline-block whitespace-nowrap">
                    04:30 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px] text-center text-sm text-primary-6">
                <div className="self-stretch rounded bg-daybreak-blue-1 flex flex-row items-center justify-center py-1.5 px-2">
                  <div className="self-stretch relative leading-[22px] font-semibold flex items-center justify-center">
                    Open
                  </div>
                </div>
                <div className="rounded-lg bg-silver-100 flex flex-row items-center justify-center py-1.5 px-2 whitespace-nowrap text-gray-900">
                  <div className="relative leading-[22px]">30 Minutes</div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-whitesmoke-1200 hidden flex-col items-center justify-start py-[22px] px-[15px] gap-[24px] border-[1px] border-solid border-silver-200">
            <div className="w-[259px] flex flex-row items-center justify-between gap-[20px]">
              <div className="h-7 w-[78px] overflow-hidden shrink-0 flex flex-row items-center justify-start">
                <b className="self-stretch flex-1 relative leading-[28px] flex items-center">
                  Slot No 5
                </b>
              </div>
              <img
                className="h-7 w-[45px] relative rounded-181xl overflow-hidden shrink-0"
                alt=""
                src="/toggle.svg"
              />
            </div>
            <div className="w-[259px] flex flex-col items-end justify-start gap-[8px] text-right text-base text-m3-black">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-center text-left">
                  <div className="self-stretch h-6 relative leading-[24px] font-semibold inline-block whitespace-nowrap">
                    04:00 PM
                  </div>
                </div>
                <div className="relative text-xs leading-[18px]">TO</div>
                <div className="flex flex-col items-end justify-center">
                  <div className="self-stretch h-6 relative leading-[24px] font-semibold inline-block whitespace-nowrap">
                    04:30 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-center text-sm text-polar-green-7">
                <div className="rounded bg-polar-green-2 flex flex-row items-center justify-center py-1.5 px-2 gap-[8px]">
                  <div className="relative leading-[22px] font-semibold">
                    Booked
                  </div>
                  <div className="rounded bg-cyan-1 flex flex-row items-center justify-center py-px px-2 text-sunset-orange-6">
                    <div className="relative leading-[22px] font-semibold">
                      OTF
                    </div>
                  </div>
                </div>
                <div className="h-[34px] rounded-lg bg-silver-100 flex flex-row items-center justify-center py-1.5 px-2 box-border whitespace-nowrap text-gray-900">
                  <div className="self-stretch relative leading-[22px] flex items-center justify-center">
                    30 Minutes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleContainer;
