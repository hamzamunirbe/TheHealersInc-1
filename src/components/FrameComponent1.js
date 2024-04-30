import { Button } from "@mui/material";

const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-xs text-neutral-10 font-web-secondary-underline-subtitle2-dm-sans mq450:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl">
        <h2 className="m-0 relative text-inherit leading-[30px] font-bold font-inherit inline-block min-w-[116px] mq450:text-base mq450:leading-[24px]">
          Verify Email
        </h2>
        <div className="self-stretch relative text-base leading-[24px]">
          <span>{`A 6 digit OTP has been sent to `}</span>
          <b>{`user@email.com `}</b>
          <span>Please verify to continue.</span>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-text-secondary mq450:flex-wrap">
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
            <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
            <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-text-primary">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfilled-1.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="flex-1 relative leading-[24px]">1</div>
              <div className="h-12 w-[110px] relative leading-[24px] text-m3-ref-neutral-neutral20-200 text-left hidden whitespace-nowrap">
                user@email.com
              </div>
              <div className="h-px w-6 hidden flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
            <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
            <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-text-primary">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfilled-1.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="flex-1 relative leading-[24px]">2</div>
              <div className="h-12 w-[110px] relative leading-[24px] text-m3-ref-neutral-neutral20-200 text-left hidden whitespace-nowrap">
                user@email.com
              </div>
              <div className="h-px w-6 hidden flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
            <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
            <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-text-primary">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfilled-1.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="flex-1 relative leading-[24px]">3</div>
              <div className="h-12 w-[110px] relative leading-[24px] text-m3-ref-neutral-neutral20-200 text-left hidden whitespace-nowrap">
                user@email.com
              </div>
              <div className="h-px w-6 hidden flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
            <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
            <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-text-primary">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfilled-1.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="flex-1 relative leading-[24px]">4</div>
              <div className="h-12 w-[110px] relative leading-[24px] text-m3-ref-neutral-neutral20-200 text-left hidden whitespace-nowrap">
                user@email.com
              </div>
              <div className="h-px w-6 hidden flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
            <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
            <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-text-primary">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfilled-1.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="flex-1 relative leading-[24px]">5</div>
              <div className="h-12 w-[110px] relative leading-[24px] text-m3-ref-neutral-neutral20-200 text-left hidden whitespace-nowrap">
                user@email.com
              </div>
              <div className="h-px w-6 hidden flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
            <div className="w-0 h-[18px] relative leading-[18px] flex items-center" />
            <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-text-primary">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starfilled-1.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="flex-1 relative leading-[24px]">6</div>
              <div className="h-12 w-[110px] relative leading-[24px] text-m3-ref-neutral-neutral20-200 text-left hidden whitespace-nowrap">
                user@email.com
              </div>
              <div className="h-px w-6 hidden flex-row items-center justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="w-10 h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder-1600" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
            <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
              Helper text
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end text-center">
        <div className="flex flex-row items-start justify-start gap-[2px]">
          <div className="relative leading-[18px]">{`Didn’t receive the code? `}</div>
          <div className="relative [text-decoration:underline] leading-[18px] text-mediumblue inline-block min-w-[41px]">
            Resend
          </div>
        </div>
      </div>
      <Button
        className="self-stretch h-[60px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] mq450:pl-5 mq450:pr-5 mq450:box-border"
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "18",
          background: "#006a6a",
          border: "#006a6a solid 1px",
          borderRadius: "4px",
          "&:hover": { background: "#006a6a" },
          height: 60,
        }}
      >
        Verify Email
      </Button>
      <Button
        className="w-[167px] h-[42px] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)]"
        startIcon={<img width="16px" height="16px" src="/wrapper.png" />}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#434343",
          fontSize: "14",
          background: "#fff",
          border: "#d9d9d9 solid 1px",
          borderRadius: "4px",
          "&:hover": { background: "#fff" },
          width: 167,
          height: 42,
        }}
      >
        Back to Sign Up
      </Button>
    </div>
  );
};

export default FrameComponent;
