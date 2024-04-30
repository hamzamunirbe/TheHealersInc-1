import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConsumerPreferences1 = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainer1Click = useCallback(() => {
    navigate("/consumer-preferences-03");
  }, [navigate]);

  const onPreferencesTileContainer2Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  const onPreferencesTileContainer3Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] text-center text-lg text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-m3-sys-light-on-primary flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] top-[0] z-[99] sticky border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
        <div className="w-[236px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[12.4px]">
            <img
              className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo2.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers3.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[260px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-m3-sys-light-on-primary overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <TextField
            className="h-[41px] flex-1 font-web-secondary-underline-subtitle2-dm-sans font-semibold text-base text-m3-black w-auto"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ marginRight: "8px" }}>
                  <img width="41px" height="41px" src="/avatar.png" />
                </InputAdornment>
              ),
              endAdornment: (
                <img
                  width="24px"
                  height="24px"
                  src="/keyboard-arrow-down.svg"
                />
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "67.6923076923077%",
              height: "41px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 16,
                fontWeight: "SemiBold",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>John Adams</MenuItem>
          </TextField>
        </div>
      </header>
      <div className="w-[963px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-row items-start justify-center gap-[56px] max-w-full mq750:flex-wrap mq750:gap-[28px]">
          <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] min-w-[180px] mq750:flex-1">
            <div className="self-stretch rounded-2xl bg-consumer-colors-complemantary flex flex-col items-start justify-start pt-2.5 pb-[34px] pr-2.5 pl-[57px] gap-[16px] text-m3-sys-light-on-primary">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
                  <div className="w-3.5 h-3.5 relative rounded-[50%] bg-m3-sys-light-on-primary" />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <img
                      className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/preferences-icons.svg"
                    />
                  </div>
                </div>
              </div>
              <b className="relative leading-[28px] inline-block min-w-[66px]">
                Gender
              </b>
            </div>
            <div
              className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start py-[34px] px-[34.5px] gap-[16px] cursor-pointer"
              onClick={onPreferencesTileContainer1Click}
            >
              <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-[25.5px]">
                <img
                  className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/preferences-icons-1.svg"
                />
              </div>
              <b className="relative leading-[28px] inline-block min-w-[111px]">
                Date of Birth
              </b>
            </div>
            <div
              className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start py-[34px] px-[23px] gap-[16px] cursor-pointer"
              onClick={onPreferencesTileContainer2Click}
            >
              <div className="flex flex-row items-start justify-start py-0 px-[37px]">
                <img
                  className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/preferences-icons-2.svg"
                />
              </div>
              <b className="relative leading-[28px]">Physical Profile</b>
            </div>
            <div
              className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start py-[34px] px-[23px] gap-[16px] cursor-pointer"
              onClick={onPreferencesTileContainer3Click}
            >
              <div className="flex flex-row items-start justify-start py-0 px-[37px]">
                <img
                  className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/preferences-icons-3.svg"
                />
              </div>
              <b className="self-stretch relative leading-[28px]">
                Wellness Goals
              </b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] min-w-[487px] max-w-full text-left text-13xl text-gray-800 mq750:flex-1 mq750:gap-[16px] mq750:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                What is your gender?
              </h1>
              <div className="relative text-base leading-[24px]">
                To provide you the best experience we need to know your gender.
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-center gap-[44px] text-base font-sf-pro-display mq450:gap-[22px]">
              <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-4 px-8 gap-[8px]">
                <img
                  className="w-16 h-16 relative object-contain"
                  loading="lazy"
                  alt=""
                  src="/image-102@2x.png"
                />
                <div className="relative leading-[24px] inline-block min-w-[35px]">
                  ‏Male
                </div>
              </div>
              <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-4 px-8 gap-[8px]">
                <img
                  className="w-16 h-16 relative object-contain"
                  alt=""
                  src="/image-102-1@2x.png"
                />
                <div className="relative leading-[24px] inline-block min-w-[53px]">
                  Female
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerPreferences1;
