import { useCallback } from "react";
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

const PractitionerDetails = () => {
  const onTabContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='infoContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTabContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[80px] tracking-[normal] leading-[normal] mq450:gap-[20px] mq750:gap-[40px]">
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-m3-sys-light-on-primary flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] sticky top-[0] z-[99] border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq450:gap-[88px] mq750:gap-[176px]">
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
        <div className="w-[260px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-m3-sys-light-on-primary overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <TextField
            className="h-[41px] flex-1 font-web-secondary-underline-subtitle2-dm-sans font-semibold text-base text-m3-black w-auto"
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
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[120px] max-w-full text-left text-base text-m3-black font-web-secondary-underline-subtitle2-dm-sans lg:gap-[60px] mq750:gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px] mq1050:flex-wrap">
              <div className="flex-1 rounded-3xl overflow-hidden flex flex-row items-start justify-start min-w-[469px] max-w-full mq750:min-w-full">
                <div className="h-[520.1px] flex-1 relative max-w-full">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/gallery-photo@2x.png"
                  />
                  <img
                    className="absolute top-[calc(50%_-_20.05px)] right-[32px] rounded-lg w-10 h-10 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/button@2x.png"
                  />
                </div>
              </div>
              <div className="w-[398px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[16px] min-w-[398px] max-w-full mq750:min-w-full mq1050:flex-1">
                <iframe
                  className="[border:none] self-stretch h-[284.1px] relative bg-[url('/public/basemap-image@3x.png')] bg-cover bg-no-repeat bg-[top]"
                  src="https://www.google.com/maps/@49.2386566,-123.1258304,13z?entry=ttu"
                />
                <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[15px] max-w-full mq450:flex-wrap">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/directions.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[24px] inline-block min-w-[223px] max-w-full">
                    888 Burrard St, Vancouver, BC, V6Z 1X9
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[15px] max-w-full mq450:flex-wrap">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
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
                <div className="self-stretch hidden flex-row items-start justify-start p-2 box-border gap-[15px] max-w-full mq450:flex-wrap">
                  <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/star-border.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[24px] inline-block min-w-[223px] max-w-full">
                    4.9 - 500+ ratings
                  </div>
                </div>
                <Button
                  className="self-stretch h-[52px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] mq450:pl-5 mq450:pr-5 mq450:box-border"
                  startIcon={
                    <img width="24px" height="24px" src="/wrapper.png" />
                  }
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
                  Chat Now
                </Button>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-sm text-consumer-colors-complemantary font-components-helper-text">
              <div
                className="h-[42px] w-[97px] flex flex-col items-center justify-center relative cursor-pointer"
                onClick={onTabContainerClick}
              >
                <div className="!m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-[9px] px-4 box-border gap-[8px] h-full w-full">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/info.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block min-w-[33px]">
                    Info
                  </div>
                </div>
                <div className="w-[calc(100%_+_2px)] h-0.5 absolute !m-[0] right-[-2px] bottom-[-2px] left-[0px] box-border border-t-[2px] border-solid border-consumer-colors-complemantary" />
              </div>
              <div
                className="flex flex-col items-center justify-center cursor-pointer text-neutral-10"
                onClick={onTabContainer1Click}
              >
                <div className="flex flex-row items-center justify-center py-[9px] px-4 gap-[8px]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/design-services.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block min-w-[67px]">
                    Services
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[722px] flex flex-col items-start justify-start gap-[40px] max-w-full text-lg mq750:gap-[20px]">
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full"
                data-scroll-to="infoContainer"
              >
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[24px] max-w-full">
                  <img
                    className="h-20 w-20 relative rounded-[50%] object-cover min-h-[80px]"
                    loading="lazy"
                    alt=""
                    src="/ellipse-200@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[402px] max-w-full mq750:min-w-full">
                    <b className="relative leading-[28px]">The Star Studio</b>
                    <div className="self-stretch relative text-sm leading-[22px]">
                      GYM CLASSES | INTERVAL TRAINING | OTHER | PERSONAL
                      TRAINING | PHYSICAL THERAPY | WEIGHT TRAINING | YOGA
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <b className="relative leading-[28px]">
                    About the practitioner:
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
                    <div className="flex-1 relative leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] max-w-full">
                      <span>{`At [Vendor Name], we're committed to providing exceptional wellness experiences that cater to your unique needs. Our team of dedicated practitioners brings a wealth of knowledge and expertise to every session, ensuring that you receive personalized care and support on your journey to optimal health and vitality. Whether you're seeking relaxation, `}</span>
                      <span className="[text-decoration:underline] text-consumer-colors-complemantary">
                        Read more
                      </span>
                      <span className="whitespace-pre-wrap">
                        {" "}
                        Real guidance, we offer a diverse range of modalities
                        and services to address your wellness goals. From
                        rejuvenating massage therapies to transformative energy
                        work, we invite you to explore our offerings and
                        discover the healing power within you. Join us as we
                        cultivate a nurturing space for growth, connection, and
                        transformation.
                      </span>
                    </div>
                  </div>
                </div>
                <b className="relative leading-[28px]">General Availability:</b>
                <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[392px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[196px] mq750:box-border">
                  <button className="cursor-pointer py-0.5 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-7">
                    <div className="rounded-81xl bg-components-avatar-fill hidden flex-col items-center justify-center relative">
                      <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-m3-sys-light-on-primary hidden z-[0]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2 w-2 relative rounded-81xl" />
                        </div>
                      </div>
                      <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-m3-sys-light-on-primary text-center inline-block z-[1]">
                        OP
                      </div>
                      <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                    </div>
                    <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                      <b className="relative text-xs leading-[18px] uppercase font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-left whitespace-nowrap">
                        09:00 AM to 05:00 PM
                      </b>
                    </div>
                    <img
                      className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                      alt=""
                      src="/cancelfilled1.svg"
                    />
                  </button>
                  <button className="cursor-pointer py-0.5 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-7">
                    <div className="rounded-81xl bg-components-avatar-fill hidden flex-col items-center justify-center relative">
                      <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-m3-sys-light-on-primary hidden z-[0]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2 w-2 relative rounded-81xl" />
                        </div>
                      </div>
                      <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-m3-sys-light-on-primary text-center inline-block z-[1]">
                        OP
                      </div>
                      <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                    </div>
                    <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                      <b className="relative text-xs leading-[18px] uppercase font-web-secondary-underline-subtitle2-dm-sans text-neutral-10 text-left whitespace-nowrap">
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
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-neutral-11"
                data-scroll-to="servicesContainer"
              >
                <div className="relative text-base leading-[24px] font-semibold text-m3-black inline-block min-w-[70px]">
                  Services:
                </div>
                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start max-w-full">
                  <img
                    className="self-stretch h-[154px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/featured-image@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start p-4 box-border gap-[8px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <b className="relative leading-[28px] inline-block min-w-[42px]">
                        Yoga
                      </b>
                      <b className="relative leading-[28px] inline-block min-w-[35px] whitespace-nowrap">
                        $30
                      </b>
                    </div>
                    <div className="self-stretch relative text-xs text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Unwind and rejuvenate with our calming yoga class,
                      designed to cultivate strength, flexibility, and inner
                      peace. Led by experienced instructors, this class offers a
                      harmonious blend of gentle movements, mindful breathing,
                      and relaxation techniques to leave you feeling refreshed
                      and centered."
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 box-border max-w-full [row-gap:20px] gap-[0px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                      <div className="w-[345px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/icons1.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                          Online
                        </div>
                      </div>
                      <div className="w-[345px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full text-left">
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
                <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start max-w-full">
                  <img
                    className="self-stretch h-[154px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/featured-image-1@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start p-4 box-border gap-[8px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                      <b className="relative leading-[28px] inline-block min-w-[97px]">
                        Meditation
                      </b>
                      <b className="relative leading-[28px] inline-block min-w-[35px] whitespace-nowrap">
                        $60
                      </b>
                    </div>
                    <div className="self-stretch relative text-xs text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                      Unwind and rejuvenate with our calming yoga class,
                      designed to cultivate strength, flexibility, and inner
                      peace. Led by experienced instructors, this class offers a
                      harmonious blend of gentle movements, mindful breathing,
                      and relaxation techniques to leave you feeling refreshed
                      and centered."
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 box-border max-w-full [row-gap:20px] gap-[0px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                      <div className="w-[345px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/icons1.svg"
                        />
                        <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                          Online
                        </div>
                      </div>
                      <div className="w-[345px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full text-left">
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
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="relative leading-[28px]">
                  Similar Practitioners:
                </b>
                <div className="self-stretch grid flex-row items-start justify-start py-0 px-0 gap-[40px] grid-cols-[repeat(3,_minmax(223px,_1fr))] text-xl text-neutral-10 mq450:grid-cols-[minmax(223px,_1fr)] mq750:gap-[20px] mq750:grid-cols-[repeat(2,_minmax(223px,_387px))] mq750:justify-center">
                  <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-m3-sys-light-on-primary flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-center justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start p-4">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                          <img
                            className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                            loading="lazy"
                            alt=""
                            src="/monogram1@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start">
                            <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                              The Star Studio
                            </h3>
                            <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                              Yoga, Meditation
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/media1@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-components-helper-text">
                        <div className="flex-1 relative leading-[22px] font-web-secondary-underline-subtitle2-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                          Howe Street, Vancouver
                        </div>
                        <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                          <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                            <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Enabled
                              </div>
                            </div>
                          </div>
                          <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-m3-sys-light-on-primary">
                            <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Enabled
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                            1 mile
                          </div>
                          <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/near-me.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-m3-sys-light-on-primary flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-center justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start p-4">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                          <img
                            className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                            loading="lazy"
                            alt=""
                            src="/monogram-1@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start">
                            <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                              The Star Studio
                            </h3>
                            <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">{`Life counseling, Meditation, Hypnotherapy `}</div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/media1@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-components-helper-text">
                        <div className="flex-1 relative leading-[22px] font-web-secondary-underline-subtitle2-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                          Howe Street, Vancouver
                        </div>
                        <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                          <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                            <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Enabled
                              </div>
                            </div>
                          </div>
                          <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-m3-sys-light-on-primary">
                            <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Enabled
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                            1 mile
                          </div>
                          <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/near-me.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-m3-sys-light-on-primary flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-center justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start p-4">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                          <img
                            className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                            loading="lazy"
                            alt=""
                            src="/monogram-2@2x.png"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start">
                            <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                              Shapes
                            </h3>
                            <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                              Massage, Yoga, Acupuncture, Trauma release
                              exercises
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/media1@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-components-helper-text">
                        <div className="flex-1 relative leading-[22px] font-web-secondary-underline-subtitle2-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                          Howe Street, Vancouver
                        </div>
                        <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                          <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                            <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Enabled
                              </div>
                            </div>
                          </div>
                          <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-m3-sys-light-on-primary">
                            <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                              <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                                Enabled
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                          <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                            1 mile
                          </div>
                          <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/near-me.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-mid text-gray-200 font-gilroy-regular mq750:gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[54.9px] lg:flex-wrap mq750:gap-[27px]">
              <div className="w-[248px] flex flex-col items-start justify-start gap-[32px] text-mini text-gray-700">
                <div className="w-[200px] flex flex-row items-end justify-start gap-[10.5px]">
                  <img
                    className="h-10 w-[40.2px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/the-healers-logo-12.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.4px]">
                    <img
                      className="self-stretch h-[19.1px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/the-healers-11.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative tracking-[-0.11px] leading-[26px] mix-blend-normal">
                  Your all-in-one platform for effortless wellness, connecting
                  you with curated fitness, wellness services and personalized
                  recommendations.
                </div>
              </div>
              <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px]">
                <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
                  Company
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  About us
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Contact us
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Privacy Policy
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Terms and Conditions
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
                  Services
                </div>
                <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
                  Mind
                </div>
                <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
                  Body
                </div>
                <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
                  Medicine
                </div>
                <div className="relative tracking-[-0.2px]">
                  Psychologists and Counselors
                </div>
              </div>
              <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px]">
                <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-700 inline-block mix-blend-normal">
                  Links
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Sitemap
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Security
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Support Center
                </div>
                <div className="self-stretch relative tracking-[-0.2px]">
                  Cookie Preferences
                </div>
              </div>
              <div className="w-[135.9px] flex flex-col items-start justify-start gap-[16px] text-4xs-4 text-m3-sys-light-on-primary font-open-sans">
                <img
                  className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/app-store--filled1.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 flex flex-row items-end justify-start pt-[4.7px] pb-[5.9px] pr-[9.2px] pl-2.5 relative gap-[19.8px]">
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
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.3px]">
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
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <img
                      className="h-[12.9px] w-[16.3px] absolute !m-[0] top-[7.2px] left-[10px] z-[5]"
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
                      alt=""
                      src="/buttontwitter.svg"
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
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
          </footer>
        </section>
      </main>
    </div>
  );
};

export default PractitionerDetails;
