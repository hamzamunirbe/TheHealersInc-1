import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const ServiceForm = () => {
  const [checkboxIconChecked, setCheckboxIconChecked] = useState(true);
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full text-left text-xs text-neutral-10 font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-13xl">
        <div className="w-[444px] flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Add Service
          </h1>
          <div className="self-stretch relative text-sm leading-[22px]">
            Specify service details here
          </div>
        </div>
      </div>
      <div className="self-stretch h-[47px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-text-secondary font-components-helper-text">
        <TextField
          className="[border:none] bg-[transparent] h-[57px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
          color="primary"
          label="Service Name"
          defaultValue="Yoga"
          fullWidth={true}
          variant="standard"
          sx={{ "& .MuiInputBase-root": { height: "57px" } }}
        />
        <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
            Helper text
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-text-secondary">
        <TextField
          className="self-stretch font-web-secondary-underline-subtitle2-dm-sans text-base text-m3-ref-neutral-neutral20-200 max-w-full"
          color="primary"
          rows={5}
          label="Description"
          variant="standard"
          multiline
        />
        <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
          <div className="flex-1 relative leading-[18px] inline-block max-w-full">
            Characters : 0/500
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[746px] pl-0 gap-[16px] text-sm mq1050:pr-[373px] mq1050:box-border mq750:pr-[186px] mq750:box-border">
        <div className="relative leading-[22px] font-semibold inline-block min-w-[91px]">
          Service Type:
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base mq450:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <input
              className="accent-highlight-darkest m-0 h-6 w-6 relative rounded-md box-border min-h-[24px] border-[1.5px] border-solid border-highlight-darkest"
              checked={checkboxIconChecked}
              type="checkbox"
              onChange={(event) => setCheckboxIconChecked(event.target.checked)}
            />
            <div className="relative leading-[24px] inline-block min-w-[48px]">
              Online
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <input
              className="m-0 h-6 w-6 relative rounded-md box-border min-h-[24px] border-[1.5px] border-solid border-highlight-darkest"
              type="checkbox"
            />
            <div className="relative leading-[24px] inline-block min-w-[58px]">
              On-site
            </div>
          </div>
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-web-secondary-underline-subtitle2-dm-sans text-base text-slategray min-w-[250px] max-w-full"
        color="primary"
        label="Session Cost"
        defaultValue="30"
        fullWidth={true}
        variant="standard"
        type="number"
        sx={{ "& .MuiInputBase-root": { height: "78px" } }}
      />
      <div className="w-[354px] h-[60px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[14px] max-w-full">
        <Button
          className="self-stretch flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "rgba(0, 0, 0, 0.85)",
            fontSize: "18",
            background: "#fff",
            border: "#d9d9d9 solid 1px",
            borderRadius: "4px",
            "&:hover": { background: "#fff" },
          }}
        >
          Cancel
        </Button>
        <Button
          className="self-stretch flex-[0.6667] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
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
          Save
        </Button>
      </div>
    </div>
  );
};

export default ServiceForm;
