import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const ConsumerSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[127px] tracking-[normal] leading-[normal] text-left text-29xl text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq450:gap-[32px] mq450:pl-5 mq450:box-border mq750:gap-[63px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq1125:flex-wrap">
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-52.svg"
      />
      <div className="w-[470px] flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border min-w-[470px] max-w-full mq450:pt-[34px] mq450:box-border mq750:min-w-full mq1050:pt-[53px] mq1050:box-border mq1125:flex-1">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <h1 className="m-0 relative text-13xl leading-[48px] font-bold font-web-secondary-underline-subtitle2-dm-sans text-m3-black text-left mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Continue your healing journey
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
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
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
              color="primary"
              label="Password"
              size="small"
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
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <div className="h-[46px] w-[46px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
              <input
                className="m-0 h-7 w-7 relative overflow-hidden shrink-0"
                checked={true}
                type="checkbox"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-text-primary text-left inline-block min-w-[126px]">
                Keep me signed in.
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
            Sign In
          </Button>
          <div className="self-stretch rounded overflow-hidden flex flex-row items-start justify-center py-1 px-5 gap-[10px]">
            <div className="bg-hitbox-1000 overflow-hidden hidden flex-col items-center justify-center">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/wrapper-11@2x.png"
              />
            </div>
            <Button
              className="relative min-w-[119px]"
              disableElevation={true}
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Forgot Password?
            </Button>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[141px]">
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-whitesmoke-300" />
            </div>
            <div className="relative text-xs leading-[18px] font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-left inline-block min-w-[14px] mq750:w-full mq750:h-3.5">
              Or
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[141px]">
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-whitesmoke-300" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[16px] mq750:flex-wrap">
            <Button
              className="h-10 flex-[0.9022] min-w-[148px] mq450:flex-1"
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
            <Button
              className="h-10 flex-1 min-w-[148px]"
              startIcon={<img width="24px" height="24px" src="/facebook.svg" />}
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
              Sign up with Facebook
            </Button>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative text-sm leading-[22px] font-web-secondary-underline-subtitle2-dm-sans text-gray-200 text-left">
              Don’t have an account?
            </div>
            <a className="[text-decoration:underline] relative text-sm leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-consumer-colors-complemantary text-left inline-block min-w-[51px] whitespace-nowrap">
              Sign Up
            </a>
          </div>
          <Button
            className="w-[154px] h-[42px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
            startIcon={<img width="16px" height="16px" src="/wrapper-2.png" />}
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
        <h1 className="m-0 w-[520px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]">
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
    </div>
  );
};

export default ConsumerSignIn;
