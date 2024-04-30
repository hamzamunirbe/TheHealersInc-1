import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";

const ProfileContainer = () => {
  const [checkboxIconChecked, setCheckboxIconChecked] = useState(true);
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-13xl text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[20px]">
      <div className="w-[444px] flex flex-col items-start justify-start gap-[8px] max-w-full">
        <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block min-w-[100px] mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
          Profile
        </h1>
        <div className="self-stretch relative text-sm leading-[22px]">
          Customize you profile here
        </div>
      </div>
      <div className="self-stretch rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none overflow-y-auto flex flex-row flex-wrap items-start justify-start py-0 px-6 box-border gap-[40px] max-w-full text-xs text-text-secondary font-components-helper-text mq750:gap-[20px]">
        <div className="flex flex-col items-center justify-start relative gap-[8px]">
          <img
            className="w-[200px] h-[200px] relative rounded-[50%] object-cover"
            alt=""
            src="/avatar-image@2x.png"
          />
          <img
            className="w-8 h-8 absolute !m-[0] top-[168px] left-[168px] overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/solarcameraminimalisticbold.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[439px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[212px] max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-[47px] flex-1 font-components-helper-text text-base text-m3-ref-neutral-neutral20-200 min-w-[196px] max-w-full"
                color="primary"
                label="full Name"
                defaultValue="The Star Studio"
                fullWidth={true}
                variant="standard"
                sx={{ "& .MuiInputBase-root": { height: "47px" } }}
              />
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[212px] max-w-full text-text-disabled">
              <TextField
                className="[border:none] bg-[transparent] h-[47px] flex-1 font-components-helper-text text-base text-gray1-400 min-w-[196px] max-w-full"
                color="primary"
                label="Email"
                defaultValue="user@email.com"
                fullWidth={true}
                variant="standard"
                type="email"
                sx={{ "& .MuiInputBase-root": { height: "47px" } }}
              />
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[212px] max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-[47px] flex-1 font-components-helper-text text-base text-m3-ref-neutral-neutral20-200 min-w-[196px] max-w-full"
                color="primary"
                defaultValue="12345678"
                fullWidth={true}
                variant="standard"
                type="tel"
                sx={{ "& .MuiInputBase-root": { height: "47px" } }}
              />
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start min-w-[212px] max-w-full">
              <Autocomplete
                className="h-[47px] flex-1 max-w-full"
                disablePortal
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="Service Categories"
                    color="primary"
                    label=""
                    variant="standard"
                    placeholder=""
                    helperText=""
                  />
                )}
                defaultValue="Mind, Body"
              />
              <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                  Helper text
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[491px] pl-0 gap-[16px] text-m3-black mq450:pr-5 mq450:box-border mq750:pr-[245px] mq750:box-border">
            <div className="relative tracking-[0.5px] leading-[16px] font-medium inline-block min-w-[78px]">
              Service Type:
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm">
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <input
                  className="accent-highlight-darkest m-0 h-4 w-4 relative rounded box-border min-h-[16px] border-[1.5px] border-solid border-highlight-darkest"
                  checked={checkboxIconChecked}
                  type="checkbox"
                  onChange={(event) =>
                    setCheckboxIconChecked(event.target.checked)
                  }
                />
                <div className="relative tracking-[0.5px] leading-[16px] inline-block min-w-[43px]">
                  Online
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[7px]">
                <input
                  className="m-0 h-4 w-4 relative rounded box-border min-h-[16px] border-[1.5px] border-solid border-highlight-darkest"
                  type="checkbox"
                />
                <div className="relative tracking-[0.5px] leading-[16px] inline-block min-w-[48px]">
                  On-site
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-[47px] flex-1 font-components-helper-text text-base text-m3-ref-neutral-neutral20-200 min-w-[250px] max-w-full"
              color="primary"
              label="Address"
              defaultValue="Vancouver Canada"
              fullWidth={true}
              variant="standard"
              sx={{ "& .MuiInputBase-root": { height: "47px" } }}
            />
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="h-[47px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
              <div className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[57px]">
                Time zone
              </div>
              <FormControl
                className="self-stretch h-6 font-components-helper-text text-base text-m3-ref-neutral-neutral20-200"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "100%",
                  height: "24px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#322f35",
                    fontSize: 16,
                    fontWeight: "Regular",
                    fontFamily: "Roboto",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="24px"
                      height="24px"
                      src="/arrow-drop-down-1.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>UTC-5, Eastern Standard Time</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-m3-ref-neutral-neutral20-200" />
            </div>
            <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                Helper text
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start">
            <Button
              className="w-[138px] h-10"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#04a3a3",
                borderRadius: "100px",
                "&:hover": { background: "#04a3a3" },
                width: 138,
                height: 40,
              }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xl mq450:flex-wrap">
        <h2 className="m-0 relative text-inherit leading-[30px] font-bold font-inherit inline-block min-w-[71px] mq450:text-base mq450:leading-[24px]">
          Gallery
        </h2>
        <div className="h-[50px] w-[50px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-77xl bg-m3-sys-light-on-primary box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-[13px] relative gap-[10px] text-center text-sm text-m3-sys-light-on-primary font-components-helper-text border-[1px] border-solid border-m3-sys-light-on-primary">
          <div className="w-2.5 relative leading-[22px] hidden shrink-0 z-[0]">
            A
          </div>
          <div className="!m-[0] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/add-photo-alternate.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[8px] grid-cols-[repeat(3,_minmax(237px,_1fr))] mq450:grid-cols-[minmax(237px,_1fr)] mq750:grid-cols-[repeat(2,_minmax(237px,_411px))] mq750:justify-center">
        <div className="h-[300px] w-[316px] flex flex-col items-center justify-center p-10 box-border bg-[url('/public/image@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="w-8 h-8 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/image.svg"
          />
        </div>
        <div className="h-[300px] w-[316px] flex flex-col items-center justify-center p-10 box-border bg-[url('/public/image1@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="w-8 h-8 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/image.svg"
          />
        </div>
        <div className="h-[300px] w-[316px] flex flex-col items-center justify-center p-10 box-border bg-[url('/public/image2@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="w-8 h-8 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
