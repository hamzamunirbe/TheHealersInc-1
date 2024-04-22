import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConsumerPreferences4 = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainerClick = useCallback(() => {
    navigate("/consumer-preferences-02");
  }, [navigate]);

  const onPreferencesTileContainer1Click = useCallback(() => {
    navigate("/consumer-preferences-03");
  }, [navigate]);

  const onPreferencesTileContainer2Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-neutral-1 flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] top-[0] z-[99] sticky border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
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
        <div className="w-[260px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <TextField
            className="h-[41px] flex-1 font-web-primary-h3-primary-dm-sans font-semibold text-base text-m3-black w-auto"
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
      <section className="w-[996px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans">
        <div className="w-[756px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <div className="flex flex-col items-start justify-start gap-[24px] mq750:hidden">
              <div
                className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-neutral-1 flex flex-col items-start justify-start py-[34px] px-[57px] gap-[16px] cursor-pointer"
                onClick={onPreferencesTileContainerClick}
              >
                <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                  <img
                    className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/preferences-icons1.svg"
                  />
                </div>
                <b className="relative leading-[28px] inline-block min-w-[66px]">
                  Gender
                </b>
              </div>
              <div
                className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-neutral-1 flex flex-col items-start justify-start py-[34px] px-[34.5px] gap-[16px] cursor-pointer"
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
              <div className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-neutral-1 flex flex-col items-start justify-start py-[34px] px-[23px] gap-[16px]">
                <div className="flex flex-row items-start justify-start py-0 px-[37px]">
                  <img
                    className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/preferences-icons-2.svg"
                  />
                </div>
                <b className="relative leading-[28px]">Physical Profile</b>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_236px)] text-left text-13xl text-gray-800 mq750:gap-[16px] mq750:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                  What would you like to focus on ?
                </h1>
                <div className="relative text-base leading-[24px] inline-block max-w-full">
                  This will help us create your personalized experience.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[59px] pl-0 box-border gap-[8px] min-h-[232px] text-base mq1050:pr-[29px] mq1050:box-border">
                <Button
                  className="h-28 w-[183px]"
                  endIcon={
                    <img width="24px" height="24px" src="/image-98.png" />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#18181b",
                    fontSize: "16",
                    background: "#f4f1fc",
                    borderRadius: "8px",
                    "&:hover": { background: "#f4f1fc" },
                    width: 183,
                    height: 112,
                  }}
                >
                  Mental Health
                </Button>
                <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-6 px-10 gap-[16px] whitespace-nowrap">
                  <img
                    className="w-6 h-6 relative object-contain"
                    alt=""
                    src="/image-98-1@2x.png"
                  />
                  <div className="relative leading-[24px] inline-block min-w-[127px]">
                    Holistic Medicine
                  </div>
                </div>
                <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-6 px-10 gap-[16px] whitespace-nowrap">
                  <img
                    className="w-6 h-6 relative object-contain"
                    alt=""
                    src="/image-98-2@2x.png"
                  />
                  <div className="relative leading-[24px]">
                    Physical Wellness
                  </div>
                </div>
                <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-6 px-10 gap-[16px] whitespace-nowrap">
                  <img
                    className="w-6 h-6 relative object-contain"
                    alt=""
                    src="/image-98-3@2x.png"
                  />
                  <div className="relative leading-[24px]">{`Therapy & Counseling`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-neutral-1 mq450:flex-wrap">
            <div
              className="rounded-2xl bg-royalblue flex flex-col items-end justify-start pt-2.5 px-2.5 pb-[34px] gap-[16px] cursor-pointer"
              onClick={onPreferencesTileContainer2Click}
            >
              <div className="w-[110px] flex flex-col items-end justify-start gap-[10px]">
                <div className="w-3.5 h-3.5 relative rounded-[50%] bg-neutral-1" />
                <div className="self-stretch flex flex-row items-start justify-start">
                  <img
                    className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/preferences-icons-31.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-end py-0 px-[13px]">
                <b className="w-[134px] relative leading-[28px] inline-block">
                  Wellness Goals
                </b>
              </div>
            </div>
            <Button
              className="h-[52px] w-[209px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#f28500",
                border: "#f28500 solid 1px",
                borderRadius: "44px",
                "&:hover": { background: "#f28500" },
                width: 209,
                height: 52,
              }}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerPreferences4;
