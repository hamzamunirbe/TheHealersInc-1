import { useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AppointmentCard2 from "./AppointmentCard2";

const Frame = () => {
  const [dayBoxDateTimePickerValue, setDayBoxDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-[350px] max-w-full flex flex-col items-start justify-start gap-[40px] tracking-[normal] leading-[normal]">
        <AppointmentCard2 />
        <section className="self-stretch rounded-xl bg-m3-sys-light-on-primary flex flex-col items-end justify-center py-[22px] px-[23px] gap-[16px] text-left text-xl text-gray-900 font-web-secondary-underline-subtitle2-dm-sans border-[1px] border-solid border-silver-200">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch h-6">
              <DatePicker
                value={dayBoxDateTimePickerValue}
                onChange={(newValue) => {
                  setDayBoxDateTimePickerValue(newValue);
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
                    textColor: "#434343",
                    fontSize: 16,
                  },
                  input: {
                    color: "#434343",
                    fontSize: 16,
                    textAlign: "left",
                    fontWeight: "600",
                  },
                  "& .MuiInputBase-root": {
                    height: 24,
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
                    placeholder: "Feb 23, 2024",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-m3-sys-light-on-primary flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[0px] [row-gap:20px]">
              <div className="w-[254px] flex flex-row items-start justify-center gap-[8px]">
                <div className="flex flex-row items-start justify-center py-2 px-0">
                  <div className="h-3 w-3 relative rounded-[50%] bg-vendor-colors-primary" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit overflow-hidden text-ellipsis whitespace-nowrap">
                    Nathan Thompson
                  </h3>
                  <div className="self-stretch relative text-base leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Yoga
                  </div>
                </div>
              </div>
              <img
                className="h-12 w-12 relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-202@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-sm text-neutral-9-200">
              <div className="w-[165px] flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearclock-1.svg"
                />
                <div className="flex-1 relative leading-[22px] inline-block min-w-[57px] whitespace-nowrap">
                  12:30 PM
                </div>
                <div className="relative leading-[22px] inline-block min-w-[14px]">{`to `}</div>
                <div className="flex-1 relative leading-[22px] inline-block min-w-[60px] whitespace-nowrap">
                  01:00 PM
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px] text-m3-ref-neutral-neutral30">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icons-1.svg"
                />
                <div className="relative leading-[22px] inline-block min-w-[42px]">
                  Online
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <Button
              className="flex-1 relative"
              disableElevation={true}
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Accept
            </Button>
            <img
              className="self-stretch w-0 relative max-h-full object-contain min-h-[20px]"
              loading="lazy"
              alt=""
              src="/line-7.svg"
            />
            <Button
              className="flex-1 relative"
              disableElevation={true}
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Reject
            </Button>
            <img
              className="self-stretch w-0 relative max-h-full object-contain min-h-[20px]"
              loading="lazy"
              alt=""
              src="/line-8.svg"
            />
            <Button
              className="flex-1 relative"
              disableElevation={true}
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Chat Now
            </Button>
          </div>
        </section>
        <section className="self-stretch rounded-xl bg-m3-sys-light-on-primary flex flex-col items-end justify-center py-[22px] px-[23px] text-left text-base text-neutral-9-200 font-web-secondary-underline-subtitle2-dm-sans border-[1px] border-solid border-silver-200">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
              <div className="w-[217px] relative leading-[24px] font-semibold flex items-center">
                Feb 23, 2024
              </div>
              <div className="rounded-81xl bg-polar-green-6 overflow-hidden flex flex-row items-center justify-start p-1 text-center text-xs text-m3-sys-light-on-primary font-components-helper-text">
                <div className="rounded-81xl bg-success-dark hidden flex-col items-center justify-center relative">
                  <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-m3-sys-light-on-primary hidden z-[0]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                      <div className="h-2 w-2 relative rounded-81xl" />
                    </div>
                  </div>
                  <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] tracking-[0.4px] leading-[166%] inline-block z-[1]">
                    OP
                  </div>
                  <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                </div>
                <div className="flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi">
                  <div className="relative tracking-[0.16px] leading-[18px] inline-block min-w-[65px]">
                    Completed
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                  alt=""
                  src="/cancelfilled.svg"
                />
              </div>
            </div>
            <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-m3-sys-light-on-primary flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[0px] [row-gap:20px] text-xl text-gray-900">
              <div className="w-[254px] flex flex-row items-start justify-center gap-[8px]">
                <div className="flex flex-row items-start justify-center py-2 px-0">
                  <div className="h-3 w-3 relative rounded-[50%] bg-vendor-colors-primary" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit overflow-hidden text-ellipsis whitespace-nowrap">
                    Nathan Thompson
                  </h3>
                  <div className="self-stretch relative text-base leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Yoga
                  </div>
                </div>
              </div>
              <img
                className="h-12 w-12 relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-202@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-sm">
              <div className="w-[165px] flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="h-4 w-4 relative"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearclock-1.svg"
                />
                <div className="flex-1 relative leading-[22px] inline-block min-w-[57px] whitespace-nowrap">
                  12:30 PM
                </div>
                <div className="relative leading-[22px] inline-block min-w-[14px]">{`to `}</div>
                <div className="flex-1 relative leading-[22px] inline-block min-w-[60px] whitespace-nowrap">
                  01:00 PM
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[4px] text-m3-ref-neutral-neutral30">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icons-1.svg"
                />
                <div className="relative leading-[22px] inline-block min-w-[42px]">
                  Online
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LocalizationProvider>
  );
};

export default Frame;
