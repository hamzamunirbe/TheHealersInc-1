import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const ConsumerSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[165px] tracking-[normal] leading-[normal] text-left text-29xl text-m3-black font-web-primary-h3-primary-dm-sans mq450:gap-[41px] mq450:pl-5 mq450:box-border mq750:gap-[82px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq1125:flex-wrap">
      <div className="w-[432px] flex flex-col items-start justify-start pt-[78.6px] px-0 pb-0 box-border min-w-[432px] max-w-full mq450:pt-[33px] mq450:box-border mq750:min-w-full mq1050:pt-[51px] mq1050:box-border mq1125:flex-1">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <div className="relative text-base leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block max-w-full">
            Enter your credentials to create an account
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
              color="primary"
              label="First Name"
              placeholder="John"
              required={true}
              fullWidth={true}
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "53px" } }}
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
              color="primary"
              label="Last Name"
              placeholder="Adams"
              fullWidth={true}
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "53px" } }}
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
              color="primary"
              label="Email"
              placeholder="user@email.com"
              required={true}
              fullWidth={true}
              variant="standard"
              type="email"
              sx={{ "& .MuiInputBase-root": { height: "53px" } }}
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full mq450:h-auto"
              color="primary"
              label="Password"
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
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
                Helper text
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
            Sign Up
          </Button>
          <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[129px]">
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-whitesmoke-300" />
            </div>
            <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-neutral-10 text-left inline-block min-w-[14px] mq450:w-full mq450:h-3.5">
              Or
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[129px]">
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-whitesmoke-300" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[16px] mq450:flex-wrap">
            <Button
              className="h-10 flex-[0.8925] min-w-[135px] mq450:flex-1"
              startIcon={
                <img width="24px" height="24px" src="/icons8google-1.svg" />
              }
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#262626",
                fontSize: "14",
                borderColor: "#d9d9d9",
                borderRadius: "50px",
                "&:hover": { borderColor: "#d9d9d9" },
                height: 40,
              }}
            >
              Sign up with Google
            </Button>
            <div className="flex-1 rounded-[50px] box-border overflow-hidden flex flex-row items-start justify-start py-1.5 px-2.5 gap-[10px] min-w-[135px] border-[1px] border-solid border-gainsboro-200">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-neutral-10 text-left">
                  Sign up with Facebook
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-gray-200 text-left whitespace-nowrap">
              Don’t have an account?
            </div>
            <a className="[text-decoration:underline] relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-material-theme-source-primary text-left inline-block min-w-[45px] whitespace-nowrap">
              Sign In
            </a>
          </div>
          <Button
            className="w-[154px] h-[42px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
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
              width: 154,
              height: 42,
            }}
          >
            Back to home
          </Button>
        </form>
      </div>
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-52.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[22px] pb-[485px] pr-0 pl-10 box-border relative gap-[54px] min-w-[390px] max-w-full mq450:pb-[205px] mq450:box-border mq750:gap-[27px] mq750:min-w-full mq1050:pt-5 mq1050:pb-[315px] mq1050:box-border">
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
        <h1 className="m-0 w-[520px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[2] mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]">
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
    </div>
  );
};

export default ConsumerSignUp;
