import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";

const ConsumerPreferences = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[121px] box-border gap-[56px] tracking-[normal] leading-[normal] mq750:gap-[28px]">
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-neutral-1 flex flex-row items-start justify-center py-[22px] px-5 gap-[724px] sticky top-[0] z-[99] border-[1px] border-solid border-gainsboro-100 lg:gap-[362px] mq450:gap-[90px] mq750:gap-[181px]">
        <div className="w-[236px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[12.4px]">
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
        <div className="w-60 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-between py-2.5 px-4 box-border gap-[0px] [row-gap:20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <TextField
            className="h-[41px] w-44 font-web-primary-h3-primary-dm-sans font-semibold text-base text-m3-black"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ marginRight: "8px" }}>
                  <img width="41px" height="41px" src="/avatar.png" />
                </InputAdornment>
              ),
              endAdornment: (
                <img
                  width="24px"
                  height="24px"
                  src="/keyboard-arrow-down.svg"
                />
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "73.33333333333333%",
              height: "41px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 16,
                fontWeight: "SemiBold",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>John Adams</MenuItem>
          </TextField>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[40px] max-w-full text-center text-29xl text-gray-800 font-web-primary-h3-primary-dm-sans mq750:gap-[20px]">
          <div className="self-stretch h-[424px] relative rounded-2xl bg-[url('/public/imageprefernces@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[calc(50%_-_600px)] rounded-2xl w-full h-full object-cover hidden"
              alt=""
              src="/imageprefernces@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="flex flex-col items-center justify-start gap-[24px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[64px] font-bold font-inherit mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]">
                Let’s design your unique Experience
              </h1>
              <div className="w-[588px] relative text-base leading-[24px] flex items-center justify-center max-w-full">
                The more we get to know you, the more we can serve up classes
                you love. Help us personalize your practice by answering three
                quick questions.
              </div>
              <div className="w-[180px] h-[114px] flex flex-col items-center justify-start gap-[16px]">
                <Button
                  className="self-stretch flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "18",
                    background: "#f28500",
                    border: "#f28500 solid 1px",
                    borderRadius: "44px",
                    "&:hover": { background: "#f28500" },
                  }}
                >
                  Sounds Good
                </Button>
                <Button
                  disableElevation={true}
                  variant="text"
                  sx={{ borderRadius: "0px 0px 0px 0px" }}
                >
                  No Thanks
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ConsumerPreferences;
