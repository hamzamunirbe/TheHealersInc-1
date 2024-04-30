const AppointmentsHeader = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full text-left text-base text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq750:gap-[28px]">
      <div className="w-[444px] flex flex-col items-start justify-start gap-[8px] max-w-full text-13xl">
        <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
          Appointments
        </h1>
        <div className="self-stretch relative text-sm leading-[22px]">
          View your upcoming and pending appointments
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-neutral-7 mq750:flex-wrap">
        <div className="w-[289px] flex flex-row items-start justify-start">
          <div className="h-[42px] flex-1 flex flex-col items-center justify-center relative text-teal-100">
            <div className="!m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-[9px] px-4 box-border gap-[8px] h-full w-full">
              <div className="hidden flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/starsharp.svg"
                />
              </div>
              <b className="relative leading-[24px] inline-block min-w-[80px]">
                Upcoming
              </b>
            </div>
            <div className="w-[calc(100%_+_2px)] h-0.5 absolute !m-[0] right-[-2px] bottom-[-2px] left-[0px] box-border border-t-[2px] border-solid border-teal-100" />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start py-[9px] px-4 gap-[8px]">
              <div className="hidden flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/starsharp-1.svg"
                />
              </div>
              <div className="relative leading-[24px] inline-block min-w-[60px]">
                Pending
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="flex flex-row items-start justify-start py-[9px] px-4 gap-[8px]">
              <div className="hidden flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/starsharp-1.svg"
                />
              </div>
              <div className="relative leading-[24px] inline-block min-w-[53px]">
                History
              </div>
            </div>
          </div>
        </div>
        <div className="w-[] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
            <button className="cursor-pointer py-[3px] px-3 bg-m3-sys-light-on-primary h-8 flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] rounded box-border flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-gainsboro-200">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/wrapper2@2x.png"
                  />
                </div>
              </div>
              <b className="relative text-smi leading-[22px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-character-title-85-700 text-center min-w-[72px]">
                Date Range
              </b>
            </button>
            <button className="cursor-pointer py-[3px] px-3 bg-m3-sys-light-on-primary shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] rounded flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-gainsboro-200">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/spa.svg"
                />
              </div>
              <b className="relative text-smi leading-[22px] inline-block font-web-secondary-underline-subtitle2-dm-sans text-character-title-85-700 text-center min-w-[55px]">
                Services
              </b>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[254px] pl-0 box-border gap-[24px_22px] max-w-full text-neutral-9-200 mq1050:pr-[126px] mq1050:box-border mq750:pr-[63px] mq750:box-border">
        <div className="flex-1 rounded-xl bg-m3-sys-light-on-primary box-border flex flex-col items-end justify-center py-[22px] px-[23px] gap-[16px] min-w-[140px] max-w-full border-[1px] border-solid border-silver-200">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
            <div className="self-stretch h-6 flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[24px] font-semibold">
                Feb 23, 2024
              </div>
              <div className="rounded bg-cyan-1 hidden flex-row items-center justify-center py-px px-2 z-[2] text-center text-sm text-sunset-orange-6">
                <div className="relative leading-[22px] font-semibold">OTF</div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-m3-sys-light-on-primary flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[0px] [row-gap:20px] text-xl text-gray-900 mq450:flex-wrap mq450:justify-center">
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
                  loading="lazy"
                  alt=""
                  src="/icons-1.svg"
                />
                <div className="relative leading-[22px] inline-block min-w-[42px]">
                  Online
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center text-center text-sm text-character-danger font-components-helper-text">
            <div className="flex flex-row items-center justify-center py-1 px-[5px]">
              <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[100px]">
                Cancel Booking
              </div>
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
                <div className="relative leading-[22px] font-semibold">OTF</div>
              </div>
            </div>
            <div className="self-stretch shadow-[0px_-1px_0px_#f0f0f0_inset] bg-m3-sys-light-on-primary flex flex-row items-center justify-between pt-0 px-0 pb-4 gap-[0px] [row-gap:20px] text-xl text-gray-900 mq450:flex-wrap mq450:justify-center">
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
          <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center text-center text-sm text-character-danger font-components-helper-text">
            <div className="flex flex-row items-center justify-center py-1 px-[5px]">
              <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[100px]">
                Cancel Booking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsHeader;
