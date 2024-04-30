import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ServicesList from "../components/ServicesList";

const Services = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-center py-[22px] px-5 gap-[649.2px] top-[0] z-[99] sticky max-w-full border-[1px] border-solid border-gainsboro-100 lg:gap-[325px] mq750:gap-[162px] mq450:gap-[81px]">
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
      <main className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="h-[899px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] border-r-[1px] border-solid border-silver-200 mq1050:hidden mq450:gap-[134px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Dashboard
              </h2>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-1.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Schedule
              </h2>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-2.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Appointments
              </h2>
            </div>
            <div className="self-stretch rounded-lg bg-whitesmoke-1300 flex flex-row items-center justify-center py-4 px-3 gap-[12px] text-neutral-10">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/sidebar-icons-3.svg"
              />
              <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                Services
              </div>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-4.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Inbox
              </h2>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-5.svg"
              />
              <h2 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Profile
              </h2>
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start py-14 pr-[120px] pl-14 box-border gap-[40px] max-w-[calc(100%_-_300px)] text-left text-13xl text-m3-black font-web-secondary-underline-subtitle2-dm-sans lg:pl-7 lg:pr-[60px] lg:box-border mq750:gap-[20px] mq750:pr-[30px] mq750:box-border mq1050:pt-9 mq1050:pb-9 mq1050:box-border mq1050:max-w-full mq450:pt-[23px] mq450:pb-[23px] mq450:box-border">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] min-w-[475px] max-w-full mq750:min-w-full">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                Services
              </h1>
              <div className="w-[444px] relative text-sm leading-[22px] inline-block max-w-full">
                Manage all your services here
              </div>
            </div>
            <Button
              className="h-[34px] w-[177px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#006a6a",
                border: "#006a6a solid 1px",
                borderRadius: "4px",
                "&:hover": { background: "#006a6a" },
                width: 177,
                height: 34,
              }}
            >
              Add new Service
            </Button>
          </div>
          <ServicesList />
        </section>
      </main>
    </div>
  );
};

export default Services;
