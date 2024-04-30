import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const Inbox = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary box-border flex flex-row items-start justify-center py-[22px] px-5 gap-[649.2px] top-[0] z-[99] sticky max-w-full border-[1px] border-solid border-gainsboro-100 lg:gap-[325px] mq750:gap-[162px] mq450:gap-[81px]">
        <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
            <img
              className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0 [debug_commit:1de1738]"
              loading="lazy"
              alt=""
              src="/the-healers-logo.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
              <img
                className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
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
      <main className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] max-w-full text-left text-xl text-m3-black font-web-secondary-underline-subtitle2-dm-sans">
        <div className="h-[911px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] text-neutral-8 border-r-[1px] border-solid border-silver-200 mq450:gap-[134px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Dashboard
              </h3>
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
            <div className="self-stretch rounded-lg bg-whitesmoke-1300 flex flex-row items-center justify-center py-4 px-3 gap-[12px] text-neutral-10">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-41.svg"
              />
              <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                Inbox
              </div>
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
        <div className="w-[349px] shadow-[1px_0px_0px_rgba(0,_0,_0,_0.08)] bg-m3-sys-light-on-primary overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[328px] box-border gap-[32px] max-w-full font-heading-h5 mq1050:pb-[213px] mq1050:box-border mq450:gap-[16px] mq450:pb-[138px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-6">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start">
                  <h3 className="m-0 relative text-inherit leading-[150%] font-semibold font-inherit inline-block min-w-[99px] mq450:text-base mq450:leading-[24px]">
                    Messages
                  </h3>
                </div>
                <div className="rounded-3xl bg-gray-gray200 flex flex-col items-start justify-start py-0.5 px-2 text-xs">
                  <div className="relative leading-[150%] font-semibold inline-block min-w-[14px]">
                    12
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative bg-gray1-1000" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm font-web-secondary-underline-subtitle2-dm-sans">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 gap-[8px]">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
                <img
                  className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/frame-10@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex-1 relative leading-[22px] font-semibold">
                        Elmer Laverty
                      </div>
                      <div className="relative leading-[22px] font-semibold text-gray1-900 inline-block min-w-[26px]">
                        12m
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[22px] text-gray-300">
                      Haha oh man 🔥
                    </div>
                  </div>
                  <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600 font-heading-h5">
                    <div className="h-[22px] rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2 box-border">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Question
                      </div>
                    </div>
                    <div className="h-[22px] flex-1 rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 box-border whitespace-nowrap text-green-green600">
                      <div className="self-stretch flex-1 relative leading-[150%] font-semibold">
                        Help wanted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-mediumslateblue-200 overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
                <img
                  className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-10-1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex-1 relative leading-[22px] font-semibold">
                        Florencio Dorrance
                      </div>
                      <div className="relative leading-[22px] font-semibold text-gray1-900 inline-block min-w-[30px]">
                        24m
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[22px] text-gray-300">
                      woohoooo
                    </div>
                  </div>
                  <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600 font-heading-h5">
                    <div className="h-[22px] rounded-xl bg-orange-orange200 hidden flex-row items-start justify-start py-0.5 px-2 box-border">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Question
                      </div>
                    </div>
                    <div className="h-[22px] rounded-xl box-border flex flex-row items-start justify-start py-0.5 px-[7px] whitespace-nowrap text-gray-gray600 border-[1px] border-solid border-gray-gray400">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Some content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
                <img
                  className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-10-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex-1 relative leading-[22px] font-semibold">
                        Lavern Laboy
                      </div>
                      <div className="relative leading-[22px] font-semibold text-gray1-900 inline-block min-w-[14px]">
                        1h
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[22px] text-gray-300">
                      Haha that's terrifying 😂
                    </div>
                  </div>
                  <div className="w-[167px] hidden flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px] text-xs text-orange-orange600 font-heading-h5">
                    <div className="h-[22px] rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2 box-border">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Bug
                      </div>
                    </div>
                    <div className="h-[22px] flex-1 rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 box-border text-green-green600">
                      <div className="self-stretch flex-1 relative leading-[150%] font-semibold">
                        Hacktoberfest
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
                <img
                  className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-10-3@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex-1 relative leading-[22px] font-semibold">
                        Titus Kitamura
                      </div>
                      <div className="relative leading-[22px] font-semibold text-gray1-900 inline-block min-w-[18px]">
                        5h
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[22px] text-gray-300">
                      omg, this is amazing
                    </div>
                  </div>
                  <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600 font-heading-h5">
                    <div className="h-[22px] rounded-xl bg-orange-orange200 flex flex-row items-start justify-start py-0.5 px-2 box-border">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Question
                      </div>
                    </div>
                    <div className="h-[22px] flex-1 rounded-xl box-border flex flex-row items-start justify-start py-0.5 px-[7px] whitespace-nowrap text-gray-gray600 border-[1px] border-solid border-gray-gray400">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Some content
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
                <img
                  className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-10-4@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex-1 relative leading-[22px] font-semibold">
                        Geoffrey Mott
                      </div>
                      <div className="relative leading-[22px] font-semibold text-gray1-900 inline-block min-w-[17px]">
                        2d
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[22px] text-gray-300">
                      aww 😍
                    </div>
                  </div>
                  <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-orange-orange600 font-heading-h5">
                    <div className="h-[22px] rounded-xl bg-orange-orange200 hidden flex-row items-start justify-start py-0.5 px-2 box-border">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Request
                      </div>
                    </div>
                    <div className="h-[22px] rounded-xl bg-green-green200 flex flex-row items-start justify-start py-0.5 px-2 box-border text-green-green600">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Request
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-3 gap-[16px]">
                <img
                  className="h-12 w-12 relative rounded-xl overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-10-5@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex-1 relative leading-[22px] font-semibold">
                        Alfonzo Schuessler
                      </div>
                      <div className="relative leading-[22px] font-semibold text-gray1-900 inline-block min-w-[18px]">
                        1m
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[22px] text-gray-300">
                      perfect!
                    </div>
                  </div>
                  <div className="w-[167px] hidden flex-row items-start justify-start gap-[8px] text-xs text-gray-gray600 font-heading-h5">
                    <div className="h-[22px] rounded-xl box-border hidden flex-row items-start justify-start py-0.5 px-2 whitespace-nowrap border-[1px] border-solid border-gray-gray400">
                      <div className="self-stretch relative leading-[150%] font-semibold whitespace-nowrap">
                        Some content
                      </div>
                    </div>
                    <div className="h-[22px] rounded-xl box-border flex flex-row items-start justify-start py-0.5 px-[7px] whitespace-nowrap border-[1px] border-solid border-gray-gray400">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Follow up
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[56px] min-w-[514px] max-w-full mq750:min-w-full mq450:gap-[28px]">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-6 gap-[20px] mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative rounded-3xs overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/frame-10-6@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Florencio Dorrance
                  </h3>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-2.5 px-4 bg-primary-10 rounded-lg flex flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/add-circle-outline.svg"
                />
              </button>
            </div>
            <div className="w-[660px] h-px relative bg-gray1-1000 max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start p-6 gap-[32px] text-sm mq750:pt-5 mq750:pb-5 mq750:box-border mq450:gap-[16px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="rounded-xl bg-whitesmoke-1100 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
                    <div className="relative leading-[22px]">
                      omg, this is amazing
                    </div>
                  </div>
                  <Button
                    className="w-[101px] h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#f1f1f1",
                      borderRadius: "12px",
                      "&:hover": { background: "#f1f1f1" },
                      width: 101,
                      height: 38,
                    }}
                  >
                    perfect! ✅
                  </Button>
                  <div className="rounded-xl bg-whitesmoke-1100 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
                    <div className="relative leading-[22px]">
                      Wow, this is really epic
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end text-m3-sys-light-on-primary">
                <div className="flex flex-col items-start justify-start">
                  <div className="rounded-xl bg-mediumslateblue-100 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
                    <div className="relative leading-[22px] inline-block min-w-[87px]">
                      How are you?
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start font-heading-h5">
                <div className="w-[182px] flex flex-col items-start justify-start gap-[10px]">
                  <Button
                    className="self-stretch h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#f1f1f1",
                      borderRadius: "12px",
                      "&:hover": { background: "#f1f1f1" },
                      height: 38,
                    }}
                  >
                    just ideas for next time
                  </Button>
                  <Button
                    className="self-stretch h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#f1f1f1",
                      borderRadius: "12px",
                      "&:hover": { background: "#f1f1f1" },
                      height: 38,
                    }}
                  >
                    I'll be there in 2 mins ⏰
                  </Button>
                  <div className="w-[217px] rounded-xl bg-whitesmoke-1100 hidden flex-row items-start justify-start py-2 px-4 box-border whitespace-nowrap">
                    <div className="h-[21px] flex-1 relative leading-[150%] inline-block">
                      Message content goes here
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="w-[185px] flex flex-col items-end justify-start gap-[10px]">
                  <Button
                    className="w-[101px] h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#615ef0",
                      borderRadius: "12px",
                      "&:hover": { background: "#615ef0" },
                      width: 101,
                      height: 38,
                    }}
                  >
                    woohoooo
                  </Button>
                  <Button
                    className="w-[117px] h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#615ef0",
                      borderRadius: "12px",
                      "&:hover": { background: "#615ef0" },
                      width: 117,
                      height: 38,
                    }}
                  >
                    Haha oh man
                  </Button>
                  <Button
                    className="self-stretch h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#615ef0",
                      borderRadius: "12px",
                      "&:hover": { background: "#615ef0" },
                      height: 38,
                    }}
                  >
                    Haha that's terrifying 😂
                  </Button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <Button
                    className="w-[61px] h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#f1f1f1",
                      borderRadius: "12px",
                      "&:hover": { background: "#f1f1f1" },
                      width: 61,
                      height: 38,
                    }}
                  >
                    aww
                  </Button>
                  <div className="rounded-xl bg-whitesmoke-1100 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
                    <div className="relative leading-[22px]">
                      omg, this is amazing
                    </div>
                  </div>
                  <Button
                    className="w-[118px] h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#f1f1f1",
                      borderRadius: "12px",
                      "&:hover": { background: "#f1f1f1" },
                      width: 118,
                      height: 38,
                    }}
                  >
                    woohoooo 🔥
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
            <TextField
              className="[border:none] bg-[transparent] h-12 flex-1 font-web-secondary-underline-subtitle2-dm-sans text-sm text-gray-300 max-w-full"
              placeholder="Type a message"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="24px" height="24px" src="/iconsax.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#e2e8f0" },
                "& .MuiInputBase-root": {
                  height: "48px",
                  backgroundColor: "#fff",
                  paddingRight: "20px",
                  borderRadius: "12px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.4)" },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inbox;
