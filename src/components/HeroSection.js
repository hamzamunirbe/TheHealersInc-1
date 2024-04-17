const HeroSection = () => {
  return (
    <section className="self-stretch bg-gray-300 flex flex-col items-start justify-start pt-0 px-0 pb-[205px] box-border gap-[109px] max-w-full text-center text-53xl text-neutral-1 font-web-primary-h3-primary-dm-sans mq450:gap-[27px] mq750:gap-[54px] mq750:pb-[133px] mq750:box-border">
      <header className="self-stretch flex flex-row items-start justify-start py-6 px-[100px] top-[0] z-[99] sticky mq450:gap-[101px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
          <img
            className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/the-healers-logo-11.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
            <img
              className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers2.svg"
            />
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[698px] flex flex-col items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-black font-inherit mq450:text-24xl mq450:leading-[48px] mq750:text-39xl mq750:leading-[63px]">
            Ready to transform your life?
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-5xl mq750:pl-8 mq750:pr-8 mq750:box-border">
            <h3 className="m-0 flex-1 relative text-inherit leading-[160%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[31px]">
              Join The Healers today and take the first step towards a
              healthier, happier you.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
