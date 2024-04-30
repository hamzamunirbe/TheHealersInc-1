import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const ConsumerForgotPassword = () => {
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[193px] tracking-[normal] leading-[normal] text-left text-xl text-neutral-10 font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[96px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq450:gap-[48px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="w-[404px] flex flex-col items-start justify-start pt-[275px] px-0 pb-0 box-border min-w-[404px] max-w-full mq750:pt-[179px] mq750:box-border mq750:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <b className="relative leading-[30px] mq450:text-base mq450:leading-[24px]">
              Forgot Password?
            </b>
            <div className="self-stretch relative text-base leading-[24px]">
              Don’ Worry ! It happens. Please enter your registered email below
              to reset your password.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-xs text-text-secondary font-components-helper-text">
            <TextField
              className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[242px] max-w-full"
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
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
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
            Submit
          </Button>
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
        <h1 className="m-0 w-[520px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[1] mq1050:text-19xl mq1050:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
    </div>
  );
};

export default ConsumerForgotPassword;
