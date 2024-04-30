import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Autocomplete,
  Button,
} from "@mui/material";

const Hero = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full text-center text-41xl text-m3-sys-light-on-primary font-web-secondary-underline-subtitle2-dm-sans">
      <div className="w-[612px] flex flex-col items-center justify-start gap-[40px] max-w-full z-[2] mq750:gap-[20px]">
        <div className="w-[599px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[65px] font-bold font-inherit mq750:text-29xl mq750:leading-[52px] mq450:text-17xl mq450:leading-[39px]">
            Find an ideal healing experience.
          </h1>
          <div className="w-[465.9px] relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-500 inline-block mix-blend-normal max-w-full">
            Explore a world of wellness options and embark on your journey to
            healing.
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px] text-left text-mini text-gray-500">
          <div className="self-stretch rounded-3xs bg-darkorange flex flex-row items-center justify-start py-6 px-8 gap-[16px] mq750:flex-wrap">
            <TextField
              className="[border:none] bg-[transparent] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-mini text-gray-700 min-w-[127px] whitespace-nowrap mq750:flex-1"
              color="primary"
              label="Search"
              placeholder="e.g; yoga"
              variant="filled"
              type="search"
              sx={{ "& .MuiInputBase-root": { height: "48px" } }}
            />
            <Autocomplete
              className="h-12 flex-1 min-w-[127px] mq750:flex-1"
              disablePortal
              options={[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Location"
                  variant="filled"
                  placeholder="Vancouver, Canada"
                  helperText=""
                />
              )}
            />
            <Button
              className="h-[50px] w-[124px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#006cf0",
                border: "#006cf0 solid 1px",
                borderRadius: "4px",
                "&:hover": { background: "#006cf0" },
                width: 124,
                height: 50,
              }}
            >
              Search
            </Button>
          </div>
          <div className="relative tracking-[-0.1px] leading-[26px] mix-blend-normal">
            Try Yoga, Meditation etc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
