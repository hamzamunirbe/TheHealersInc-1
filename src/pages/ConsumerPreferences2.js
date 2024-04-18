import { useState, useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const ConsumerPreferences2 = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(new Date("2000-03-24"));
  const navigate = useNavigate();

  const onPreferencesTileContainerClick = useCallback(() => {
    navigate("/consumer-preferences-02");
  }, [navigate]);

  const onPreferencesTileContainer2Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  const onPreferencesTileContainer3Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] text-center text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans mq450:gap-[20px] mq750:gap-[40px]">
        <header className="self-stretch bg-white shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] top-[0] z-[99] sticky border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq450:gap-[88px] mq750:gap-[176px]">
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
                  <InputAdornment
                    position="start"
                    style={{ marginRight: "8px" }}
                  >
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
        <div className="w-[868px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[628px] flex flex-row items-start justify-center gap-[56px] max-w-full mq750:flex-wrap mq750:gap-[28px]">
            <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] min-w-[180px] mq750:flex-1">
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
              <div className="rounded-2xl bg-royalblue flex flex-col items-end justify-start pt-2.5 px-2.5 pb-[34px] gap-[16px] text-white">
                <div className="w-[110px] flex flex-col items-end justify-start gap-[10px]">
                  <div className="w-3.5 h-3.5 relative rounded-[50%] bg-white" />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <img
                      className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/preferences-icons-11.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end py-0 pr-[24.5px] pl-6">
                  <b className="relative leading-[28px] inline-block min-w-[111px]">
                    Date of Birth
                  </b>
                </div>
              </div>
              <div
                className="rounded-2xl bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start py-[34px] px-[23px] gap-[16px] cursor-pointer"
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
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[255px] max-w-full text-left text-13xl text-gray-800 mq450:gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  How old are you?
                </h2>
                <div className="relative text-base leading-[24px]">
                  This will help us create your personalized experience.
                </div>
              </div>
              <div className="self-stretch h-14">
                <DatePicker
                  value={datePickerDateTimePickerValue}
                  onChange={(newValue) => {
                    setDatePickerDateTimePickerValue(newValue);
                  }}
                  sx={{
                    fieldset: {
                      borderColor: "transparent",
                      borderTopWidth: 1,
                      borderRightWidth: 1,
                      borderBottomWidth: 1,
                      borderLeftWidth: 1,
                    },
                    "&:hover": {
                      fieldset: { borderColor: "transparent" },
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                    },
                    "& input::placeholder": {
                      textColor: "rgba(0, 0, 0, 0.87)",
                      fontSize: 16,
                    },
                    input: {
                      color: "rgba(0, 0, 0, 0.87)",
                      fontSize: 16,
                      textAlign: "left",
                      fontWeight: "400",
                    },
                    "& .MuiInputBase-root": {
                      height: 56,
                      gap: "8px",
                      flexDirection: { flexDirection: "row" },
                    },
                  }}
                  slotProps={{
                    textField: {
                      size: "medium",
                      fullWidth: true,
                      required: false,
                      autoFocus: false,
                      error: false,
                    },
                    openPickerIcon: {
                      component: () => (
                        <img
                          width="24px"
                          height="24px"
                          src="/calendartodayfilled.svg"
                        />
                      ),
                    },
                  }}
                  label="Date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ConsumerPreferences2;
