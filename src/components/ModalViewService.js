import {} from "@mui/material";

const ModalViewService = ({ onClose }) => {
  return (
    <div className="w-[600px] shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] max-h-[600px] leading-[normal] tracking-[normal] max-w-full overflow-auto">
      <section className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_24px)] text-left text-5xl text-character-title-85-700 font-web-secondary-underline-subtitle2-dm-sans">
        <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 box-border max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-[0px] mq525:flex-wrap mq600:flex-wrap">
            <div className="flex flex-row items-center justify-start py-0 pr-60 pl-0 box-border gap-[16px] max-w-full mq525:flex-wrap mq525:pr-[120px] mq525:box-border mq600:flex-wrap mq600:pr-[120px] mq600:box-border">
              <h2 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
                Service Details
              </h2>
              <button className="cursor-pointer [border:none] py-1.5 px-2 bg-polar-green-6 rounded-xl flex flex-row items-center justify-center gap-[4px]">
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0 hidden min-h-[12px]"
                  alt=""
                  src="/left-icon.svg"
                />
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <div className="relative text-3xs tracking-[0.05em] uppercase font-semibold font-heading-h5 text-m3-sys-light-on-primary text-center inline-block min-w-[40px]">
                    Active
                  </div>
                </div>
                <img
                  className="h-3 w-3 relative overflow-hidden shrink-0 hidden min-h-[12px]"
                  alt=""
                  src="/left-icon.svg"
                />
              </button>
            </div>
            <div className="h-10 w-10 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] rounded-81xl bg-m3-sys-light-on-primary box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[9px] px-2.5 relative gap-[10px] text-center text-sm font-components-helper-text border-[1px] border-solid border-gainsboro-200">
              <div className="self-stretch w-2.5 relative leading-[22px] inline-block shrink-0" />
              <div className="!m-[0] absolute top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-center justify-center z-[1]">
                <img
                  className="w-5 h-5 relative overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/wrapper@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm text-neutral-7">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[6px]">
            <div className="relative leading-[22px] inline-block min-w-[90px]">
              Service Name
            </div>
            <div className="relative text-base leading-[24px] font-semibold text-neutral-10 inline-block min-w-[58px]">
              Trauma
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[6px]">
            <div className="relative leading-[22px] inline-block min-w-[112px]">
              Service Category
            </div>
            <div className="relative text-base leading-[24px] font-semibold text-neutral-10">{`Psychologists and counselors `}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[6px]">
            <div className="relative leading-[22px] inline-block min-w-[86px]">
              Session Type
            </div>
            <div className="relative text-base leading-[24px] font-semibold text-neutral-10 inline-block min-w-[117px]">
              Online, On-site
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 gap-[6px]">
            <div className="relative leading-[22px] inline-block min-w-[85px]">
              Session Cost
            </div>
            <div className="relative text-base leading-[24px] font-semibold text-neutral-10 inline-block min-w-[35px] whitespace-nowrap">
              $ 30
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[22px] inline-block min-w-[75px]">
              Description
            </div>
            <div className="self-stretch h-[170px] relative text-base leading-[24px] font-semibold text-neutral-10 inline-block">
              <p className="m-0">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalViewService;
