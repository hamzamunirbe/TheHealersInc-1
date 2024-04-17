const SectionExploreCategories = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start py-14 px-[100px] box-border gap-[24px] max-w-full text-left text-13xl text-character-title-85 font-web-primary-h3-primary-dm-sans mq750:py-9 mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
        Explore Categories
      </h2>
      <div className="self-stretch overflow-x-auto flex flex-row flex-wrap items-start justify-start gap-[32px_30px] min-h-[332px] max-w-full text-center text-white">
        <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[27px] px-[7px] box-border bg-[url('/public/divcategory@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Psychologists and Counselors
          </h2>
        </div>
        <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/divcategory1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Mind
          </h2>
        </div>
        <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/divcategory2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Body
          </h2>
        </div>
        <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/divcategory3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Medicine
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SectionExploreCategories;
