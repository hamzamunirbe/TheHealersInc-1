import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Button,
  IconButton,
  Icon,
} from "@mui/material";

const ServiceDetails = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[80px] tracking-[normal] leading-[normal] mq750:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-neutral-1 flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] sticky top-[0] z-[99] border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
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
        <div className="w-[260px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <TextField
            className="h-[41px] flex-1 font-web-primary-h3-primary-dm-sans font-semibold text-base text-m3-black w-auto"
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
              width: "67.6923076923077%",
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
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full">
        <section className="w-[1200px] flex flex-row items-start justify-center gap-[56px] max-w-full text-left text-lg text-m3-black font-web-primary-h3-primary-dm-sans mq1050:flex-wrap mq750:gap-[28px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[426px] max-w-full mq750:gap-[20px] mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-5xl">
              <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full mq750:flex-wrap">
                <div className="flex flex-col items-start justify-start py-0 pr-[17px] pl-0">
                  <img
                    className="w-20 h-20 relative rounded-[50%] object-cover"
                    loading="lazy"
                    alt=""
                    src="/ellipse-2001@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <h1 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
                      The Star Studio
                    </h1>
                    <div className="h-[26px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                      <div className="w-px h-[17px] relative box-border border-r-[1px] border-solid border-m3-black" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[231px] max-w-full text-base">
                  <div className="self-stretch relative leading-[24px]">
                    888 Burrard St, Vancouver, BC, V6Z 1X9
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xl overflow-hidden flex flex-row items-start justify-start max-w-full">
                <div className="h-[447px] flex-1 relative max-w-full">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/string-processor@2x.png"
                  />
                  <img
                    className="absolute top-[calc(50%_-_19.5px)] right-[32px] rounded-lg w-10 h-10 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/button@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit">
                  About the Service:
                </h3>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
                  <div className="flex-1 relative leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] max-w-full">
                    <span>{`At [Vendor Name], we're committed to providing exceptional wellness experiences that cater to your unique needs. Our team of dedicated practitioners brings a wealth of knowledge and expertise to every session, ensuring that you receive personalized care and support on your journey to optimal health and vitality. Whether you're seeking relaxation, `}</span>
                    <span className="[text-decoration:underline] text-royalblue">
                      Read more
                    </span>
                    <span className="whitespace-pre-wrap">
                      {" "}
                      Real guidance, we offer a diverse range of modalities and
                      services to address your wellness goals. From rejuvenating
                      massage therapies to transformative energy work, we invite
                      you to explore our offerings and discover the healing
                      power within you. Join us as we cultivate a nurturing
                      space for growth, connection, and transformation.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[82px]">
                Location:
              </h3>
              <img
                className="self-stretch h-[284px] relative max-w-full overflow-hidden shrink-0 object-cover"
                alt=""
                src="/basemap-image@2x.png"
              />
              <img
                className="w-[52px] h-[52px] absolute !m-[0] top-[calc(50%_-_26.1px)] left-[calc(50%_-_26px)] overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/location-marker.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base">
                <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[16px] max-w-full mq750:flex-wrap">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/directions.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[24px] inline-block min-w-[228px] max-w-full">
                    888 Burrard St, Vancouver, BC, V6Z 1X9
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[16px] max-w-full mq750:flex-wrap">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/phone.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[24px] inline-block min-w-[81px] whitespace-nowrap max-w-full">
                    +1 123 456789
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit">
                Similar Services:
              </h3>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-5xl text-neutral-11">
                <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                  <img
                    className="h-[172px] w-[166px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[172px]"
                    loading="lazy"
                    alt=""
                    src="/featured-image1@2x.png"
                  />
                  <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[318px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <h1 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[29px]">
                        Yoga
                      </h1>
                      <b className="relative leading-[36px] inline-block min-w-[46px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                        $30
                      </b>
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Unwind and rejuvenate with our calming yoga class,
                      designed to cultivate strength, flexibility, and inner
                      peace. Led by experienced instructors, this class offers a
                      harmonious blend of gentle movements, mindful breathing,
                      and relaxation techniques to leave you feeling refreshed
                      and centered."
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 gap-[0px] [row-gap:20px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                      <div className="flex flex-row items-center justify-center py-0 px-[72.5px] gap-[8px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/icons.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                          Online
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center py-0 px-[52.5px] gap-[8px] text-left">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/timezone-1.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                          GMT -05:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                  <img
                    className="h-[172px] w-[166px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[172px]"
                    alt=""
                    src="/featured-image1@2x.png"
                  />
                  <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[318px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <h1 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[29px]">
                        Yoga
                      </h1>
                      <b className="relative leading-[36px] inline-block min-w-[46px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                        $30
                      </b>
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Unwind and rejuvenate with our calming yoga class,
                      designed to cultivate strength, flexibility, and inner
                      peace. Led by experienced instructors, this class offers a
                      harmonious blend of gentle movements, mindful breathing,
                      and relaxation techniques to leave you feeling refreshed
                      and centered."
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 gap-[0px] [row-gap:20px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                      <div className="flex flex-row items-center justify-center py-0 px-[72.5px] gap-[8px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icons.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                          Online
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center py-0 px-[52.5px] gap-[8px] text-left">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/timezone-1.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                          GMT -05:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                  <img
                    className="h-[172px] w-[166px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[172px]"
                    alt=""
                    src="/featured-image1@2x.png"
                  />
                  <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[318px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <h1 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[29px]">
                        Yoga
                      </h1>
                      <b className="relative leading-[36px] inline-block min-w-[46px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                        $30
                      </b>
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Unwind and rejuvenate with our calming yoga class,
                      designed to cultivate strength, flexibility, and inner
                      peace. Led by experienced instructors, this class offers a
                      harmonious blend of gentle movements, mindful breathing,
                      and relaxation techniques to leave you feeling refreshed
                      and centered."
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 gap-[0px] [row-gap:20px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                      <div className="flex flex-row items-center justify-center py-0 px-[72.5px] gap-[8px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/icons.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                          Online
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center py-0 px-[52.5px] gap-[8px] text-left">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/timezone-1.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                          GMT -05:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[488px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[488px] max-w-full text-base text-gray-1000 mq1050:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-primary-6">
                <div className="relative [text-decoration:underline] leading-[24px] font-semibold">
                  Psychologists and Counselors
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-13xl text-m3-black mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      Service Name
                    </h1>
                    <div className="relative text-sm leading-[22px] font-semibold inline-block min-w-[44px]">
                      Online
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0 text-5xl text-neutral-11">
                    <b className="relative leading-[36px] inline-block min-w-[46px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-1000">
                  <div className="self-stretch flex flex-row items-center justify-between py-1 px-0 gap-[20px] mq450:flex-wrap">
                    <div className="w-32 relative leading-[12px] font-semibold flex items-center shrink-0">
                      Date
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <IconButton
                        className="self-stretch w-[35.2px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] min-h-[20px]"
                        sx={{ borderRadius: "0px 0px 0px 0px" }}
                        color="primary"
                      >
                        <Icon>arrow_back_sharp</Icon>
                      </IconButton>
                      <IconButton
                        className="self-stretch w-[35.2px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] min-h-[20px]"
                        sx={{ borderRadius: "0px 0px 0px 0px" }}
                        color="primary"
                      >
                        <Icon>arrow_forward_sharp</Icon>
                      </IconButton>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[62px] pl-0 gap-[8px] text-center text-xs text-darkslategray-100 mq750:pr-[31px] mq750:box-border mq450:flex-wrap">
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start pt-2 px-[7px] pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[39px]">
                        22 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Fri
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-darkorange flex flex-col items-center justify-start pt-2 px-[7.5px] pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px] text-neutral-1">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[39px]">
                        23 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Sat
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start pt-2 px-[7.5px] pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[39px]">
                        24 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Sun
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start pt-2 px-[7.5px] pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[39px]">
                        25 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Mon
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start pt-2 px-[7.5px] pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[39px]">
                        26 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Tue
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start pt-2 px-2 pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[38px]">
                        27 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Wed
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start pt-2 px-[7.5px] pb-1 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="relative leading-[18px] uppercase inline-block min-w-[39px]">
                        28 Feb
                      </b>
                      <div className="self-stretch relative leading-[18px]">
                        Thu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="w-[342px] flex flex-row items-center justify-start py-1 px-0 box-border max-w-full">
                    <div className="w-32 relative leading-[12px] font-semibold flex items-center shrink-0">
                      Availability
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start">
                    <button className="cursor-pointer py-0.5 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-darkorange">
                      <div className="rounded-81xl bg-primary-dark hidden flex-col items-center justify-center relative">
                        <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-neutral-1 hidden z-[0]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                            <div className="h-2 w-2 relative rounded-81xl" />
                          </div>
                        </div>
                        <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-neutral-1 text-center inline-block z-[1]">
                          OP
                        </div>
                        <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                      </div>
                      <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                        <b className="relative text-xs leading-[18px] uppercase font-web-primary-h3-primary-dm-sans text-darkorange text-left whitespace-nowrap">
                          09:00 AM to 05:00 PM
                        </b>
                      </div>
                      <img
                        className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                        alt=""
                        src="/cancelfilled1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="w-32 h-3 relative leading-[24px] font-semibold flex items-center shrink-0">
                  Timings
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 gap-[24px_20px] text-xs text-text-secondary">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[93px]">
                    <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                      <div className="relative leading-[18px] inline-block min-w-[58px]">
                        Start Time
                      </div>
                      <FormControl
                        className="self-stretch h-6 font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20-200"
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
                            fontFamily: "DM Sans",
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
                              src="/arrow-drop-down.svg"
                              style={{}}
                            />
                          )}
                        >
                          <MenuItem>09:00 AM</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
                    </div>
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-h5-medium">
                      <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                        Helper text
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[93px]">
                    <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                      <div className="relative leading-[18px] inline-block min-w-[52px]">
                        End Time
                      </div>
                      <FormControl
                        className="self-stretch h-6 font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20-200"
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
                            fontFamily: "DM Sans",
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
                          <MenuItem>10:00 AM</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
                    </div>
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-h5-medium">
                      <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                        Helper text
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="self-stretch h-[52px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] mq450:pl-5 mq450:pr-5 mq450:box-border"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#f28500",
                  border: "#f28500 solid 1px",
                  borderRadius: "32px",
                  "&:hover": { background: "#f28500" },
                  height: 52,
                }}
              >
                Send Booking Request
              </Button>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-center text-xs text-m3-black">
                <Button
                  className="self-stretch h-[52px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] mq450:pl-5 mq450:pr-5 mq450:box-border"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#262626",
                    fontSize: "18",
                    background: "#fff",
                    border: "#595959 solid 1px",
                    borderRadius: "32px",
                    "&:hover": { background: "#fff" },
                    height: 52,
                  }}
                >
                  Chat With Practioner
                </Button>
                <div className="relative leading-[18px] inline-block max-w-full">
                  If you can’t find your desired slot feel free to reach out us
                  via chat.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-mid text-gray-200 font-web-primary-h3-primary-dm-sans">
        <div className="w-[1200px] flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="flex flex-row items-start justify-start gap-[54.9px] lg:flex-wrap mq750:gap-[27px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[32px] text-mini text-gray-700">
              <div className="w-[200px] flex flex-row items-end justify-start gap-[10.5px]">
                <img
                  className="h-10 w-[40.2px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/the-healers-logo-12.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.4px]">
                  <img
                    className="self-stretch h-[19.1px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/the-healers-11.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[104px] relative tracking-[-0.1px] leading-[26px] inline-block mix-blend-normal">
                Your all-in-one platform for effortless wellness, connecting you
                with curated fitness, wellness services and personalized
                recommendations.
              </div>
            </div>
            <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
                Company
              </div>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                About us
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Contact us
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Privacy Policy
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Terms and Conditions
              </h3>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
                Services
              </div>
              <h3 className="m-0 w-[186.8px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block">
                Mind
              </h3>
              <h3 className="m-0 w-[186.8px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block">
                Body
              </h3>
              <h3 className="m-0 w-[186.8px] relative text-inherit tracking-[-0.2px] font-normal font-inherit inline-block">
                Medicine
              </h3>
              <h3 className="m-0 relative text-inherit tracking-[-0.2px] leading-[22px] font-normal font-inherit">
                Psychologists and Counselors
              </h3>
            </div>
            <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
                Links
              </div>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Sitemap
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Security
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Support Center
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.2px] font-normal font-inherit">
                Cookie Preferences
              </h3>
            </div>
            <div className="w-[135.9px] flex flex-col items-start justify-start gap-[16px] text-4xs-4 text-neutral-1 font-open-sans">
              <img
                className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/app-store--filled1.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-end justify-start pt-[4.6px] pb-1.5 pr-[9.2px] pl-2.5 relative gap-[19.8px]">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.2px]">
                    <img
                      className="w-[11.1px] h-[21.5px] relative z-[4]"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                  <img
                    className="h-[13.4px] w-[16.2px] absolute !m-[0] bottom-[7.2px] left-[10.1px] z-[2]"
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className="h-[11px] w-[12.5px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[20.5px] z-[3]"
                    alt=""
                    src="/vector-4.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.4px]">
                    <div className="relative inline-block [-webkit-text-stroke:0.2px_#fff] min-w-[40px] z-[2]">
                      GET IT ON
                    </div>
                    <img
                      className="self-stretch h-[17px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                  <img
                    className="h-[12.9px] w-[16.3px] absolute !m-[0] top-[7.1px] left-[10px] z-[5]"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[58px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0.5px] px-0 pb-[55.5px] box-border gap-[29.5px] text-mini mq750:h-auto">
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:1de1738]"
              loading="lazy"
              alt=""
              src="/line-copy.svg"
            />
            <img
              className="w-[15.1px] h-[13px] relative hidden"
              alt=""
              src="/heart2.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] gap-[20px] mq750:flex-wrap">
              <div className="w-[235.3px] relative tracking-[-0.1px] leading-[52px] inline-block shrink-0 [debug_commit:1de1738]">
                © 2024 Copyright, All Right Reserved.
              </div>
              <div className="w-48 flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] gap-[20px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/buttontwitter.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/buttonfacebook.svg"
                  />
                  <img
                    className="h-6 w-6 relative object-cover min-h-[24px]"
                    alt=""
                    src="/logoinstagram@2x.png"
                  />
                  <img
                    className="h-6 w-6 relative object-cover min-h-[24px]"
                    alt=""
                    src="/logolinkedin@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetails;
