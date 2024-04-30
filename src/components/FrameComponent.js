import { useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const FrameComponent = ({ newPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-left text-xs text-text-secondary font-components-helper-text">
      <div className="flex-1 flex flex-row items-start justify-start max-w-full">
        <TextField
          className="[border:none] bg-[transparent] h-[53px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full mq750:h-auto"
          color="primary"
          label={newPassword}
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
          <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
            Helper text
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
