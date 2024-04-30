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
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ConsumerProfile = () => {
  const [inputDateTimePickerValue, setInputDateTimePickerValue] =
    useState(null);

  const onSidebarTileContainer1Click = useCallback(() => {
    // Please sync "Consumer - Schedule - Upcoming" to the project
  }, []);

  const onSidebarTileContainer2Click = useCallback(() => {
    // Please sync "Consumer - Inbox" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] tracking-[normal] leading-[normal] mq750:gap-[20px]">
        <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-m3-sys-light-on-primary flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] sticky top-[0] z-[99] border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
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
        <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <section className="w-[1200px] flex flex-row items-start justify-center gap-[32px] max-w-full text-left text-5xl text-darkslategray-200 font-web-secondary-underline-subtitle2-dm-sans mq1050:flex-wrap mq750:gap-[16px]">
            <div className="w-[322px] rounded-[15px] bg-whitesmoke-200 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[53px] px-[13px] gap-[40px] min-w-[322px] max-w-full border-[2px] border-solid border-whitesmoke-700 mq1050:flex-1 mq1050:pt-[34px] mq1050:pb-[34px] mq1050:box-border mq450:gap-[20px] mq450:pt-[22px] mq450:pb-[22px] mq450:box-border">
              <div className="self-stretch h-80 flex flex-row items-start justify-start py-0 pr-[17px] pl-[15px] box-border">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px] mq1050:flex-1">
                  <div className="self-stretch flex-1 overflow-hidden flex flex-row items-end justify-center py-3.5 px-5 relative">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <img
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/mask-shape@2x.png"
                      />
                      <img
                        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                    </div>
                    <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center z-[2]">
                      <img
                        className="w-8 h-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/photo-camera.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[57px] pl-[57.5px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <h3 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
                      John Adams
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-[290px] flex flex-col items-center justify-center gap-[8px] text-base text-neutral-7">
                <div className="self-stretch rounded-13xl bg-darkorange flex flex-row items-start justify-between py-4 pr-[163px] pl-6 gap-[20px] text-m3-sys-light-on-primary mq450:pr-5 mq450:box-border">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/person-outline.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[49px]">
                    Profile
                  </div>
                </div>
                <div
                  className="self-stretch rounded-13xl flex flex-row items-start justify-between py-4 pr-[140px] pl-6 gap-[20px] cursor-pointer mq450:pr-5 mq450:box-border"
                  onClick={onSidebarTileContainer1Click}
                >
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/event-note.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[72px]">
                    Schedule
                  </div>
                </div>
                <div
                  className="self-stretch rounded-13xl flex flex-row items-start justify-between py-4 pr-[169px] pl-6 gap-[20px] cursor-pointer mq450:pr-5 mq450:box-border"
                  onClick={onSidebarTileContainer2Click}
                >
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/forum.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[43px]">
                    Inbox
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center pt-2 px-6 pb-[7.5px]">
                  <img
                    className="h-[0.5px] flex-1 relative max-w-full overflow-hidden"
                    loading="lazy"
                    alt=""
                    src="/divider2.svg"
                  />
                </div>
                <div className="self-stretch rounded-13xl flex flex-row items-start justify-between py-4 pr-[148px] pl-6 gap-[20px] mq450:pr-5 mq450:box-border">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/settings.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[64px]">
                    Settings
                  </div>
                </div>
                <div className="rounded-13xl flex flex-row items-start justify-start py-4 pr-[77px] pl-6 gap-[30px] mq450:gap-[15px] mq450:pr-5 mq450:box-border">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/help-outline.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold">
                    Help and Support
                  </div>
                </div>
                <div className="rounded-13xl flex flex-row items-start justify-start py-4 pr-[105px] pl-6 gap-[30px] mq450:gap-[15px] mq450:pr-5 mq450:box-border">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/privacy-tip.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[107px]">
                    Privacy Policy
                  </div>
                </div>
                <div className="self-stretch rounded-13xl flex flex-row items-start justify-between py-4 pr-[159px] pl-6 gap-[20px] mq450:pr-5 mq450:box-border">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/logout.svg"
                    />
                  </div>
                  <div className="relative leading-[24px] font-semibold inline-block min-w-[53px]">
                    Logout
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[551px] max-w-full mq750:min-w-full">
              <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
                <h1 className="m-0 relative text-13xl leading-[48px] font-bold font-web-secondary-underline-subtitle2-dm-sans text-m3-black text-left mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                  Account details
                </h1>
                <div className="self-stretch h-px flex flex-row items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                  <div className="h-px w-0 relative overflow-hidden shrink-0 hidden" />
                  <div className="h-px flex-1 relative box-border max-w-full border-t-[1px] border-solid border-divider" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq750:flex-wrap mq450:gap-[16px]">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[265px] max-w-full">
                    <TextField
                      className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[245px] max-w-full"
                      color="primary"
                      label="First Name"
                      defaultValue="John"
                      required={true}
                      fullWidth={true}
                      variant="standard"
                      sx={{ "& .MuiInputBase-root": { height: "53px" } }}
                    />
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                        Helper text
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[265px] max-w-full">
                    <TextField
                      className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[245px] max-w-full"
                      color="primary"
                      label="Last Name"
                      defaultValue="Adams"
                      fullWidth={true}
                      variant="standard"
                      sx={{ "& .MuiInputBase-root": { height: "53px" } }}
                    />
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                        Helper text
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq750:flex-wrap mq450:gap-[16px]">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[265px] max-w-full">
                    <TextField
                      className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[245px] max-w-full"
                      color="primary"
                      label="Email"
                      defaultValue="johnadams@gmail.com"
                      required={true}
                      fullWidth={true}
                      variant="standard"
                      type="email"
                      sx={{ "& .MuiInputBase-root": { height: "53px" } }}
                    />
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-disabled text-left">
                        Helper text
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-start gap-[32px] min-w-[265px] max-w-full mq450:gap-[16px]">
                    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                      <div className="h-[53px] flex-1 max-w-full mq450:h-auto">
                        <DatePicker
                          value={inputDateTimePickerValue}
                          onChange={(newValue) => {
                            setInputDateTimePickerValue(newValue);
                          }}
                          components={{
                            OpenPickerIcon: () => (
                              <Icon>calendar_today_sharp</Icon>
                            ),
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
                        <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                          Helper text
                        </div>
                      </div>
                    </div>
                    <Button
                      className="w-[185px] h-[52px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "18",
                        background: "#f28500",
                        border: "#f28500 solid 1px",
                        borderRadius: "32px",
                        "&:hover": { background: "#f28500" },
                        width: 185,
                        height: 52,
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default ConsumerProfile;
