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
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConsumerPreferences3 = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainerClick = useCallback(() => {
    navigate("/consumer-preferences-02");
  }, [navigate]);

  const onPreferencesTileContainer1Click = useCallback(() => {
    navigate("/consumer-preferences-03");
  }, [navigate]);

  const onPreferencesTileContainer3Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] tracking-[normal] leading-[normal] mq750:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch bg-white shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] sticky top-[0] z-[99] border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
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
        <div className="w-[260px] rounded-13xl bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[20px]">
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
      <section className="w-[1029px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans">
        <div className="w-[789px] flex flex-row items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
          <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] mq750:hidden">
            <div
              className="rounded-2xl bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start py-[34px] px-[57px] gap-[16px] cursor-pointer"
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
              className="rounded-2xl bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start py-[34px] px-[34.5px] gap-[16px] cursor-pointer"
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
            <div className="rounded-2xl bg-royalblue flex flex-col items-end justify-start pt-2.5 px-2.5 pb-[34px] gap-[16px] text-white">
              <div className="w-[110px] flex flex-col items-end justify-start gap-[10px]">
                <div className="w-3.5 h-3.5 relative rounded-[50%] bg-white" />
                <div className="self-stretch flex flex-row items-start justify-start">
                  <img
                    className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/preferences-icons-21.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-end py-0 px-[13px]">
                <b className="relative leading-[28px]">Physical Profile</b>
              </div>
            </div>
            <div
              className="self-stretch rounded-2xl bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start py-[34px] px-[23px] gap-[16px] cursor-pointer"
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
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_236px)] text-left text-base text-gray-800 mq750:gap-[16px] mq750:max-w-full">
            <div className="flex flex-col items-start justify-start gap-[16px] max-w-full text-13xl">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                Let us know your weight and height
              </h1>
              <div className="relative text-base leading-[24px] inline-block max-w-full">
                This will help us create your personalized experience.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[55px]">
                  Weight
                </div>
                <div className="w-[120px] rounded-3xl bg-neutral-light-light flex flex-row items-center justify-center p-1 box-border text-center text-xs text-neutral-dark-light font-heading-h5">
                  <Button
                    className="h-[31px] flex-1"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#f28500",
                      fontSize: "12",
                      background: "#fff",
                      borderRadius: "28px",
                      "&:hover": { background: "#fff" },
                      height: 31,
                    }}
                  >
                    kg
                  </Button>
                  <img
                    className="h-2.5 w-0 relative hidden z-[1]"
                    alt=""
                    src="/divider1.svg"
                  />
                  <div className="rounded-9xl flex flex-row items-center justify-center py-2 px-[22.5px]">
                    <b className="relative inline-block min-w-[11px]">lb</b>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-sm bg-white shadow-[0px_0px_0px_2px_rgba(24,_144,_255,_0.2)] box-border overflow-hidden flex flex-row flex-wrap items-start justify-start min-w-[250px] max-w-full [row-gap:20px] border-[1px] border-solid border-primary-6 mq750:overflow-x-auto">
                <TextField
                  className="[border:none] bg-[transparent] h-10 flex-1 font-h5-medium text-base text-gray-900 min-w-[300px] max-w-full"
                  variant="outlined"
                  placeholder="55"
                  type="number"
                  sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                />
                <div className="bg-white flex flex-row items-start justify-start">
                  <div className="bg-conditional-divider flex flex-row items-center justify-start py-0 px-0">
                    <img
                      className="h-10 w-px relative"
                      loading="lazy"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center py-[6.5px] px-[7.5px]">
                      <img
                        className="h-[7px] w-[7px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/up.svg"
                      />
                    </div>
                    <div className="h-0 flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border">
                      <img
                        className="w-[22px] h-px relative"
                        alt=""
                        src="/line-1.svg"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center py-[6.5px] px-[7.5px]">
                      <img
                        className="h-[7px] w-[7px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[51px]">
                  Height
                </div>
                <div className="w-[120px] rounded-3xl bg-neutral-light-light flex flex-row items-center justify-center p-1 box-border text-center text-xs text-neutral-dark-light font-heading-h5">
                  <Button
                    className="h-[31px] flex-1"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#f28500",
                      fontSize: "12",
                      background: "#fff",
                      borderRadius: "28px",
                      "&:hover": { background: "#fff" },
                      height: 31,
                    }}
                  >
                    in
                  </Button>
                  <img
                    className="h-2.5 w-0 relative hidden z-[1]"
                    alt=""
                    src="/divider1.svg"
                  />
                  <div className="rounded-9xl flex flex-row items-center justify-center py-2 px-[19px]">
                    <b className="relative inline-block min-w-[18px]">cm</b>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-sm bg-white shadow-[0px_0px_0px_2px_rgba(24,_144,_255,_0.2)] box-border overflow-hidden flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] border-[1px] border-solid border-primary-6 mq750:overflow-x-auto">
                <TextField
                  className="[border:none] bg-[transparent] flex-1 font-h5-medium text-base text-gray-900 min-w-[520px] max-w-full"
                  variant="outlined"
                  placeholder="160"
                  type="number"
                  sx={{ "& .MuiInputBase-root": { height: "40px" } }}
                />
                <div className="bg-white flex flex-row items-start justify-start">
                  <div className="bg-conditional-divider flex flex-row items-center justify-start py-0 px-0">
                    <img
                      className="h-10 w-px relative"
                      alt=""
                      src="/line.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-center py-[6.5px] px-[7.5px]">
                      <img
                        className="h-[7px] w-[7px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/up.svg"
                      />
                    </div>
                    <div className="h-0 flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border">
                      <img
                        className="w-[22px] h-px relative"
                        alt=""
                        src="/line-1.svg"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-center py-[6.5px] px-[7.5px]">
                      <img
                        className="h-[7px] w-[7px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerPreferences3;
