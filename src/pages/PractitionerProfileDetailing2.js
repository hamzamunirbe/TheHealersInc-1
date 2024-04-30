import Top1 from "../components/Top1";
import IdentityDetails from "../components/IdentityDetails";

const PractitionerProfileDetailing2 = () => {
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[85px] box-border gap-[32px] tracking-[normal] leading-[normal] text-center text-3xs text-m3-black font-heading-h5 mq750:gap-[16px]">
      <img
        className="w-[1370.2px] h-[1379.9px] !m-[0] absolute top-[-200.1px] right-[-454.2px] object-contain"
        alt=""
        src="/col@2x.png"
      />
      <Top1 />
      <div className="w-0 relative tracking-[0.05em] uppercase font-semibold hidden z-[2]" />
      <div className="flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-left text-29xl font-web-secondary-underline-subtitle2-dm-sans mq750:pl-8 mq750:pr-8 mq750:box-border">
        <h1 className="m-0 relative text-inherit leading-[64px] font-bold font-inherit z-[1] mq450:text-10xl mq450:leading-[38px] mq750:text-19xl mq750:leading-[51px]">
          Tell us more about yourself.
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[700px] shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] rounded-2xl bg-m3-sys-light-on-primary flex flex-col items-start justify-start p-6 box-border gap-[24px] max-w-full z-[1] mq750:pt-5 mq750:pb-5 mq750:box-border">
          <div className="self-stretch h-[11px] relative rounded-lg bg-whitesmoke-1200 mix-blend-normal">
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_326px)] rounded-lg bg-whitesmoke-1200 w-full hidden mix-blend-normal" />
            <div className="absolute h-full top-[0%] bottom-[0%] left-[calc(50%_-_326px)] rounded-lg bg-consumer-colors-complemantary w-[440px] mix-blend-normal z-[1]" />
          </div>
          <IdentityDetails />
        </div>
      </div>
    </div>
  );
};

export default PractitionerProfileDetailing2;
