import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const FormContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-xl text-neutral-10 font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <b className="relative leading-[30px] mq450:text-base mq450:leading-[24px]">
          Forgot Password?
        </b>
        <div className="self-stretch relative text-base leading-[24px]">
          Don’ Worry ! It happens. Please enter your registered email below to
          reset your password.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-xs text-text-secondary font-components-helper-text">
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
          background: "#006a6a",
          border: "#006a6a solid 1px",
          borderRadius: "4px",
          "&:hover": { background: "#006a6a" },
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
  );
};

export default FormContainer;
