import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import CalendarInputArea from "./CalendarInputArea";
import TimeRows from "./TimeRows";

const ContentContainer = () => {
  return (
    <section className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-[calc(100%_-_364px)] lg:pt-9 lg:box-border mq1050:max-w-full mq750:pt-[23px] mq750:box-border">
      <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[56px] max-w-full mq750:gap-[28px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[444px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <h1 className="m-0 relative text-13xl leading-[48px] font-bold font-web-secondary-underline-subtitle2-dm-sans text-m3-black text-left mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
              Update Schedule
            </h1>
            <div className="self-stretch relative text-sm leading-[22px] font-web-secondary-underline-subtitle2-dm-sans text-m3-black text-left">
              You can add schedule upto 2 weeks which will be renewed after your
              confirmation at the end of the current schedule.
            </div>
          </div>
        </div>
        <CalendarInputArea />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-13xl flex flex-row items-center justify-center gap-[24px] mq1050:flex-wrap">
            <div className="flex-[0.6375] rounded-13xl bg-consumer-colors-complemantary flex flex-col items-center justify-center py-2 px-[32.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-m3-sys-light-on-primary text-center inline-block min-w-[51px]">
                Sunday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-m3-sys-light-on-primary text-center inline-block min-w-[33px]">{`Feb 1 `}</div>
            </div>
            <div className="flex-[0.6875] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[30.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[55px]">
                Monday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[37px]">
                Feb 2
              </div>
            </div>
            <div className="flex-[0.7125] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[29.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[57px]">
                Tuesday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[37px]">
                Feb 3
              </div>
            </div>
            <div className="flex-1 rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[18px] box-border min-w-[114px] max-w-[116px]">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[80px]">
                Wednesday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[38px]">
                Feb 4
              </div>
            </div>
            <div className="flex-[0.8] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[26px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[64px]">
                Thursday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[37px]">
                Feb 5
              </div>
            </div>
            <div className="flex-[0.5375] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[36.5px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[43px]">
                Friday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[37px]">
                Feb 6
              </div>
            </div>
            <div className="flex-[0.775] rounded-13xl bg-highlight-lightest flex flex-col items-center justify-center py-2 px-[27px] box-border min-w-[114px] max-w-[116px] mq450:flex-1">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[62px]">
                Saturday
              </div>
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-center inline-block min-w-[36px]">
                Feb 7
              </div>
            </div>
          </div>
        </div>
        <footer className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="relative text-base leading-[24px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-m3-black text-left">
              Availability hours
            </div>
            <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/add-circle-outline.svg"
              />
            </div>
          </div>
          <TimeRows
            timeFormat="1"
            removeCircleOutline="/remove-circle-outline.svg"
          />
          <div className="self-stretch shadow-[0px_-1px_0px_#dedede_inset] bg-neutral-2 flex flex-row flex-wrap items-start justify-start p-6 box-border gap-[38px] max-w-full mq750:gap-[19px]">
            <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
              <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/radio-button-checked.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[214px] max-w-full">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
                <div className="relative text-xs leading-[18px] font-web-secondary-underline-subtitle2-dm-sans text-neutral-7 text-left inline-block min-w-[58px]">
                  Start Time
                </div>
                <FormControl
                  className="self-stretch h-6 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-7"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "100%",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#8c8c8c",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "DM Sans",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/watch-later-2.svg"
                        style={{}}
                      />
                    )}
                  >
                    <MenuItem>09:00 AM</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-7" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                  Helper text
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[214px] max-w-full">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
                <div className="relative text-xs leading-[18px] font-web-secondary-underline-subtitle2-dm-sans text-neutral-7 text-left inline-block min-w-[52px]">
                  End Time
                </div>
                <FormControl
                  className="self-stretch h-6 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-7"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "100%",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#8c8c8c",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "DM Sans",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/watch-later-3.svg"
                        style={{}}
                      />
                    )}
                  >
                    <MenuItem>09:30 AM</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-neutral-7" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-disabled text-left">
                  Helper text
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
              <div className="rounded bg-polar-green-2 flex flex-row items-start justify-start py-1.5 px-2 gap-[8px]">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-polar-green-7 text-center inline-block min-w-[51px]">
                    Booked
                  </div>
                </div>
                <div className="rounded bg-cyan-1 flex flex-row items-start justify-start py-px px-2">
                  <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-sunset-orange-6 text-center inline-block min-w-[27px]">
                    OTF
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_-1px_0px_#dedede_inset] bg-neutral-2 flex flex-row flex-wrap items-start justify-start p-6 box-border gap-[38px] max-w-full mq750:gap-[19px]">
            <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
              <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/radio-button-checked.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[231px] max-w-full">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
                <div className="relative text-xs leading-[18px] font-web-secondary-underline-subtitle2-dm-sans text-neutral-7 text-left inline-block min-w-[58px]">
                  Start Time
                </div>
                <FormControl
                  className="self-stretch h-6 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-7"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "100%",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#8c8c8c",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "DM Sans",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/watch-later-4.svg"
                        style={{ marginRight: "-0.5px" }}
                      />
                    )}
                  >
                    <MenuItem>11:00 AM</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-7" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                  Helper text
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[231px] max-w-full">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
                <div className="relative text-xs leading-[18px] font-web-secondary-underline-subtitle2-dm-sans text-neutral-7 text-left inline-block min-w-[52px]">
                  End Time
                </div>
                <FormControl
                  className="self-stretch h-6 font-web-secondary-underline-subtitle2-dm-sans text-base text-neutral-7"
                  variant="standard"
                  sx={{
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "100%",
                    height: "24px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "24px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#8c8c8c",
                      fontSize: 16,
                      fontWeight: "Regular",
                      fontFamily: "DM Sans",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="24px"
                        height="24px"
                        src="/watch-later-5.svg"
                        style={{ marginRight: "-0.5px" }}
                      />
                    )}
                  >
                    <MenuItem>12:00 PM</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-neutral-7" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-disabled text-left">
                  Helper text
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
              <button className="cursor-pointer [border:none] py-1.5 px-2 bg-polar-green-2 rounded flex flex-row items-start justify-start hover:bg-darkseagreen">
                <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-polar-green-7 text-center inline-block min-w-[51px]">
                  Booked
                </div>
              </button>
            </div>
          </div>
          <TimeRows
            timeFormat="2"
            removeCircleOutline="/remove-circle-outline-1.svg"
            propMinWidth="11px"
          />
        </footer>
        <div className="w-[354px] h-[60px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[14px] max-w-full">
          <Button
            className="self-stretch flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "rgba(0, 0, 0, 0.85)",
              fontSize: "18",
              background: "#fff",
              border: "#d9d9d9 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#fff" },
            }}
          >
            Cancel
          </Button>
          <Button
            className="self-stretch flex-[0.6667] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#006a6a",
              border: "#006a6a solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#006a6a" },
            }}
          >
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContentContainer;
