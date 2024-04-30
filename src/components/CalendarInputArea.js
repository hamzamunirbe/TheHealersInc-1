import { useState, useMemo } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const CalendarInputArea = ({
  propColor,
  propBorderTop,
  propColor1,
  labelWidth,
  labelHeight,
  labelDisplay,
  labelMinWidth,
  contentWidth,
  contentAlignSelf,
  underlineWidth,
  underlineAlignSelf,
}) => {
  const [inputDateTimePickerValue, setInputDateTimePickerValue] =
    useState(null);
  const [inputDateTimePicker1Value, setInputDateTimePicker1Value] =
    useState(null);
  const helperTextStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-xs text-text-disabled font-components-helper-text">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
          <div className="flex-1 flex flex-row items-start justify-start min-w-[298px] max-w-full">
            <div className="h-[53px] flex-1 max-w-full">
              <DatePicker
                label="Week 1 Starting From"
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
                    placeholder: "Week 1 Starting From",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div
                className="self-stretch relative tracking-[0.4px] leading-[166%]"
                style={helperTextStyle}
              >
                Helper text
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[298px] max-w-full">
            <div className="h-[53px] flex-1 max-w-full mq450:h-auto">
              <DatePicker
                label="Week 2 Ending At"
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
                    placeholder: "Week 2 Ending At",
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
        </div>
        <div className="self-stretch flex flex-col items-end justify-start max-w-full text-center text-sm text-neutral-dark-light font-web-secondary-underline-subtitle2-dm-sans">
          <div className="w-[332px] rounded-13xl bg-whitesmoke-1200 flex flex-row items-center justify-center p-1 box-border max-w-full">
            <Button
              className="h-[38px] flex-1"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1f2024",
                fontSize: "14",
                background: "#fff",
                borderRadius: "24px",
                "&:hover": { background: "#fff" },
              }}
            >
              Week 1
            </Button>
            <img
              className="h-2.5 w-0 relative hidden z-[1]"
              alt=""
              src="/divider3.svg"
            />
            <div className="rounded-xl flex flex-row items-center justify-center py-2 px-14">
              <div className="relative leading-[22px] font-semibold inline-block min-w-[50px]">
                Week 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CalendarInputArea;
