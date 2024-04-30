import { useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ModalOTFBooking = () => {
  const [textFieldDateTimePickerValue, setTextFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-[692px] rounded-lg bg-m3-sys-light-on-primary max-w-full flex flex-col items-end justify-start py-8 px-10 box-border gap-[24px] tracking-[normal] leading-[normal] text-left text-xs text-text-secondary font-web-secondary-underline-subtitle2-dm-sans">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-xl text-neutral-9-200">
          <div className="w-[327px] flex flex-col items-start justify-start max-w-[calc(100%_-_44px)]">
            <h2 className="m-0 relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
              Send Booking Invite
            </h2>
            <div className="self-stretch relative text-sm leading-[22px]">
              Create an ‘On The Fly’ booking according to mutual discussion
              between you and the customer.
            </div>
          </div>
          <div className="bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/highlight-off.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full font-components-helper-text">
          <FormControl
            className="h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-9-200 max-w-full"
            variant="standard"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "612px",
              height: "53px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "53px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "53px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary">Service</InputLabel>
            <Select
              color="primary"
              label="Service"
              disableUnderline
              displayEmpty
            >
              <MenuItem value="Yoga">Yoga</MenuItem>
              <MenuItem value="Meditation">Meditation</MenuItem>
              <MenuItem value="Trauma Exercise">Trauma Exercise</MenuItem>
              <MenuItem value="Sweat Train">Sweat Train</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="self-stretch h-[53px]">
          <DatePicker
            value={textFieldDateTimePickerValue}
            onChange={(newValue) => {
              setTextFieldDateTimePickerValue(newValue);
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
                fontWeight: "400",
              },
              "& .MuiInputBase-root": {
                height: 53,
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
                component: () => (
                  <img width="24px" height="24px" src="/today.svg" />
                ),
              },
            }}
            label="Date"
          />
        </div>
        <div className="self-stretch rounded-13xl bg-whitesmoke-1200 flex flex-row items-start justify-start p-1 [row-gap:20px] text-center text-sm text-neutral-dark-light mq600:flex-wrap">
          <Button
            className="h-[38px] flex-[0.3212] min-w-[196px] mq450:pl-5 mq450:pr-5 mq450:box-border mq600:flex-1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#1f2024",
              fontSize: "14",
              background: "#fff",
              borderRadius: "24px",
              "&:hover": { background: "#fff" },
              height: 38,
            }}
          >
            Your Schedule
          </Button>
          <img
            className="h-2.5 w-0 relative hidden z-[1]"
            alt=""
            src="/divider3.svg"
          />
          <div className="flex-1 rounded-xl flex flex-row items-start justify-center py-2 px-0 box-border min-w-[196px] mq600:flex-1">
            <div className="relative leading-[22px] font-semibold inline-block min-w-[71px]">
              On The Fly
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm text-neutral-9-200">
          <div className="self-stretch flex flex-row items-center justify-start py-1 px-0">
            <div className="w-32 relative leading-[12px] font-semibold flex items-center shrink-0">
              Availability
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[297px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border mq600:pr-[148px] mq600:box-border">
            <button className="cursor-pointer py-0.5 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-7">
              <div className="rounded-81xl bg-components-avatar-fill hidden flex-col items-center justify-center relative">
                <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-m3-sys-light-on-primary hidden z-[0]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                    <div className="h-2 w-2 relative rounded-81xl" />
                  </div>
                </div>
                <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-m3-sys-light-on-primary text-center inline-block z-[1]">
                  OP
                </div>
                <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
              </div>
              <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                <b className="relative text-xs leading-[18px] uppercase font-web-secondary-underline-subtitle2-dm-sans text-neutral-9-200 text-left whitespace-nowrap">
                  10:00 AM to 01:00 PM
                </b>
              </div>
              <img
                className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
                src="/cancelfilled1.svg"
              />
            </button>
            <button className="cursor-pointer py-0.5 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-7">
              <div className="rounded-81xl bg-components-avatar-fill hidden flex-col items-center justify-center relative">
                <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-m3-sys-light-on-primary hidden z-[0]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                    <div className="h-2 w-2 relative rounded-81xl" />
                  </div>
                </div>
                <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-m3-sys-light-on-primary text-center inline-block z-[1]">
                  OP
                </div>
                <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
              </div>
              <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                <b className="relative text-xs leading-[18px] uppercase font-web-secondary-underline-subtitle2-dm-sans text-neutral-9-200 text-left whitespace-nowrap">
                  02:00 AM to 05:00 PM
                </b>
              </div>
              <img
                className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
                src="/cancelfilled1.svg"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] font-components-helper-text">
          <div className="flex-1 flex flex-row items-start justify-start min-w-[191px]">
            <FormControl
              className="h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-9-200"
              variant="standard"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "294px",
                height: "53px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "53px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "53px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "53px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "53px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary">Start Time</InputLabel>
              <Select
                color="primary"
                label="Start Time"
                disableUnderline
                displayEmpty
              >
                <MenuItem value="12:00 PM">12:00 PM</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                Helper text
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start min-w-[191px]">
            <FormControl
              className="h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-9-200"
              variant="standard"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "294px",
                height: "53px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "53px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "53px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "53px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "53px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary">End Time</InputLabel>
              <Select
                color="primary"
                label="End Time"
                disableUnderline
                displayEmpty
              >
                <MenuItem value="02:00 PM">02:00 PM</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                Helper text
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full font-components-helper-text">
          <FormControl
            className="h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-9-200 max-w-full"
            variant="standard"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "612px",
              height: "53px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "53px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "53px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary">Session Type</InputLabel>
            <Select
              color="primary"
              label="Session Type"
              disableUnderline
              displayEmpty
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="On-site">On-site</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <footer className="w-[242px] h-[34px] flex flex-row items-start justify-start gap-[16px]">
          <Button
            className="self-stretch flex-[0.6133] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#262626",
              fontSize: "14",
              background: "#fff",
              border: "#f5f5f5 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#fff" },
            }}
          >
            Cancel
          </Button>
          <Button
            className="self-stretch flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#006a6a",
              border: "#006a6a solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#006a6a" },
            }}
          >
            Send Invite
          </Button>
        </footer>
      </div>
    </LocalizationProvider>
  );
};

export default ModalOTFBooking;
