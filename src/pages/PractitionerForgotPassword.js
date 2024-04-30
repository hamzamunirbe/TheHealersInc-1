import FormContainer from "../components/FormContainer";

const PractitionerForgotPassword = () => {
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start py-10 pr-10 pl-[140px] box-border gap-[47px] tracking-[normal] leading-[normal] mq750:gap-[23px] mq750:pl-[70px] mq750:box-border mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="w-[480px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[480px] max-w-full mq750:min-w-full mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[257px] max-w-full mq750:gap-[128px]">
          <div className="w-[302px] flex flex-row items-end justify-start gap-[15.9px]">
            <img
              className="h-[60px] w-[60.7px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[15.6px]">
              <img
                className="self-stretch h-[28.7px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers1.svg"
              />
            </div>
          </div>
          <FormContainer />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start min-w-[476px] max-w-full mq750:min-w-full">
        <div className="h-[944px] flex-1 relative max-w-full">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[93px] rounded-3xl max-h-full w-[640px] object-cover"
            loading="lazy"
            alt=""
            src="/chrislee70l1tdai6rmunsplash-2@2x.png"
          />
          <div className="absolute top-[634px] left-[0px] [backdrop-filter:blur(22.2px)] rounded-[50%] bg-teal-300 box-border w-[187px] h-[187px] z-[1] border-[0px] border-solid border-teal-200" />
        </div>
      </div>
    </div>
  );
};

export default PractitionerForgotPassword;
