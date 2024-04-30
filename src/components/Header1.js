import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const Header = () => {
  return (
    <section className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-between py-[22px] pr-[101px] pl-[99px] max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-100 mq450:pl-5 mq450:pr-5 mq450:box-border mq800:flex-wrap mq800:pl-[49px] mq800:pr-[50px] mq800:box-border">
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
      <div className="w-[339px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-m3-sys-light-on-primary overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border gap-[20px] max-w-full mq450:flex-wrap">
        <TextField
          className="[border:none] bg-[transparent] h-[41px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-sm text-lightslategray min-w-[139px]"
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
            "& .MuiInputBase-input": { paddingLeft: "11px", color: "#8f9bba" },
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
    </section>
  );
};

export default Header;
