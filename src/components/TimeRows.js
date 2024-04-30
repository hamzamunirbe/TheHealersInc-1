import { useState, useMemo } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TimeRows = ({ timeFormat, removeCircleOutline, propMinWidth }) => {
  const [inputDateTimePickerValue, setInputDateTimePickerValue] =
    useState(null);
  const [inputDateTimePicker1Value, setInputDateTimePicker1Value] =
    useState(null);
  const timeFormatStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch shadow-[0px_-1px_0px_#dedede_inset] bg-m3-sys-light-on-primary flex flex-row flex-wrap items-start justify-start p-6 box-border gap-[38px] max-w-full text-left text-xs text-text-secondary font-components-helper-text mq750:gap-[19px]">
        <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 text-lg text-character-title-85-700 font-web-secondary-underline-subtitle2-dm-sans">
          <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[4.5px]">
            <b
              className="relative leading-[28px] inline-block min-w-[7px]"
              style={timeFormatStyle}
            >
              {timeFormat}
            </b>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start min-w-[245px] max-w-full">
          <div className="h-[53px] flex-1 max-w-full">
            <TimePicker
              value={inputDateTimePickerValue}
              onChange={(newValue) => {
                setInputDateTimePickerValue(newValue);
              }}
              sx={{}}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: false,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "primary",
                },
                openPickerIcon: {
                  component: () => <></>,
                },
              }}
            />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start min-w-[245px] max-w-full">
          <div className="h-[53px] flex-1 max-w-full">
            <TimePicker
              value={inputDateTimePicker1Value}
              onChange={(newValue) => {
                setInputDateTimePicker1Value(newValue);
              }}
              sx={{}}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: false,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "primary",
                },
                openPickerIcon: {
                  component: () => <></>,
                },
              }}
            />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0">
          <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={removeCircleOutline}
            />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TimeRows;
