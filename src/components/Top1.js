import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const Top1 = () => {
  return (
    <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-between py-[22px] pr-[65px] pl-[63px] sticky top-[0] z-[99] max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-100 mq750:pl-[31px] mq750:pr-8 mq750:box-border">
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
            "& .MuiInputBase-input": { paddingLeft: "11px", color: "#8f9bba" },
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
  );
};

export default Top1;
