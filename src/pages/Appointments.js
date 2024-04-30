import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import AppointmentsHeader from "../components/AppointmentsHeader";

const Appointments = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <header className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-center py-[22px] px-5 gap-[649.2px] sticky top-[0] z-[99] max-w-full border-[1px] border-solid border-gainsboro-100 lg:gap-[325px] mq450:gap-[81px] mq750:gap-[162px]">
        <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
            <img
              className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0 [debug_commit:1de1738]"
              loading="lazy"
              alt=""
              src="/the-healers-logo.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
              <img
                className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
                loading="lazy"
                alt=""
                src="/the-healers.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[339px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-m3-sys-light-on-primary overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border gap-[20px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-[41px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-sm text-lightslategray"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="11px" height="11px" src="/search-icon.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "41px",
                backgroundColor: "#f4f7fe",
                paddingLeft: "20px",
                borderRadius: "0px 0px 0px 0px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "11px",
                color: "#8f9bba",
              },
            }}
          />
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/notifications-none2.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-[41px] w-[41px] relative"
              loading="lazy"
              alt=""
              src="/avatar.svg"
            />
          </div>
        </div>
      </header>
      <section className="w-[1360px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[64px] max-w-full text-left text-xl text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans mq1050:pl-5 mq1050:box-border mq450:gap-[16px] mq750:gap-[32px]">
        <div className="h-[584px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] border-r-[1px] border-solid border-silver-200 mq1050:hidden mq450:gap-[134px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Dashboard
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-1.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Schedule
              </h3>
            </div>
            <div className="self-stretch rounded-lg bg-whitesmoke-1300 flex flex-row items-center justify-center py-4 px-3 gap-[12px] text-neutral-10">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-21.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-semibold font-inherit mq450:text-base mq450:leading-[19px]">
                Appointments
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/sidebar-icons-3.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Services
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-4.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Inbox
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-5.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Profile
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-[calc(100%_-_364px)] mq1050:max-w-full mq750:pt-9 mq750:box-border">
          <AppointmentsHeader />
        </div>
      </section>
    </div>
  );
};

export default Appointments;
