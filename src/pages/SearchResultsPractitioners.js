import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
  Autocomplete,
  Button,
} from "@mui/material";
import Component from "../components/Component";

const SearchResultsPractitioners = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] leading-[normal] tracking-[normal] text-left text-13xl text-text-primary font-web-primary-h3-primary-dm-sans mq750:gap-[20px]">
      <header className="self-stretch shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] bg-neutral-1 flex flex-row items-start justify-center py-[22px] px-5 gap-[704px] top-[0] z-[99] sticky border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
        <div className="w-[236px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[12.4px]">
            <img
              className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/the-healers-logo3@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/the-healers4@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[260px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-13xl bg-neutral-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/notifications-none1@2x.png"
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
                  src="/keyboard-arrow-down.png"
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
      <div className="self-stretch rounded-xl bg-neutral-1 overflow-hidden flex flex-col items-center justify-start py-6 px-5 box-border max-w-full">
        <form className="m-0 w-[1200px] overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
          <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[686px] max-w-full mq750:min-w-full mq1050:flex-wrap">
            <TextField
              className="[border:none] bg-[transparent] h-[72px] w-[642px] font-web-primary-h3-primary-dm-sans text-base text-m3-black max-w-full"
              color="primary"
              size="small"
              placeholder="Search for anything..."
              variant="outlined"
              type="search"
              sx={{
                "& .MuiInputBase-root": { height: "72px" },
                width: "642px",
              }}
            />
            <Autocomplete
              className="self-stretch flex-1 min-w-[258px] max-w-full w-auto"
              disablePortal
              options={["Location 1", "Location 2", "Location 3"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Location"
                  variant="outlined"
                  placeholder="Vancouver, Canada"
                  helperText=""
                />
              )}
            />
          </div>
          <Button
            className="h-[50px] w-[121px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)]"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#006cf0",
              border: "#006cf0 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#006cf0" },
              width: 121,
              height: 50,
            }}
          >
            Search
          </Button>
        </form>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border [row-gap:20px] max-w-full lg:flex-wrap lg:justify-start">
          <div className="h-9 w-4 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
            <div className="w-4 h-2 hidden flex-col items-start justify-start">
              <div className="w-px h-2 relative hidden" />
            </div>
          </div>
          <div className="w-[868px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Showing Best Practitioners in Vancouver, Canada
            </h1>
          </div>
          <div className="h-9 w-4 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
            <div className="w-4 h-2 hidden flex-col items-start justify-start">
              <div className="w-px h-2 relative hidden" />
            </div>
          </div>
          <div className="w-[857px] hidden flex-row items-start justify-start max-w-full text-base text-text-secondary font-h5-medium">
            <div className="h-7 flex-1 relative tracking-[0.15px] leading-[175%] flex items-center max-w-full">
              Description
            </div>
          </div>
          <Component />
        </div>
      </div>
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[88px] max-w-full text-left text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans lg:gap-[44px] mq750:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="h-[1063px] w-[216px] bg-neutral-1 overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[877px] box-border gap-[8px] lg:pb-[570px] lg:box-border mq750:hidden mq750:pb-60 mq750:box-border mq1050:pb-[370px] mq1050:box-border">
              <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 flex flex-row items-start justify-start pt-0 px-0 pb-2 shrink-0 [debug_commit:1de1738]">
                <b className="relative leading-[28px] inline-block min-w-[56px]">
                  Filters
                </b>
              </div>
              <div className="self-stretch h-[142px] shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[12px] [debug_commit:1de1738] text-base">
                <div className="relative leading-[24px] font-semibold inline-block min-w-[64px]">
                  Applied:
                </div>
                <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[61px] pl-0 gap-[8px_6px] mq450:pr-5 mq450:box-border">
                  <button className="cursor-pointer [border:none] py-0.5 px-1 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/left-icon.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-1">
                      <b className="relative text-xs leading-[20px] uppercase inline-block font-web-primary-h3-primary-dm-sans text-highlight-darkest text-center min-w-[35px]">
                        Yoga
                      </b>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-3 h-3 relative overflow-hidden shrink-0"
                        alt=""
                        src="/cancel.svg"
                      />
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-0.5 px-1 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/left-icon.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-1">
                      <b className="relative text-xs leading-[20px] uppercase inline-block font-web-primary-h3-primary-dm-sans text-highlight-darkest text-center min-w-[46px]">
                        5 Miles
                      </b>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-3 h-3 relative overflow-hidden shrink-0"
                        alt=""
                        src="/cancel.svg"
                      />
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-0.5 px-1 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
                    <img
                      className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/left-icon.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-1">
                      <b className="relative text-xs leading-[20px] uppercase inline-block font-web-primary-h3-primary-dm-sans text-highlight-darkest text-center min-w-[123px] whitespace-nowrap">
                        08:00 AM - 12:00 PM
                      </b>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-3 h-3 relative overflow-hidden shrink-0"
                        alt=""
                        src="/cancel.svg"
                      />
                    </div>
                  </button>
                </div>
                <div className="rounded overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-[8px]">
                  <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/wrapper-1@2x.png"
                    />
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm [text-decoration:underline] leading-[22px] font-web-primary-h3-primary-dm-sans text-royalblue text-center inline-block min-w-[54px]">
                    Clear All
                  </button>
                </div>
              </div>
              <div className="self-stretch h-[1282px] shadow-[-2px_0px_0px_#1890ff_inset] bg-neutral-1 overflow-y-auto shrink-0 flex flex-col items-start justify-start [debug_commit:1de1738] text-sm text-m3-black">
                <div className="self-stretch h-[1234px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-3 px-6 gap-[17px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[127px]">
                        Service Categories
                      </div>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/keyboard-arrow-up.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch bg-neutral-1 flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <input
                              className="m-0 w-6 h-6 relative rounded overflow-hidden shrink-0"
                              type="checkbox"
                            />
                          </div>
                          <div className="flex-1 relative leading-[22px]">
                            Psychologists and Counselors
                          </div>
                          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                              <img
                                className="w-6 h-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/keyboard-arrow-up.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="self-stretch relative leading-[22px]">
                                Trauma
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="self-stretch relative leading-[22px]">
                                Pediatric
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="self-stretch relative leading-[22px]">
                                Psychoanalysis
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="self-stretch relative leading-[22px]">
                                DBT
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                            <input
                              className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                              type="checkbox"
                            />
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="relative leading-[22px] inline-block min-w-[112px]">
                                Psychodynamics
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch bg-neutral-1 flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                          <input
                            className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                            type="checkbox"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <div className="self-stretch relative leading-[22px]">
                              Mind
                            </div>
                          </div>
                          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/keyboard-arrow-up.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <Button
                          className="self-stretch h-12"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            borderColor: "#f2f4f8",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#f2f4f8" },
                            height: 48,
                          }}
                        >
                          Life Counseling
                        </Button>
                        <Button
                          className="self-stretch h-12"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            borderColor: "#f2f4f8",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#f2f4f8" },
                            height: 48,
                          }}
                        >
                          Hypnotherapy
                        </Button>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                              <input
                                className="m-0 w-6 h-6 relative rounded overflow-hidden shrink-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex-1 relative leading-[22px]">
                              Spiritual help and guidance
                            </div>
                          </div>
                        </div>
                        <Button
                          className="self-stretch h-12"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            borderColor: "#f2f4f8",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#f2f4f8" },
                            height: 48,
                          }}
                        >
                          Meditation
                        </Button>
                        <div className="self-stretch hidden flex-col items-end justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="h-[22px] flex-1 relative leading-[22px] inline-block shrink-0">
                              Title
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch bg-neutral-1 flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                          <input
                            className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                            type="checkbox"
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <div className="self-stretch relative leading-[22px]">
                              Body
                            </div>
                          </div>
                          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/keyboard-arrow-up.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                              <div className="w-6 h-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            </div>
                            <div className="flex-1 relative leading-[22px]">
                              Acupuncture and Acupressure
                            </div>
                          </div>
                        </div>
                        <Button
                          className="self-stretch h-12"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            borderColor: "#f2f4f8",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#f2f4f8" },
                            height: 48,
                          }}
                        >
                          Massage
                        </Button>
                        <Button
                          className="self-stretch h-12"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            borderColor: "#f2f4f8",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#f2f4f8" },
                            height: 48,
                          }}
                        >
                          Yoga
                        </Button>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                              <input
                                className="m-0 w-6 h-6 relative rounded overflow-hidden shrink-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="flex-1 relative leading-[44px] whitespace-nowrap">
                              Trauma release exercises
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-col items-end justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="h-[22px] flex-1 relative leading-[22px] inline-block shrink-0">
                              Title
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                      <Button
                        className="self-stretch h-12"
                        endIcon={
                          <img
                            width="24px"
                            height="24px"
                            src="/keyboard-arrow-up-4.svg"
                          />
                        }
                        disableElevation={true}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#000",
                          fontSize: "14",
                          background: "#fff",
                          borderColor: "#f2f4f8",
                          borderWidth: "0px 0px 2px 0px",
                          borderStyle: "solid",
                          borderRadius: "0px 0px 0px 0px",
                          "&:hover": { background: "#fff" },
                          height: 48,
                        }}
                      >
                        Medicine
                      </Button>
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                              <div className="self-stretch h-[22px] relative leading-[22px] flex items-center">
                                Naturopath
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="self-stretch w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                              <div className="w-6 h-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            </div>
                            <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                              Traditional chinese medicine
                            </div>
                          </div>
                        </div>
                        <Button
                          className="self-stretch h-12"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#000",
                            fontSize: "14",
                            borderColor: "#f2f4f8",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#f2f4f8" },
                            height: 48,
                          }}
                        >
                          Ayurvedic
                        </Button>
                        <div className="self-stretch flex flex-row items-start justify-end pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                          <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                            <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                            <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                              <div className="self-stretch h-[22px] relative leading-[22px] flex items-center">
                                Homeopathy
                              </div>
                            </div>
                          </div>
                        </div>
                        <TextField
                          className="[border:none] bg-[transparent] self-stretch h-12 font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                          placeholder="Title"
                          variant="standard"
                          sx={{
                            "& .MuiInputBase-root": {
                              height: "48px",
                              fontSize: "14px",
                            },
                            "& .MuiInputBase-input": { color: "#000" },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] text-neutral-11">
                  <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
                    <div className="h-[22px] w-[60px] relative leading-[22px] font-semibold inline-block">
                      Distance
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/keyboard-arrow-down-1.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-72 overflow-hidden shrink-0 flex flex-col items-center justify-start text-m3-black">
                    <div className="w-[296px] flex-1 box-border flex flex-col items-start justify-center py-3 px-4 text-neutral-11 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                          Auto(25 Miles)
                        </div>
                      </div>
                    </div>
                    <div className="w-[296px] flex-1 box-border flex flex-col items-start justify-center py-3 px-4 text-neutral-11 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                          1 Mile
                        </div>
                      </div>
                    </div>
                    <div className="w-64 flex-1 box-border flex flex-col items-start justify-center py-3 px-4 text-neutral-11 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                          5 Miles
                        </div>
                      </div>
                    </div>
                    <div className="w-64 flex-1 box-border flex flex-col items-start justify-center py-3 px-4 text-neutral-11 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                          10 Miles
                        </div>
                      </div>
                    </div>
                    <div className="w-64 flex-1 box-border flex flex-col items-start justify-center py-3 px-4 text-neutral-11 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                          25 Miles
                        </div>
                      </div>
                    </div>
                    <div className="w-64 flex-1 box-border flex flex-col items-start justify-center py-3 px-4 text-neutral-11 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                          50+ Miles
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">{`Acupuncture & Acupressure`}</div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Massage
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Naturopath
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-11 flex-1 relative tracking-[-0.11px] leading-[22px] flex items-center">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="w-[296px] box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative leading-[22px] inline-block">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row flex-wrap items-start justify-end gap-[24px_23px] min-h-[1196px] max-w-[calc(100%_-_256px)] text-xl text-neutral-10 mq750:max-w-full">
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/monogram@2x.png"
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
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-11@2x.png"
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
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="w-[298px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-neutral-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start p-4">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                      <img
                        className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                        alt=""
                        src="/monogram-21@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                          Shapes
                        </h3>
                        <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                          Massage, Yoga, Acupuncture, Trauma release exercises
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/media@2x.png"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
                    <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                      <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
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
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
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
              <div className="flex-1 flex flex-row items-center justify-between min-w-[897px] max-w-full gap-[20px] text-center text-sm text-m3-black mq750:flex-wrap mq1050:min-w-full">
                <div className="relative leading-[22px] font-semibold">
                  Showing 12 Results out of 120
                </div>
                <div className="flex flex-row items-center justify-center py-4 pr-0 pl-8 box-border gap-[32px] max-w-full text-neutral-7 mq450:flex-wrap mq450:gap-[16px]">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/navigate-before.svg"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <div className="rounded-3xl bg-consumer-colors-primary-1 flex flex-col items-center justify-center py-px px-[9.5px] text-darkorange">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[5px]">
                        1
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[9px]">
                        2
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[9px]">
                        3
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[9px]">
                        4
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[9px]">
                        5
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-center justify-center py-px px-[7px]">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[10px]">
                        ...
                      </div>
                    </div>
                    <div className="rounded-3xl flex flex-col items-center justify-center py-px px-[4.5px]">
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[15px]">
                        10
                      </div>
                    </div>
                  </div>
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/navigate-next.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-mid text-gray-200 font-web-primary-h3-primary-dm-sans mq750:gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[54.9px] lg:flex-wrap mq750:gap-[27px]">
              <div className="w-[248px] flex flex-col items-start justify-start gap-[32px] text-mini text-gray-700">
                <div className="w-[236px] flex flex-row items-end justify-start gap-[12.4px]">
                  <img
                    className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/the-healers-logo2.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
                    <img
                      className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0"
                      alt=""
                      src="/the-healers3.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative tracking-[-0.1px] leading-[26px] mix-blend-normal">
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
                <div className="relative tracking-[-0.2px] leading-[22px]">
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

export default SearchResultsPractitioners;
