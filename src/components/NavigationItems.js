const NavigationItems = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[8px] text-left text-xl text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans">
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
      <div className="self-stretch rounded-lg bg-whitesmoke-1300 flex flex-row items-center justify-center py-4 px-3 gap-[12px] text-neutral-10">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/sidebar-icons-3.svg"
        />
        <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
          Services
        </div>
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
  );
};

export default NavigationItems;
