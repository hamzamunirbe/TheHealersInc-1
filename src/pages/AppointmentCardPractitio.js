const AppointmentCardPractitio = ({
  date,
  profilePicture,
  customerName,
  serviceName,
  startTime,
  serviceType,
}) => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded bg-m3-sys-light-on-primary flex flex-col items-end justify-center py-3 px-4 box-border gap-[16px] leading-[normal] tracking-[normal] text-left text-base text-neutral-9-200 font-web-secondary-underline-subtitle2-dm-sans">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[24px] font-semibold">
          {date}
        </div>
        <div className="rounded bg-cyan-1 hidden flex-row items-center justify-center py-px px-2 z-[2] text-center text-sm text-sunset-orange-6">
          <div className="relative leading-[22px] font-semibold">OTF</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-m3-black">
        <img
          className="h-12 w-12 relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src={profilePicture}
        />
        <div className="flex-1 flex flex-col items-start justify-center">
          <div className="relative leading-[24px] font-semibold">
            {customerName}
          </div>
          <div className="self-stretch relative text-xs leading-[18px]">
            {serviceName}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xs">
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-4 w-4 relative"
            loading="lazy"
            alt=""
            src="/vuesaxlinearclock-1.svg"
          />
          <div className="relative leading-[18px] inline-block min-w-[129px] whitespace-nowrap">
            {startTime}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4px] text-m3-ref-neutral-neutral30">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icons-1.svg"
          />
          <div className="relative leading-[18px] inline-block min-w-[36px]">
            {serviceType}
          </div>
        </div>
      </div>
      <div className="rounded-81xl overflow-hidden flex flex-col items-center justify-center py-0 pr-0 pl-5 text-center text-sm text-character-danger font-components-helper-text">
        <div className="flex flex-row items-center justify-center py-1 px-[5px]">
          <div className="relative tracking-[0.1px] leading-[20px] font-medium inline-block min-w-[100px]">
            Cancel Booking
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCardPractitio;
