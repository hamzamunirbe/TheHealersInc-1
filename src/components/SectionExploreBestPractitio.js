import ButtonBusinessCard from "./ButtonBusinessCard";

const SectionExploreBestPractitio = () => {
  return (
    <section className="flex flex-col items-start justify-start py-14 px-[100px] box-border gap-[29px] max-w-full text-left text-13xl text-character-title-85 font-web-primary-h3-primary-dm-sans mq750:py-9 mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
        Explore Best Practitioners
      </h2>
      <div className="w-[1240px] overflow-x-auto flex flex-row items-start justify-start py-0 px-0 box-border gap-[32px] max-w-full text-xl text-neutral-10 mq750:gap-[16px]">
        <div className="w-[298px] rounded-xl bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-contain"
                  loading="lazy"
                  alt=""
                  src="/monogram@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                    The Star Studio
                  </b>
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
                <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-white">
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
                <div className="bg-gray-600 overflow-hidden flex flex-col items-center justify-center">
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
        </div>
        <ButtonBusinessCard />
        <ButtonBusinessCard propDisplay="inline-block" propMinWidth="44px" />
        <ButtonBusinessCard propDisplay="inline-block" propMinWidth="44px" />
        <ButtonBusinessCard propDisplay="unset" propMinWidth="unset" />
        <ButtonBusinessCard propDisplay="unset" propMinWidth="unset" />
        <ButtonBusinessCard propDisplay="unset" propMinWidth="unset" />
      </div>
    </section>
  );
};

export default SectionExploreBestPractitio;
