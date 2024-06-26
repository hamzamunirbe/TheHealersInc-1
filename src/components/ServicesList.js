import ServiceCardPractitioner from "./ServiceCardPractitioner";

const ServicesList = () => {
  return (
    <div className="self-stretch h-[669px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[24px] max-w-full text-left text-xs text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq1050:h-auto">
      <ServiceCardPractitioner />
      <ServiceCardPractitioner />
      <ServiceCardPractitioner />
      <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded bg-m3-sys-light-on-primary flex flex-col items-start justify-center p-4 box-border gap-[16px] max-w-full shrink-0">
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full">
          <div className="h-12 w-12 rounded-53xl bg-bisque overflow-hidden shrink-0 hidden flex-row items-center justify-center">
            <img
              className="h-6 w-6 relative object-contain"
              alt=""
              src="/physicaltherapy-1@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center gap-[4px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-[0px] mq1050:flex-wrap">
                <div className="w-[897px] flex flex-col items-start justify-start max-w-full">
                  <div className="relative leading-[18px] inline-block min-w-[28px]">
                    Mind
                  </div>
                  <h3 className="m-0 self-stretch relative text-lg leading-[28px] font-bold font-inherit mt-[-4px]">
                    Yoga
                  </h3>
                </div>
                <div className="relative text-lg leading-[28px] font-semibold inline-block min-w-[35px] whitespace-nowrap">
                  $30
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-m3-ref-neutral-neutral30">
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/icons-1.svg"
                  />
                  <div className="relative leading-[18px]">Online</div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-sm leading-[22px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              Sadhana is the Sanskrit word for daily practice. Your practice is
              unique to you, and it can include but not limited to Asana,
              Pranayama (Breathwork),
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-3xs text-m3-sys-light-on-primary font-heading-h5">
          <div className="rounded-xl bg-volcano-6 flex flex-row items-center justify-center py-1.5 px-2 gap-[4px]">
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0 hidden min-h-[12px]"
              alt=""
              src="/left-icon.svg"
            />
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <div className="h-3 relative tracking-[0.05em] uppercase font-semibold inline-block">
                IN-Active
              </div>
            </div>
            <img
              className="h-3 w-3 relative overflow-hidden shrink-0 hidden min-h-[12px]"
              alt=""
              src="/left-icon.svg"
            />
          </div>
          <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/more-vert.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
