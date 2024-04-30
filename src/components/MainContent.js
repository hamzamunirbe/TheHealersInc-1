import { Button } from "@mui/material";
import CalendarInputArea from "./CalendarInputArea";
import TimeRows from "./TimeRows";

const MainContent = () => {
  return (
    <section className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-[calc(100%_-_364px)] text-left text-13xl text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq1050:max-w-full mq750:pt-9 mq750:box-border">
      <div className="self-stretch flex flex-col items-end justify-start gap-[56px] max-w-full mq750:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[444px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              Add Schedule
            </h1>
            <div className="self-stretch relative text-sm leading-[22px]">
              You can add schedule upto 2 weeks which will be renewed after your
              confirmation at the end of the current schedule.
            </div>
          </div>
        </div>
        <CalendarInputArea propColor1="rgba(0, 0, 0, 0.6)" />
        <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-neutral-10">
          <div className="self-stretch rounded-13xl flex flex-row items-center justify-center gap-[24px] mq1050:flex-wrap">
            <div className="flex-[0.6375] rounded-13xl bg-consumer-colors-complemantary flex flex-col items-center justify-center py-2 px-[32.5px] box-border min-w-[114px] max-w-[116px] text-m3-sys-light-on-primary mq450:flex-1">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[51px]">
                Sunday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[33px]">{`Feb 1 `}</div>
            </div>
            <div className="flex-[0.6875] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[30.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[55px]">
                Monday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
                Feb 2
              </div>
            </div>
            <div className="flex-[0.7125] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[29.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[57px]">
                Tuesday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
                Feb 3
              </div>
            </div>
            <div className="flex-1 rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[18px] box-border min-w-[114px] max-w-[116px]">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[80px]">
                Wednesday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[38px]">
                Feb 4
              </div>
            </div>
            <div className="flex-[0.8] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[26px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[64px]">
                Thursday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
                Feb 5
              </div>
            </div>
            <div className="flex-[0.5375] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[36.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[43px]">
                Friday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[37px]">
                Feb 6
              </div>
            </div>
            <div className="flex-[0.775] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[27px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[62px]">
                Saturday
              </div>
              <div className="relative leading-[22px] font-semibold inline-block min-w-[36px]">
                Feb 7
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-base text-m3-black font-web-secondary-underline-subtitle2-dm-sans">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative leading-[24px] font-semibold">
              Availability hours
            </div>
            <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/add-circle-outline.svg"
              />
            </div>
          </div>
          <TimeRows
            timeFormat="1"
            removeCircleOutline="/remove-circle-outline-1.svg"
            propMinWidth="7px"
          />
        </footer>
        <div className="w-[354px] h-[60px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[14px] max-w-full">
          <Button
            className="self-stretch flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "rgba(0, 0, 0, 0.85)",
              fontSize: "18",
              background: "#fff",
              border: "#d9d9d9 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#fff" },
            }}
          >
            Cancel
          </Button>
          <Button
            className="self-stretch flex-[0.6667] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#006a6a",
              border: "#006a6a solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#006a6a" },
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
