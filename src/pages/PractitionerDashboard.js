import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const PractitionerDashboard = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-center py-[22px] px-5 gap-[649.2px] top-[0] z-[99] sticky max-w-full border-[1px] border-solid border-gainsboro-100 lg:gap-[325px] mq450:gap-[81px] mq750:gap-[162px]">
        <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
            <img
              className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
              <img
                className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[339px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-m3-sys-light-on-primary overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 box-border gap-[20px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-[41px] flex-1 font-web-secondary-underline-subtitle2-dm-sans text-sm text-lightslategray"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="11px" height="11px" src="/search-icon.svg" />
              ),
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "41px",
                backgroundColor: "#f4f7fe",
                paddingLeft: "20px",
                borderRadius: "0px 0px 0px 0px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "11px",
                color: "#8f9bba",
              },
            }}
          />
          <div className="flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0">
            <div className="flex flex-row items-center justify-start">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/notifications-none2.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="h-[41px] w-[41px] relative"
              loading="lazy"
              alt=""
              src="/avatar.svg"
            />
          </div>
        </div>
      </header>
      <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="h-[662px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] border-r-[1px] border-solid border-silver-200 mq1050:hidden mq450:gap-[134px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch rounded-lg bg-whitesmoke-1300 flex flex-row items-center justify-center py-4 px-3 gap-[12px] text-neutral-10">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons.svg"
              />
              <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                Dashboard
              </div>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-1.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Schedule
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-2.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Appointments
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/sidebar-icons-3.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Services
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-4.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Inbox
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-5.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Profile
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start py-14 pr-[120px] pl-14 box-border gap-[56px] max-w-[calc(100%_-_300px)] text-13xl text-m3-black lg:pl-7 lg:pr-[60px] lg:box-border mq1050:max-w-full mq750:gap-[28px] mq750:pt-9 mq750:pr-[30px] mq750:pb-9 mq750:box-border">
          <div className="self-stretch flex flex-row items-center justify-start max-w-full mq750:gap-[28px]">
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                Dashboard
              </h1>
              <div className="w-[444px] relative text-sm leading-[22px] inline-block max-w-full">
                Appointments, insights and more
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-m3-sys-light-on-primary box-border flex flex-row flex-wrap items-center justify-start py-[18px] px-[19px] gap-[20px] max-w-full text-lg text-neutral-9-200 border-[1px] border-solid border-gainsboro-200">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icons2.svg"
            />
            <b className="flex-1 relative leading-[28px] inline-block min-w-[330px] max-w-full">
              Complete your profile to reach wider audience.
            </b>
            <Button
              className="h-[34px] w-[132px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#04a3a3",
                border: "#04a3a3 solid 1px",
                borderRadius: "4px",
                "&:hover": { background: "#04a3a3" },
                width: 132,
                height: 34,
              }}
            >
              Update Profile
            </Button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-xl">
            <div className="self-stretch flex flex-row items-center justify-start">
              <h3 className="m-0 relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                Appointments Today
              </h3>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[242px] pl-0 box-border gap-[24px_22px] max-w-full text-base text-neutral-9-200 mq1050:pr-[120px] mq1050:box-border mq750:pr-[60px] mq750:box-border">
              <div className="flex-1 rounded-xl bg-m3-sys-light-on-primary box-border flex flex-col items-end justify-center py-[22px] px-[23px] gap-[16px] min-w-[140px] max-w-full border-[1px] border-solid border-silver-200">
                <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Feb 23, 2024
                    </div>
                    <div className="rounded bg-cyan-1 hidden flex-row items-center justify-center py-px px-2 z-[2] text-center text-sm text-sunset-orange-6">
                      <div className="relative leading-[22px] font-semibold">
                        OTF
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-m3-sys-light-on-primary flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[0px] [row-gap:20px] text-xl text-gray-900 mq750:flex-wrap mq750:justify-center">
                    <div className="w-[254px] flex flex-row items-start justify-center gap-[8px]">
                      <div className="flex flex-row items-start justify-center py-2 px-0">
                        <div className="h-3 w-3 relative rounded-[50%] bg-vendor-colors-primary" />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                          Nathan Thompson
                        </h3>
                        <div className="self-stretch relative text-base leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-12 w-12 relative rounded-[50%] object-cover"
                      loading="lazy"
                      alt=""
                      src="/ellipse-202@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-sm mq450:flex-wrap">
                    <div className="w-[165px] flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/vuesaxlinearclock-1.svg"
                      />
                      <div className="flex-1 relative leading-[22px] inline-block min-w-[57px] whitespace-nowrap">
                        12:30 PM
                      </div>
                      <div className="relative leading-[22px] inline-block min-w-[14px]">{`to `}</div>
                      <div className="flex-1 relative leading-[22px] inline-block min-w-[60px] whitespace-nowrap">
                        01:00 PM
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-m3-ref-neutral-neutral30">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons-1.svg"
                      />
                      <div className="relative leading-[22px] inline-block min-w-[42px]">
                        Online
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center py-1 px-[5px]">
                    <Button
                      className="relative min-w-[100px]"
                      disableElevation={true}
                      variant="text"
                      sx={{ borderRadius: "0px 0px 0px 0px" }}
                    >
                      Cancel Booking
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-m3-sys-light-on-primary box-border flex flex-col items-end justify-center py-[22px] px-[23px] gap-[16px] min-w-[140px] max-w-full border-[1px] border-solid border-silver-200">
                <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                  <div className="self-stretch h-6 flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Feb 23, 2024
                    </div>
                    <div className="rounded bg-cyan-1 hidden flex-row items-center justify-center py-px px-2 z-[2] text-center text-sm text-sunset-orange-6">
                      <div className="relative leading-[22px] font-semibold">
                        OTF
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-m3-sys-light-on-primary flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[0px] [row-gap:20px] text-xl text-gray-900 mq750:flex-wrap mq750:justify-center">
                    <div className="w-[254px] flex flex-row items-start justify-center gap-[8px]">
                      <div className="flex flex-row items-start justify-center py-2 px-0">
                        <div className="h-3 w-3 relative rounded-[50%] bg-vendor-colors-primary" />
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit overflow-hidden text-ellipsis whitespace-nowrap mq450:text-base mq450:leading-[24px]">
                          Nathan Thompson
                        </h3>
                        <div className="self-stretch relative text-base leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-12 w-12 relative rounded-[50%] object-cover"
                      alt=""
                      src="/ellipse-202@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-sm mq450:flex-wrap">
                    <div className="w-[165px] flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/vuesaxlinearclock-1.svg"
                      />
                      <div className="flex-1 relative leading-[22px] inline-block min-w-[57px] whitespace-nowrap">
                        12:30 PM
                      </div>
                      <div className="relative leading-[22px] inline-block min-w-[14px]">{`to `}</div>
                      <div className="flex-1 relative leading-[22px] inline-block min-w-[60px] whitespace-nowrap">
                        01:00 PM
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[4px] text-m3-ref-neutral-neutral30">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons-1.svg"
                      />
                      <div className="relative leading-[22px] inline-block min-w-[42px]">
                        Online
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center py-1 px-[5px]">
                    <Button
                      className="relative min-w-[100px]"
                      disableElevation={true}
                      variant="text"
                      sx={{ borderRadius: "0px 0px 0px 0px" }}
                    >
                      Cancel Booking
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PractitionerDashboard;
