import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent from "./FrameComponent";

const FormContainer1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full text-left text-xs text-text-secondary font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-neutral-10">
        <h2 className="m-0 relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
          Forgot Password?
        </h2>
        <div className="self-stretch relative text-base leading-[24px]">
          <span>{`Enter 6 digit OTP sent to `}</span>
          <b>{`user@email.com and `}</b>
          <span>update your password.</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
        <div className="w-[53.3px] flex flex-row items-start justify-start">
          <div className="h-[] flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[35px] box-border min-w-[32px]">
            <div className="self-stretch w-0 relative leading-[18px] flex items-center" />
            <div className="h-[18px] flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-base text-text-primary font-components-helper-text">
              <div className="self-stretch h-[30.5px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-6 flex flex-row items-center justify-start">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden z-[1]" />
                  <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden z-[2]" />
                  <div className="h-12 w-[110px] relative leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-m3-ref-neutral-neutral20-200 hidden whitespace-nowrap z-[3]">
                    user@email.com
                  </div>
                  <div className="h-px w-6 !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0.3px] hidden flex-row items-center justify-start z-[4]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden z-[5]" />
                </div>
                <div className="absolute top-[29.5px] left-[0px] box-border w-[53.3px] h-px border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
            </div>
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="h-[53px] w-[53.3px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[35px]">
            <div className="self-stretch w-0 relative leading-[18px] flex items-center" />
            <div className="h-[18px] flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-base text-text-primary font-components-helper-text">
              <div className="self-stretch h-[30.5px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-6 flex flex-row items-center justify-start">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden z-[1]" />
                  <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden z-[2]" />
                  <div className="h-12 w-[110px] relative leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-m3-ref-neutral-neutral20-200 hidden whitespace-nowrap z-[3]">
                    user@email.com
                  </div>
                  <div className="h-px w-6 !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0.3px] hidden flex-row items-center justify-start z-[4]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden z-[5]" />
                </div>
                <div className="absolute top-[29.5px] left-[0px] box-border w-[53.3px] h-px border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
            </div>
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="h-[53px] w-[53.3px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[35px]">
            <div className="self-stretch w-0 relative leading-[18px] flex items-center" />
            <div className="h-[18px] flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-base text-text-primary font-components-helper-text">
              <div className="self-stretch h-[30.5px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-6 flex flex-row items-center justify-start">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden z-[1]" />
                  <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden z-[2]" />
                  <div className="h-12 w-[110px] relative leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-m3-ref-neutral-neutral20-200 hidden whitespace-nowrap z-[3]">
                    user@email.com
                  </div>
                  <div className="h-px w-6 !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0.3px] hidden flex-row items-center justify-start z-[4]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden z-[5]" />
                </div>
                <div className="absolute top-[29.5px] left-[0px] box-border w-[53.3px] h-px border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
            </div>
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="h-[53px] w-[53.3px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[35px]">
            <div className="self-stretch w-0 relative leading-[18px] flex items-center" />
            <div className="h-[18px] flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-base text-text-primary font-components-helper-text">
              <div className="self-stretch h-[30.5px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-6 flex flex-row items-center justify-start">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden z-[1]" />
                  <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden z-[2]" />
                  <div className="h-12 w-[110px] relative leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-m3-ref-neutral-neutral20-200 hidden whitespace-nowrap z-[3]">
                    user@email.com
                  </div>
                  <div className="h-px w-6 !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0.3px] hidden flex-row items-center justify-start z-[4]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden z-[5]" />
                </div>
                <div className="absolute top-[29.5px] left-[0px] box-border w-[53.3px] h-px border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
            </div>
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="h-[53px] w-[53.3px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[35px]">
            <div className="self-stretch w-0 relative leading-[18px] flex items-center" />
            <div className="h-[18px] flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-base text-text-primary font-components-helper-text">
              <div className="self-stretch h-[30.5px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-6 flex flex-row items-center justify-start">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden z-[1]" />
                  <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden z-[2]" />
                  <div className="h-12 w-[110px] relative leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-m3-ref-neutral-neutral20-200 hidden whitespace-nowrap z-[3]">
                    user@email.com
                  </div>
                  <div className="h-px w-6 !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0.3px] hidden flex-row items-center justify-start z-[4]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden z-[5]" />
                </div>
                <div className="absolute top-[29.5px] left-[0px] box-border w-[53.3px] h-px border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
            </div>
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="h-[53px] w-[53.3px] flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[35px]">
            <div className="self-stretch w-0 relative leading-[18px] flex items-center" />
            <div className="h-[18px] flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border text-base text-text-primary font-components-helper-text">
              <div className="self-stretch h-[30.5px] relative">
                <div className="absolute top-[0px] left-[0px] w-full h-6 flex flex-row items-center justify-start">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden z-[1]" />
                  <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden z-[2]" />
                  <div className="h-12 w-[110px] relative leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-m3-ref-neutral-neutral20-200 hidden whitespace-nowrap z-[3]">
                    user@email.com
                  </div>
                  <div className="h-px w-6 !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0.3px] hidden flex-row items-center justify-start z-[4]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden z-[5]" />
                </div>
                <div className="absolute top-[29.5px] left-[0px] box-border w-[53.3px] h-px border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
            </div>
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[8px] text-center text-m3-black">
        <div className="relative leading-[18px] inline-block min-w-[63px]">{`Re-send in: `}</div>
        <div className="flex flex-row items-start justify-start">
          <div className="relative leading-[18px] inline-block min-w-[19px]">
            00:
          </div>
          <div className="relative leading-[18px] inline-block min-w-[15px] z-[1]">
            29
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-sm">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-xs font-components-helper-text">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full mq750:h-auto"
              color="primary"
              label="New Password"
              required={true}
              fullWidth={true}
              variant="standard"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiInputBase-root": { height: "53px" } }}
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                Helper text
              </div>
            </div>
          </div>
        </div>
        <FrameComponent newPassword="Confirm Password" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-grey-600">
          <div className="self-stretch h-[19px] relative leading-[24px] font-semibold inline-block shrink-0">
            Very Weak
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[105px] max-w-[114px]">
              <div className="h-1 flex-1 relative bg-grey-grey-300" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[105px] max-w-[114px]">
              <div className="h-1 flex-1 relative bg-grey-grey-300" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[105px] max-w-[114px]">
              <div className="h-1 flex-1 relative bg-grey-grey-300" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[105px] max-w-[114px]">
              <div className="h-1 flex-1 relative bg-grey-grey-300" />
            </div>
          </div>
        </div>
        <div className="relative leading-[22px] text-m3-black">
          Your Password must contain:
        </div>
        <div className="flex flex-row items-start justify-start gap-[42px] text-neutral-10 mq450:gap-[21px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/error-outline.svg"
              />
            </div>
            <div className="relative leading-[22px] inline-block min-w-[92px]">
              8+ Characters
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/error-outline.svg"
              />
            </div>
            <div className="relative leading-[22px] inline-block min-w-[79px]">
              1 Uppercase
            </div>
          </div>
        </div>
        <div className="w-[306px] flex flex-row items-start justify-between pt-0 px-0 pb-[18px] box-border gap-[20px] text-neutral-10">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/error-outline.svg"
              />
            </div>
            <div className="relative leading-[22px] inline-block min-w-[63px]">
              1 Numeric
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/error-outline.svg"
              />
            </div>
            <div className="relative leading-[22px] inline-block min-w-[124px]">
              1 Special Character
            </div>
          </div>
        </div>
        <div className="self-stretch h-[76px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
          <Button
            className="self-stretch flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "rgba(0, 0, 0, 0.25)",
              fontSize: "18",
              background: "#f5f5f5",
              border: "#d9d9d9 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#f5f5f5" },
            }}
          >
            Update Password
          </Button>
        </div>
        <Button
          className="w-[152px] h-[42px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
          startIcon={<img width="16px" height="16px" src="/wrapper-1.png" />}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#434343",
            fontSize: "14",
            background: "#fff",
            border: "#d9d9d9 solid 1px",
            borderRadius: "4px",
            "&:hover": { background: "#fff" },
            width: 152,
            height: 42,
          }}
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default FormContainer1;
