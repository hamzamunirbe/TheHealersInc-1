import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const AppointmentCard2 = () => {
  const [dayBoxDateTimePickerValue, setDayBoxDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                "& input::placeholder": { textColor: "#434343", fontSize: 16 },
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
                src="/vuesaxlinearclock.svg"
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
                src="/icons.svg"
              />
              <div className="relative leading-[22px] inline-block min-w-[42px]">
                Online
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center text-center text-sm text-character-danger font-components-helper-text">
          <div className="flex flex-row items-center justify-center py-1 px-[5px]">
            <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[100px]">
              Cancel Booking
            </div>
          </div>
        </div>
      </section>
    </LocalizationProvider>
  );
};

export default AppointmentCard2;
