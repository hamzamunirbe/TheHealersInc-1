import FrameComponent from "../components/FrameComponent";

const PractitionerSignUpVerif = () => {
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start py-10 pr-10 pl-[140px] box-border gap-[127px] leading-[normal] tracking-[normal] mq750:gap-[63px] mq750:pl-[70px] mq750:box-border mq450:gap-[32px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="w-[400px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[400px] max-w-full mq750:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[199px] mq450:gap-[99px]">
          <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
            <img
              className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
              alt=""
              src="/the-healers-logo-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
              <img
                className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/the-healers5.svg"
              />
            </div>
          </div>
          <FrameComponent />
        </div>
      </div>
      <div className="h-[944px] flex-1 relative min-w-[476px] max-w-full mq750:min-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[93px] rounded-3xl max-h-full w-[640px] object-cover"
          loading="lazy"
          alt=""
          src="/chrislee70l1tdai6rmunsplash-2@2x.png"
        />
        <div className="absolute top-[634px] left-[0px] [backdrop-filter:blur(22.2px)] rounded-[50%] bg-teal-300 box-border w-[187px] h-[187px] z-[1] border-[0px] border-solid border-teal-200" />
      </div>
    </div>
  );
};

export default PractitionerSignUpVerif;
