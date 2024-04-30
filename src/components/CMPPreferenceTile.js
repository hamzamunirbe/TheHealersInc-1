const CMPPreferenceTile = () => {
  return (
    <div className="w-[478px] max-w-full flex flex-row flex-wrap items-start justify-start p-10 box-border gap-[38px] tracking-[normal] leading-[normal] text-center text-lg text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans">
      <div className="shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start py-[38px] px-[60px] gap-[16px]">
        <img
          className="w-[60px] h-[60px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/preferences-icons1.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 px-2.5">
          <h4 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[40px]">
            Title
          </h4>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-consumer-colors-complemantary flex flex-col items-start justify-start pt-2.5 pb-[38px] pr-2.5 pl-[60px] box-border gap-[15px] min-w-[135px] text-m3-sys-light-on-primary">
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="h-3.5 w-3.5 relative rounded-[50%] bg-m3-sys-light-on-primary" />
        </div>
        <img
          className="w-[60px] h-[60px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/preferences-icons.svg"
        />
        <div className="flex flex-row items-start justify-start py-0 px-2.5">
          <h4 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[40px]">
            Title
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CMPPreferenceTile;
