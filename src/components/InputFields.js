import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const InputFields = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkBoxFilledIconChecked, setCheckBoxFilledIconChecked] =
    useState(true);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
      <div className="self-stretch relative text-base leading-[24px] font-web-secondary-underline-subtitle2-dm-sans text-gray-200 text-left">
        Enter your credentials to access your account
      </div>
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
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
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
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[8px]">
        <div className="rounded-81xl flex flex-row items-start justify-start py-2 px-0">
          <input
            className="accent-cornflowerblue m-0 h-7 w-7 relative overflow-hidden shrink-0"
            checked={checkBoxFilledIconChecked}
            type="checkbox"
            onChange={(event) =>
              setCheckBoxFilledIconChecked(event.target.checked)
            }
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
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
          background: "#006a6a",
          border: "#006a6a solid 1px",
          borderRadius: "4px",
          "&:hover": { background: "#006a6a" },
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
            src="/wrapper-12@2x.png"
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
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <div className="relative text-sm leading-[22px] font-web-secondary-underline-subtitle2-dm-sans text-gray-200 text-left">
          Don’t have an account?
        </div>
        <div className="relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-secondary-underline-subtitle2-dm-sans text-material-theme-source-primary text-left inline-block min-w-[51px] whitespace-nowrap">
          Sign Up
        </div>
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
  );
};

export default InputFields;
