import { useState } from "react";
import { Button } from "@mui/material";

const ConsumerSignIn = () => {
  const [checkBoxFilledIconChecked, setCheckBoxFilledIconChecked] =
    useState(true);
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[127px] leading-[normal] tracking-[normal] text-left text-29xl text-m3-black font-web-primary-h3-primary-dm-sans mq450:gap-[32px] mq450:pl-5 mq450:box-border mq750:gap-[63px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq1125:flex-wrap">
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-52.svg"
      />
      <div className="w-[470px] flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border min-w-[470px] max-w-full mq450:pt-[34px] mq450:box-border mq750:min-w-full mq1050:pt-[53px] mq1050:box-border mq1125:flex-1">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <h1 className="m-0 relative text-13xl leading-[48px] font-bold font-web-primary-h3-primary-dm-sans text-m3-black text-left mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Continue your healing journey
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
              <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-text-secondary text-left inline-block min-w-[30px]">
                Email
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20 min-w-[250px]"
                placeholder="user@email.com"
                type="text"
              />
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
            </div>
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full mq750:h-auto">
              <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-text-secondary text-left inline-block min-w-[53px]">
                Password
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
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
                <div className="self-stretch w-[220px] relative text-base tracking-[0.15px] leading-[24px] font-h5-medium text-text-primary text-left hidden" />
                <input
                  className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-web-primary-h3-primary-dm-sans text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-m3-ref-neutral-neutral20 text-left inline-block min-w-[290px] max-w-full p-0"
                  placeholder="************"
                  type="text"
                />
                <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
                  <div className="w-6 h-px flex flex-row items-start justify-start relative">
                    <img
                      className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] max-w-full overflow-hidden"
                      alt=""
                      src="/removeredeyefilled.svg"
                    />
                  </div>
                </div>
                <div className="h-0 w-6 relative hidden" />
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
            </div>
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
                Helper text
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <div className="h-[46px] w-[46px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
              <input
                className="accent-cornflowerblue m-0 h-7 w-7 relative overflow-hidden shrink-0"
                checked={checkBoxFilledIconChecked}
                type="checkbox"
                onChange={(event) =>
                  setCheckBoxFilledIconChecked(event.target.checked)
                }
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-text-primary text-left inline-block min-w-[126px]">
                Keep me signed in.
              </div>
            </div>
          </div>
          <Button
            className="self-stretch h-[60px] mq450:pl-5 mq450:pr-5 mq450:box-border"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#f28500",
              borderRadius: "4px",
              "&:hover": { background: "#f28500" },
              height: 60,
            }}
          >
            Sign In
          </Button>
          <div className="self-stretch rounded overflow-hidden flex flex-row items-start justify-center py-1 px-5 gap-[10px]">
            <div className="bg-gray-600 overflow-hidden hidden flex-col items-center justify-center">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/wrapper-1@2x.png"
              />
            </div>
            <div className="relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-royalblue text-center inline-block min-w-[119px]">
              Forgot Password?
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq750:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[141px]">
              <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-whitesmoke-300" />
            </div>
            <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-neutral-10 text-left inline-block min-w-[14px] mq750:w-full mq750:h-3.5">
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
            <div className="relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-gray-200 text-left">
              Don’t have an account?
            </div>
            <div className="relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-royalblue text-left inline-block min-w-[51px] whitespace-nowrap">
              Sign Up
            </div>
          </div>
          <Button
            className="w-[154px] h-[42px]"
            startIcon={<img width="16px" height="16px" src="/wrapper-2.png" />}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#434343",
              fontSize: "14",
              background: "#fff",
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
