import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const PractitionerProfileDetailing1 = () => {
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[262px] box-border gap-[32px] tracking-[normal] leading-[normal] text-left text-3xs text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[16px]">
      <img
        className="w-[1370.2px] h-[1379.9px] !m-[0] absolute top-[-200.1px] right-[-454.2px] object-contain"
        alt=""
        src="/col@2x.png"
      />
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-between py-[22px] pr-[65px] pl-[63px] sticky top-[0] z-[99] max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-100 mq750:pl-[31px] mq750:pr-8 mq750:box-border">
        <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
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
        <div className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[20px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-[41px] w-[214px] font-web-secondary-underline-subtitle2-dm-sans text-sm text-lightslategray"
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
                borderRadius: "49px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "11px",
                color: "#8f9bba",
              },
              width: "214px",
            }}
          />
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none2.svg"
            />
          </div>
          <img
            className="h-[41px] w-[41px] relative min-h-[41px]"
            loading="lazy"
            alt=""
            src="/avatar.svg"
          />
        </div>
      </header>
      <div className="w-0 relative tracking-[0.05em] uppercase font-semibold font-heading-h5 text-center hidden z-[2]" />
      <div className="flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-29xl mq750:pl-8 mq750:pr-8 mq750:box-border">
        <h1 className="m-0 relative text-inherit leading-[64px] font-bold font-inherit z-[1] mq450:text-10xl mq450:leading-[38px] mq750:text-19xl mq750:leading-[51px]">
          Tell us more about yourself.
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs">
        <div className="w-[700px] shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start p-6 box-border gap-[24px] max-w-full z-[1] mq675:pt-5 mq675:pb-5 mq675:box-border">
          <div className="self-stretch flex flex-row items-start justify-start mix-blend-normal max-w-full">
            <div className="h-[11px] flex-1 relative max-w-full">
              <div className="absolute top-[0px] left-[68.9px] rounded-lg bg-whitesmoke-1200 w-[583.1px] h-[11px] mix-blend-normal" />
              <div className="absolute top-[0px] left-[0px] rounded-lg bg-consumer-colors-complemantary w-[235.2px] h-[11px] mix-blend-normal z-[1]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-13xl">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[349px] max-w-full mq675:min-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
                Add Description
              </h1>
              <div className="self-stretch relative text-sm leading-[22px]">
                Tell us more about yourself.
              </div>
            </div>
            <div className="rounded overflow-hidden flex flex-row items-start justify-start py-1 px-4 gap-[10px]">
              <div className="bg-hitbox-1000 overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/wrapper1@2x.png"
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="relative leading-[24px] font-semibold inline-block min-w-[105px]">
              Session Type:
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
              <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[204px]">
                <input
                  className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0 min-h-[24px]"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[24px]">Online</div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[204px] mq450:flex-wrap">
                <input
                  className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                  type="checkbox"
                />
                <div className="flex-1 relative leading-[24px] inline-block min-w-[45px]">
                  On-site
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[47px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-text-secondary font-components-helper-text">
            <TextField
              className="[border:none] bg-[transparent] h-[57px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
              color="primary"
              label="Address"
              fullWidth={true}
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "57px" } }}
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-text-secondary">
            <TextField
              className="flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 max-w-full"
              color="primary"
              rows={5}
              label="Description"
              variant="standard"
              multiline
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[18px]">
                You can add tages between 3 to 8.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[32px] max-w-full mq675:gap-[16px]">
            <IconButton
              className="h-[50px] w-[50px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)]"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
              color="primary"
            >
              <Icon>arrow_back_ios_sharp</Icon>
            </IconButton>
            <Button
              className="h-[60px] flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] min-w-[370px] max-w-full mq675:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
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

export default PractitionerProfileDetailing1;
