import DivReason from "./DivReason";

const SectionWhyChooseUs = () => {
  return (
    <section className="self-stretch bg-whitesmoke-100 flex flex-row items-center justify-start py-0 px-[100px] box-border gap-[56px] max-w-full text-left text-29xl text-gray-200 font-web-secondary-underline-subtitle2-dm-sans mq1225:flex-wrap mq1225:gap-[28px] mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
      <img
        className="h-[796px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[385px] min-h-[796px] mq1225:flex-1 mq750:min-w-full"
        loading="lazy"
        alt=""
        src="/divleft-content@2x.png"
      />
      <div className="flex-[0.8649] overflow-hidden flex flex-col items-start justify-center py-16 px-10 box-border gap-[40px] min-w-[385px] max-w-full mq1225:flex-1 mq750:gap-[20px] mq750:min-w-full mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq450:pt-[27px] mq450:pb-[27px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-1.8px] leading-[58px] font-bold font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            Your Path to Holistic Wellness
          </h1>
          <div className="relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-700 mix-blend-normal">
            People choose us because we serve the best for everyone.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[82px] pl-0 gap-[32px] text-2xl mq750:gap-[16px] mq750:pr-[41px] mq750:box-border">
          <DivReason
            h5="Diverse Healing Modalities"
            paragraph="Explore varied healing options for your holistic well-being."
          />
          <DivReason
            h5="Instant Notifications"
            paragraph="Receive instant notifications for appointment reminders."
          />
          <DivReason
            h5="Expert Practitioners"
            paragraph="Connect with skilled practitioners for personalized wellness guidance."
          />
          <DivReason
            h5="Personalized Experiences"
            paragraph="Tailored services to meet your unique wellness needs."
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWhyChooseUs;
