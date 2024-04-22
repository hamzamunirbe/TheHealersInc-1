import { useCallback } from "react";
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
import { useNavigate } from "react-router-dom";

const SearchResultsServices = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/search-results-services");
  }, [navigate]);

  const onPractitionersTextClick = useCallback(() => {
    navigate("/search-results-practitioners");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] tracking-[normal] leading-[normal] text-left text-base text-text-primary font-web-primary-h3-primary-dm-sans mq750:gap-[20px]">
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
      <div className="self-stretch rounded-xl bg-neutral-1 overflow-hidden flex flex-col items-center justify-start py-6 px-5 box-border max-w-full">
        <form className="m-0 w-[1200px] overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
          <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[686px] max-w-full mq1050:flex-wrap mq750:min-w-full">
            <TextField
              className="[border:none] bg-[transparent] w-[642px] font-web-primary-h3-primary-dm-sans text-base text-m3-black max-w-full"
              variant="outlined"
              placeholder="Search for anything..."
              type="search"
              sx={{
                "& .MuiInputBase-root": { height: "72px" },
                width: "642px",
              }}
            />
            <Autocomplete
              className="h-[72px] flex-1 min-w-[258px] max-w-full"
              disablePortal
              options={[]}
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
        <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full [row-gap:20px] lg:flex-wrap lg:justify-start">
          <div className="h-9 w-4 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
            <div className="w-4 h-2 hidden flex-col items-start justify-start">
              <div className="w-px h-2 relative hidden" />
            </div>
          </div>
          <div className="w-[868px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-13xl">
            <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Showing Best Services in Vancouver, Canada
            </h1>
          </div>
          <div className="h-9 w-4 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
            <div className="w-4 h-2 hidden flex-col items-start justify-start">
              <div className="w-px h-2 relative hidden" />
            </div>
          </div>
          <div className="w-[857px] hidden flex-row items-start justify-start max-w-full text-text-secondary font-h5-medium">
            <div className="h-7 flex-1 relative tracking-[0.15px] leading-[175%] flex items-center max-w-full">
              Description
            </div>
          </div>
          <div className="w-[300px] flex flex-row items-start justify-between pt-5 pb-[19px] pr-6 pl-[42px] box-border relative gap-[20px] text-center text-neutral-1 mq450:pl-5 mq450:box-border">
            <div className="h-[50px] w-full absolute !m-[0] top-[calc(50%_-_25px)] right-[0px] left-[0px] rounded-13xl bg-neutral-1 box-border border-[1px] border-solid border-whitesmoke-500" />
            <div className="flex flex-row items-start justify-start relative">
              <div className="h-[50px] w-[150px] absolute !m-[0] top-[calc(50%_-_25px)] left-[calc(50%_-_75px)] rounded-tl-13xl rounded-tr-none rounded-br-none rounded-bl-13xl bg-darkorange z-[1]" />
              <div
                className="relative leading-[24px] font-semibold inline-block min-w-[66px] cursor-pointer z-[2]"
                onClick={onServicesTextClick}
              >
                Services
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-neutral-8">
              <div
                className="relative leading-[24px] font-semibold inline-block min-w-[101px] cursor-pointer z-[1]"
                onClick={onPractitionersTextClick}
              >
                Practitioners
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[88px] max-w-full text-left text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans lg:gap-[44px] mq750:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
            <div className="w-[216px] flex flex-col items-start justify-start gap-[8px] mq750:hidden">
              <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 flex flex-row items-start justify-start pt-0 px-0 pb-2">
                <b className="relative leading-[28px] inline-block min-w-[56px]">
                  Filters
                </b>
              </div>
              <div className="self-stretch h-[142px] shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[12px] text-base">
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
                <div className="rounded overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-[8px] text-center text-sm text-royalblue">
                  <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/wrapper-1@2x.png"
                    />
                  </div>
                  <div className="relative [text-decoration:underline] leading-[22px] inline-block min-w-[54px]">
                    Clear All
                  </div>
                </div>
              </div>
              <form className="m-0 self-stretch shadow-[-2px_0px_0px_#1890ff_inset] bg-neutral-1 overflow-hidden flex flex-col items-start justify-start">
                <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <FormControl
                    className="self-stretch h-12 shadow-[0px_-1px_0px_#f0f0f0_inset] font-web-primary-h3-primary-dm-sans font-semibold text-sm text-m3-black shrink-0 [debug_commit:1de1738]"
                    variant="standard"
                    sx={{
                      borderTopWidth: "2px",
                      borderRightWidth: "2px",
                      borderBottomWidth: "2px",
                      borderLeftWidth: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "48px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "SemiBold",
                        fontFamily: "DM Sans",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "24px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/keyboard-arrow-down-1.svg"
                          style={{ marginRight: "24px" }}
                        />
                      )}
                    >
                      <MenuItem>Service Categories</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="self-stretch h-[896px] overflow-hidden shrink-0 flex flex-col items-start justify-start [debug_commit:1de1738]">
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
                      All
                    </Button>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Trauma
                          </div>
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
                      Pediatric
                    </Button>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Psychoanalysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            DBT
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Psychodynamic
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Life Counseling
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Hypnotherapy
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                          <div className="w-6 h-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <FormControl
                      className="self-stretch h-[68px] font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                      variant="standard"
                      sx={{
                        borderColor: "#f2f4f8",
                        borderStyle: "SOLID",
                        borderTopWidth: "0px",
                        borderRightWidth: "0px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "0px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "68px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "68px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "68px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "68px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "68px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "DM Sans",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "56px",
                        },
                      }}
                    >
                      <InputLabel color="primary" />
                      <Select
                        color="primary"
                        disableUnderline
                        displayEmpty
                        IconComponent="null"
                      >
                        <MenuItem>{`Acupuncture & Acupressure`}</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Massage
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] z-[1] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Yoga
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-start py-3 px-4 z-[2] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                          <div className="w-6 h-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] z-[3] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Naturopath
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-start py-3 px-4 z-[4] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                          <div className="w-6 h-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] z-[5] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Ayurvedic
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-3 px-4 pb-[9px] z-[6] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                          <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                            Homeopathy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <FormControl
                    className="self-stretch h-12 shadow-[0px_-1px_0px_#f0f0f0_inset] font-web-primary-h3-primary-dm-sans font-semibold text-sm text-m3-black shrink-0"
                    variant="standard"
                    sx={{
                      borderTopWidth: "2px",
                      borderRightWidth: "2px",
                      borderBottomWidth: "2px",
                      borderLeftWidth: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "48px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "SemiBold",
                        fontFamily: "DM Sans",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "24px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/keyboard-arrow-down-2.svg"
                          style={{ marginRight: "24px" }}
                        />
                      )}
                    >
                      <MenuItem>Distance</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="self-stretch h-72 overflow-hidden shrink-0 flex flex-col items-center justify-start">
                    <TextField
                      className="self-stretch h-12 font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                      variant="standard"
                      select
                      value={1}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginLeft: "16px", marginRight: "16px" }}
                          >
                            <img
                              width="24px"
                              height="24px"
                              src="/-hidden.svg"
                            />
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{ IconComponent: () => null }}
                      sx={{
                        borderColor: "#f2f4f8",
                        borderStyle: "SOLID",
                        borderTopWidth: "0px",
                        borderRightWidth: "0px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "0px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "48px",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          { borderBottom: "none" },
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "DM Sans",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <MenuItem value={1}>Auto(25 Miles)</MenuItem>
                    </TextField>
                    <TextField
                      className="self-stretch h-12 font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                      variant="standard"
                      select
                      value={1}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginLeft: "16px", marginRight: "16px" }}
                          >
                            <img
                              width="24px"
                              height="24px"
                              src="/-hidden-1.svg"
                            />
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{ IconComponent: () => null }}
                      sx={{
                        borderColor: "#f2f4f8",
                        borderStyle: "SOLID",
                        borderTopWidth: "0px",
                        borderRightWidth: "0px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "0px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "48px",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          { borderBottom: "none" },
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "DM Sans",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <MenuItem value={1}>1 Mile</MenuItem>
                    </TextField>
                    <TextField
                      className="self-stretch h-12 font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                      variant="standard"
                      select
                      value={1}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginLeft: "16px", marginRight: "16px" }}
                          >
                            <img
                              width="24px"
                              height="24px"
                              src="/-hidden-2.svg"
                            />
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{ IconComponent: () => null }}
                      sx={{
                        borderColor: "#f2f4f8",
                        borderStyle: "SOLID",
                        borderTopWidth: "0px",
                        borderRightWidth: "0px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "0px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "48px",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          { borderBottom: "none" },
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "DM Sans",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <MenuItem value={1}>5 Miles</MenuItem>
                    </TextField>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          10 Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          25 Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          50+ Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">{`Acupuncture & Acupressure`}</div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Massage
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Naturopath
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-11 flex-1 relative text-sm tracking-[-0.11px] leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <FormControl
                    className="self-stretch h-12 shadow-[0px_-1px_0px_#f0f0f0_inset] font-web-primary-h3-primary-dm-sans font-semibold text-sm text-m3-black shrink-0"
                    variant="standard"
                    sx={{
                      borderTopWidth: "2px",
                      borderRightWidth: "2px",
                      borderBottomWidth: "2px",
                      borderLeftWidth: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "48px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "SemiBold",
                        fontFamily: "DM Sans",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "24px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/keyboard-arrow-down-3.svg"
                          style={{ marginRight: "24px" }}
                        />
                      )}
                    >
                      <MenuItem>Price</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="self-stretch h-48 overflow-hidden shrink-0 flex flex-col items-center justify-start">
                    <TextField
                      className="self-stretch h-12 font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                      variant="standard"
                      select
                      value={1}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginLeft: "16px", marginRight: "16px" }}
                          >
                            <img
                              width="24px"
                              height="24px"
                              src="/-hidden-6.svg"
                            />
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{ IconComponent: () => null }}
                      sx={{
                        borderColor: "#f2f4f8",
                        borderStyle: "SOLID",
                        borderTopWidth: "0px",
                        borderRightWidth: "0px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "0px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "48px",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          { borderBottom: "none" },
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "DM Sans",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <MenuItem value={1}>$0 - $30</MenuItem>
                    </TextField>
                    <TextField
                      className="self-stretch h-12 font-web-primary-h3-primary-dm-sans text-sm text-m3-black"
                      variant="standard"
                      select
                      value={1}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginLeft: "16px", marginRight: "16px" }}
                          >
                            <img
                              width="24px"
                              height="24px"
                              src="/-hidden-7.svg"
                            />
                          </InputAdornment>
                        ),
                      }}
                      SelectProps={{ IconComponent: () => null }}
                      sx={{
                        borderColor: "#f2f4f8",
                        borderStyle: "SOLID",
                        borderTopWidth: "0px",
                        borderRightWidth: "0px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "0px",
                        borderRadius: "0px 0px 0px 0px",
                        width: "100%",
                        height: "48px",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          { borderBottom: "none" },
                        "& .MuiInputBase-root": { height: "100%" },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 14,
                          fontWeight: "Regular",
                          fontFamily: "DM Sans",
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <MenuItem value={1}>$30 - $60</MenuItem>
                    </TextField>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          $60 - $100
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          $100+
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          25 Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          50+ Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">{`Acupuncture & Acupressure`}</div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Massage
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Naturopath
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-11 flex-1 relative text-sm tracking-[-0.11px] leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <FormControl
                    className="self-stretch h-12 shadow-[0px_-1px_0px_#f0f0f0_inset] font-web-primary-h3-primary-dm-sans font-semibold text-sm text-m3-black shrink-0 [debug_commit:1de1738]"
                    variant="standard"
                    sx={{
                      borderTopWidth: "2px",
                      borderRightWidth: "2px",
                      borderBottomWidth: "2px",
                      borderLeftWidth: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "48px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "SemiBold",
                        fontFamily: "DM Sans",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "24px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/keyboard-arrow-down-4.svg"
                          style={{ marginRight: "24px" }}
                        />
                      )}
                    >
                      <MenuItem>Session Length</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start shrink-0 [debug_commit:1de1738]">
                    <div className="flex-1 flex flex-row items-start justify-start py-0 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start py-[21px] px-0 relative">
                          <div className="w-full h-1 absolute !m-[0] top-[calc(50%_-_2px)] right-[0px] left-[0px] rounded-81xl bg-cornflowerblue" />
                          <div className="self-stretch flex flex-row items-start justify-start relative">
                            <div className="h-1.5 w-[42px] absolute !m-[0] top-[calc(50%_-_3px)] left-[0px] rounded-81xl bg-primary-main z-[1]" />
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[2]">
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-gray-1300 w-full h-full z-[1]" />
                              </div>
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-gray-1300 w-full h-full z-[1]" />
                              </div>
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                              </div>
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                              </div>
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                              </div>
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                              </div>
                              <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                                <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                              </div>
                            </div>
                            <img
                              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[38px] rounded-81xl z-[3]"
                              alt=""
                              src="/-sliderthumb.svg"
                            />
                          </div>
                          <div className="w-[41px] hidden flex-col items-center justify-start z-[2]">
                            <div className="self-stretch rounded bg-grey-600 overflow-hidden flex flex-row items-center justify-center py-1 px-3">
                              <div className="h-[22px] flex-1 relative text-sm tracking-[0.1px] leading-[157%] font-medium font-h5-medium text-neutral-1 text-left inline-block">
                                20
                              </div>
                            </div>
                            <img
                              className="w-3 h-1.5 relative object-contain"
                              alt=""
                              src="/arrow.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-5 flex flex-row items-start justify-start">
                          <div className="self-stretch flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                            <div className="self-stretch w-4 relative text-sm tracking-[0.17px] leading-[143%] font-h5-medium text-text-secondary text-center flex items-center justify-center">
                              30
                            </div>
                          </div>
                          <div className="self-stretch flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                            <div className="self-stretch w-4 relative text-sm tracking-[0.17px] leading-[143%] font-h5-medium text-text-secondary text-center flex items-center justify-center">
                              60
                            </div>
                          </div>
                          <div className="self-stretch w-4 rounded-81xl overflow-hidden shrink-0 flex flex-row items-start justify-start">
                            <div className="self-stretch flex-1 relative text-sm tracking-[0.17px] leading-[143%] font-h5-medium text-text-secondary text-center flex items-center justify-center">
                              12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-[264px] flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          1 Mile
                        </div>
                      </div>
                    </div>
                    <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          5 Miles
                        </div>
                      </div>
                    </div>
                    <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          10 Miles
                        </div>
                      </div>
                    </div>
                    <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          25 Miles
                        </div>
                      </div>
                    </div>
                    <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          50+ Miles
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">{`Acupuncture & Acupressure`}</div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Massage
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Naturopath
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-11 flex-1 relative text-sm tracking-[-0.11px] leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-[264px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                    <div className="hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-neutral-1 overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
                    <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[34px]">
                      Time
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/keyboard-arrow-up.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                          Before 08:00 AM
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                          08:00 AM - 12:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                          12:00 PM - 04:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                          04:00 PM - 07:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                          After 07:00 PM
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          50+ Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">{`Acupuncture & Acupressure`}</div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Massage
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Naturopath
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
                  <FormControl
                    className="self-stretch h-12 shadow-[0px_-1px_0px_#f0f0f0_inset] font-web-primary-h3-primary-dm-sans font-semibold text-sm text-m3-black shrink-0"
                    variant="standard"
                    sx={{
                      borderTopWidth: "2px",
                      borderRightWidth: "2px",
                      borderBottomWidth: "2px",
                      borderLeftWidth: "2px",
                      backgroundColor: "#fff",
                      borderRadius: "0px 0px 0px 0px",
                      width: "100%",
                      height: "48px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "SemiBold",
                        fontFamily: "DM Sans",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "24px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="24px"
                          height="24px"
                          src="/keyboard-arrow-down-5.svg"
                          style={{ marginRight: "24px" }}
                        />
                      )}
                    >
                      <MenuItem>Session Type</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <div className="self-stretch h-36 overflow-hidden shrink-0 flex flex-col items-center justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          All
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Online
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-500">
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
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          On-Site
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          10 Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          25 Miles
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="overflow-hidden flex flex-row items-center justify-start">
                          <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/-hidden.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          50+ Miles
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Spiritual Help and Guidance
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">{`Acupuncture & Acupressure`}</div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Massage
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Yoga
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Trauma release exercises
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Naturopath
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-11 flex-1 relative text-sm tracking-[-0.11px] leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Traditional Chinese Medicine
                        </div>
                      </div>
                    </div>
                    <div className="w-[296px] box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                    <div className="w-64 box-border hidden flex-col items-start justify-center pt-3 px-4 pb-[9px] border-b-[2px] border-solid border-whitesmoke-500">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                        <div className="h-6 w-6 relative rounded bg-whitesmoke-400 overflow-hidden shrink-0" />
                        <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_256px)] text-5xl text-neutral-11 mq750:max-w-full">
              <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
                <img
                  className="h-[250px] w-[312px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[250px] mq1050:flex-1"
                  loading="lazy"
                  alt=""
                  src="/featured-image2@2x.png"
                />
                <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[411px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="w-[295.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                      <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[29px]">
                        Yoga
                      </h2>
                      <div className="relative text-base leading-[24px] font-semibold text-neutral-8 inline-block min-w-[119px]">
                        The Star Studio
                      </div>
                    </div>
                    <b className="relative text-13xl leading-[48px] inline-block min-w-[62px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Unwind and rejuvenate with our calming yoga class, designed
                    to cultivate strength, flexibility, and inner peace. Led by
                    experienced instructors, this class offers a harmonious
                    blend of gentle movements, mindful breathing, and relaxation
                    techniques to leave you feeling refreshed and centered."
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[16px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons1.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                        Online
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px] text-left">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/timezone-11.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                        GMT -05:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
                <img
                  className="h-[250px] w-[312px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[250px] mq1050:flex-1"
                  alt=""
                  src="/featured-image-11@2x.png"
                />
                <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[411px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="w-[295.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                      <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[129px] mq450:text-lgi mq450:leading-[29px]">
                        Meditation
                      </h2>
                      <div className="relative text-base leading-[24px] font-semibold text-neutral-8">
                        Oxygen Yoga and Fitness
                      </div>
                    </div>
                    <b className="relative text-13xl leading-[48px] inline-block min-w-[62px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Immerse yourself in tranquility and self-discovery with our
                    meditation class. Guided by seasoned instructors, this
                    session offers a serene sanctuary to cultivate mindfulness,
                    reduce stress, and find inner clarity through breath
                    awareness and guided visualization.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[16px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons1.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                        Online
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px] text-left">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/timezone-11.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                        GMT -05:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
                <img
                  className="h-[250px] w-[312px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[250px] mq1050:flex-1"
                  alt=""
                  src="/featured-image-2@2x.png"
                />
                <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[411px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="w-[295.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                      <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[79px] mq450:text-lgi mq450:leading-[29px]">
                        Pilates
                      </h2>
                      <div className="relative text-base leading-[24px] font-semibold text-neutral-8 inline-block min-w-[104px]">
                        Young and Fit
                      </div>
                    </div>
                    <b className="relative text-13xl leading-[48px] inline-block min-w-[62px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Elevate your fitness routine with our dynamic Pilates class.
                    Led by certified instructors, this energizing session
                    focuses on strengthening your core, improving flexibility,
                    and enhancing overall body alignment through controlled
                    movements and precise breathing techniques.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[16px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons1.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                        Online
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px] text-left">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/timezone-11.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                        GMT -05:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
                <img
                  className="h-[250px] w-[312px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[250px] mq1050:flex-1"
                  alt=""
                  src="/featured-image-2@2x.png"
                />
                <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[411px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="w-[295.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                      <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[79px] mq450:text-lgi mq450:leading-[29px]">
                        Pilates
                      </h2>
                      <div className="relative text-base leading-[24px] font-semibold text-neutral-8 inline-block min-w-[104px]">
                        Young and Fit
                      </div>
                    </div>
                    <b className="relative text-13xl leading-[48px] inline-block min-w-[62px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Elevate your fitness routine with our dynamic Pilates class.
                    Led by certified instructors, this energizing session
                    focuses on strengthening your core, improving flexibility,
                    and enhancing overall body alignment through controlled
                    movements and precise breathing techniques.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[16px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons1.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                        Online
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px] text-left">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/timezone-11.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                        GMT -05:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1050:flex-wrap">
                <img
                  className="h-[250px] w-[312px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[250px] mq1050:flex-1"
                  alt=""
                  src="/featured-image-2@2x.png"
                />
                <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[411px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                    <div className="w-[295.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                      <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[79px] mq450:text-lgi mq450:leading-[29px]">
                        Pilates
                      </h2>
                      <div className="relative text-base leading-[24px] font-semibold text-neutral-8 inline-block min-w-[104px]">
                        Young and Fit
                      </div>
                    </div>
                    <b className="relative text-13xl leading-[48px] inline-block min-w-[62px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Elevate your fitness routine with our dynamic Pilates class.
                    Led by certified instructors, this energizing session
                    focuses on strengthening your core, improving flexibility,
                    and enhancing overall body alignment through controlled
                    movements and precise breathing techniques.
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[16px] text-center text-sm text-neutral-10 mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px]">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/icons1.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[44px]">
                        Online
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px] text-left">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/timezone-11.svg"
                      />
                      <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
                        GMT -05:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-center text-sm text-m3-black mq750:flex-wrap">
                <div className="relative leading-[22px] font-semibold">
                  Showing 12 Results out of 120
                </div>
                <div className="flex flex-row items-center justify-center py-4 pr-0 pl-8 box-border gap-[32px] max-w-full text-neutral-7 mq450:flex-wrap mq450:gap-[16px]">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
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
                      loading="lazy"
                      alt=""
                      src="/navigate-next.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-mid text-gray-200 font-web-primary-h3-primary-dm-sans mq750:gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[54.9px] max-w-full lg:flex-wrap mq750:gap-[27px]">
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
                <div className="self-stretch h-[104px] relative tracking-[-0.1px] leading-[26px] inline-block mix-blend-normal">
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
              <div className="flex flex-row items-start justify-start gap-[54.8px] max-w-full mq750:flex-wrap mq750:gap-[27px]">
                <div className="flex flex-col items-start justify-start gap-[16px] min-w-[224px] mq750:flex-1">
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
                <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px] min-w-[186.79999999999927px] mq750:flex-1">
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
                      loading="lazy"
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

export default SearchResultsServices;
