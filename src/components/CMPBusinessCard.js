const CMPBusinessCard = () => {
  return (
    <div className="w-[378px] max-w-full flex flex-row items-start justify-start p-10 box-border tracking-[normal] leading-[normal]">
      <section className="flex-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] rounded-xl bg-m3-sys-light-on-primary flex flex-row items-start justify-start text-left text-xl text-neutral-10 font-web-secondary-underline-subtitle2-dm-sans">
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[16px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/monogram@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[136px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit">
                  The Star Studio
                </h3>
                <span className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                  Yoga, Meditation
                </span>
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
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-components-helper-text">
            <span className="flex-1 relative leading-[22px] font-web-secondary-underline-subtitle2-dm-sans inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[113px]">
              Howe Street, Vancouver
            </span>
            <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary">
              <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                  <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                    Enabled
                  </div>
                </div>
              </div>
              <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-m3-sys-light-on-primary">
                <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                  <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                    Enabled
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
              <span className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                1 mile
              </span>
              <div className="bg-hitbox-1000 overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/near-me.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMPBusinessCard;
