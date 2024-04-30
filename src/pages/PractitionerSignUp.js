import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";

const PractitionerSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start py-10 pr-10 pl-[140px] box-border gap-[47px] leading-[normal] tracking-[normal] text-left text-smi text-m3-black font-poppins mq750:gap-[23px] mq750:pl-[70px] mq750:box-border mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="h-[57.5px] w-[404px] hidden flex-col items-start justify-start max-w-full">
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-5 flex-1 relative font-medium inline-block">
            Name
          </div>
        </div>
        <div className="self-stretch h-8 rounded-3xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-gainsboro-200" />
      </div>
      <div className="w-[] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[480px] max-w-full mq750:min-w-full mq1125:flex-1">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full mq750:gap-[20px]">
          <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
            <img
              className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
              <img
                className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers5.svg"
              />
            </div>
          </div>
          <div className="w-[480px] flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <div className="self-stretch relative text-base leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-gray-200 text-left">
              Enter your credentials to create an account
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
                color="primary"
                label="Full Name"
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
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
                color="primary"
                label="Email"
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
              <FormControl
                className="h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 max-w-full"
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "480px",
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
                <InputLabel color="primary">Choose Category</InputLabel>
                <Select
                  color="primary"
                  label="Choose Category"
                  disableUnderline
                  displayEmpty
                />
                <FormHelperText />
              </FormControl>
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
                label="Contact No."
                fullWidth={true}
                variant="standard"
                type="tel"
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
                className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full mq750:h-auto"
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
                <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
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
                background: "#006a6a",
                border: "#006a6a solid 1px",
                borderRadius: "4px",
                "&:hover": { background: "#006a6a" },
              }}
            >
              Sign Up
            </Button>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="relative text-sm leading-[22px] font-web-secondary-underline-subtitle2-dm-sans text-gray-200 text-left whitespace-nowrap">
                Already have an account?
              </div>
              <div className="relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-material-theme-source-primary text-left inline-block min-w-[45px] whitespace-nowrap">
                Sign In
              </div>
            </div>
            <Button
              className="w-[154px] flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
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
                width: 154,
              }}
            >
              Back to home
            </Button>
          </div>
        </form>
      </div>
      <div className="h-[944px] flex-1 relative min-w-[476px] max-w-full mq750:min-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[93px] rounded-3xl max-h-full w-[640px] object-cover"
          loading="lazy"
          alt=""
          src="/chrislee70l1tdai6rmunsplash-2@2x.png"
        />
        <div className="absolute top-[634px] left-[0px] [backdrop-filter:blur(22.2px)] rounded-[50%] bg-teal-300 box-border w-[187px] h-[187px] z-[1] border-[0px] border-solid border-teal-200" />
      </div>
    </div>
  );
};

export default PractitionerSignUp;
