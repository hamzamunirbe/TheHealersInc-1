import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const ConsumerResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[197px] tracking-[normal] leading-[normal] text-left text-xs text-text-secondary font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[98px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq450:gap-[49px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="h-2 w-2 relative overflow-hidden shrink-0 hidden z-[0]" />
      <div className="w-[400px] flex flex-col items-start justify-start pt-[62.5px] px-0 pb-0 box-border min-w-[400px] max-w-full mq1050:pt-[41px] mq1050:box-border mq750:min-w-full mq450:pt-[27px] mq450:box-border mq1125:flex-1">
        <div className="self-stretch flex flex-col items-end justify-start gap-[32.3px] max-w-full mq450:gap-[16px]">
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
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
            <div className="w-10 flex flex-row items-start justify-start">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] min-w-[24px]">
                <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
                <div className="self-stretch flex flex-row items-start justify-start text-base text-m3-ref-neutral-neutral20-200">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden" />
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 relative min-w-[24px] p-0"
                    color="primary"
                    placeholder="1"
                    variant="standard"
                    type="number"
                    sx={{ "& .MuiInputBase-root": { height: "24px" } }}
                  />
                  <div className="h-12 w-[110px] relative leading-[24px] hidden whitespace-nowrap">
                    user@email.com
                  </div>
                  <div className="h-px w-6 hidden flex-row items-center justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden" />
                </div>
                <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-10 flex flex-row items-start justify-start">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
                <div className="self-stretch flex flex-row items-start justify-start text-base text-m3-ref-neutral-neutral20-200">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden" />
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 relative min-w-[24px] p-0"
                    color="primary"
                    placeholder="2"
                    variant="standard"
                    type="number"
                    sx={{ "& .MuiInputBase-root": { height: "24px" } }}
                  />
                  <div className="h-12 w-[110px] relative leading-[24px] hidden whitespace-nowrap">
                    user@email.com
                  </div>
                  <div className="h-px w-6 hidden flex-row items-center justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden" />
                </div>
                <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-10 flex flex-row items-start justify-start">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
                <div className="self-stretch flex flex-row items-start justify-start text-base text-m3-ref-neutral-neutral20-200">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden" />
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 relative min-w-[24px] p-0"
                    color="primary"
                    placeholder="3"
                    variant="standard"
                    type="number"
                    sx={{ "& .MuiInputBase-root": { height: "24px" } }}
                  />
                  <div className="h-12 w-[110px] relative leading-[24px] hidden whitespace-nowrap">
                    user@email.com
                  </div>
                  <div className="h-px w-6 hidden flex-row items-center justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden" />
                </div>
                <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-10 flex flex-row items-start justify-start">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
                <div className="self-stretch flex flex-row items-start justify-start text-base text-m3-ref-neutral-neutral20-200">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden" />
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 relative min-w-[24px] p-0"
                    color="primary"
                    placeholder="4"
                    variant="standard"
                    sx={{ "& .MuiInputBase-root": { height: "24px" } }}
                  />
                  <div className="h-12 w-[110px] relative leading-[24px] hidden whitespace-nowrap">
                    user@email.com
                  </div>
                  <div className="h-px w-6 hidden flex-row items-center justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden" />
                </div>
                <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-10 flex flex-row items-start justify-start">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
                <div className="self-stretch flex flex-row items-start justify-start text-base text-m3-ref-neutral-neutral20-200">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden" />
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 relative min-w-[24px] p-0"
                    color="primary"
                    placeholder="5"
                    variant="standard"
                    sx={{ "& .MuiInputBase-root": { height: "24px" } }}
                  />
                  <div className="h-12 w-[110px] relative leading-[24px] hidden whitespace-nowrap">
                    user@email.com
                  </div>
                  <div className="h-px w-6 hidden flex-row items-center justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden" />
                </div>
                <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
              </div>
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="w-10 flex flex-row items-start justify-start">
              <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
                <div className="self-stretch flex flex-row items-start justify-start text-base text-m3-ref-neutral-neutral20-200">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/starfilled-1.svg"
                      />
                    </div>
                  </div>
                  <div className="h-6 w-0 relative hidden" />
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 relative min-w-[24px] p-0"
                    color="primary"
                    placeholder="6"
                    variant="standard"
                    sx={{ "& .MuiInputBase-root": { height: "24px" } }}
                  />
                  <div className="h-12 w-[110px] relative leading-[24px] hidden whitespace-nowrap">
                    user@email.com
                  </div>
                  <div className="h-px w-6 hidden flex-row items-center justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                  <div className="h-0 w-6 relative hidden" />
                </div>
                <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
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
          <div className="self-stretch flex flex-row items-start justify-start max-w-full font-components-helper-text">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[240px] max-w-full"
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
          <div className="self-stretch flex flex-row items-start justify-start max-w-full font-components-helper-text">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[240px] max-w-full mq450:h-auto"
              color="primary"
              label="Confirm Password"
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[16.7px] text-sm text-neutral-10">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-grey-600">
              <div className="self-stretch h-[19px] relative leading-[24px] font-semibold inline-block shrink-0">
                Very Weak
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-start justify-start min-w-[86px] max-w-[94px]">
                  <div className="h-1 flex-1 relative bg-grey-grey-300" />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-w-[86px] max-w-[94px]">
                  <div className="h-1 flex-1 relative bg-grey-grey-300" />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-w-[86px] max-w-[94px]">
                  <div className="h-1 flex-1 relative bg-grey-grey-300" />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start min-w-[86px] max-w-[94px]">
                  <div className="h-1 flex-1 relative bg-grey-grey-300" />
                </div>
              </div>
            </div>
            <div className="relative leading-[22px] text-m3-black">
              Your Password must contain:
            </div>
            <div className="flex flex-row items-start justify-start gap-[42px] mq450:gap-[21px]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/info1.svg"
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
                    src="/info1.svg"
                  />
                </div>
                <div className="relative leading-[22px] inline-block min-w-[79px]">
                  1 Uppercase
                </div>
              </div>
            </div>
            <div className="w-[306px] flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/info1.svg"
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
                    src="/info1.svg"
                  />
                </div>
                <div className="relative leading-[22px] inline-block min-w-[124px]">
                  1 Special Character
                </div>
              </div>
            </div>
          </div>
          <Button
            className="self-stretch h-[60px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] mq450:pl-5 mq450:pr-5 mq450:box-border"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#f28500",
              border: "#f28500 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#f28500" },
              height: 60,
            }}
          >
            Update Password
          </Button>
          <div className="self-stretch h-[42px] flex flex-row items-start justify-start">
            <Button
              className="self-stretch w-[152px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
              startIcon={
                <img width="16px" height="16px" src="/wrapper-1.png" />
              }
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
              }}
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-52.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[22px] pb-[485px] pr-0 pl-10 box-border relative gap-[54px] min-w-[390px] max-w-full text-29xl text-m3-black mq1050:pt-5 mq1050:pb-[315px] mq1050:box-border mq750:gap-[27px] mq750:min-w-full mq450:pb-[205px] mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/subtract.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="w-[236px] flex flex-row items-end justify-start gap-[12.4px] z-[1]">
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
        <h1 className="m-0 w-[520px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[2] mq1050:text-19xl mq1050:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
    </div>
  );
};

export default ConsumerResetPassword;
