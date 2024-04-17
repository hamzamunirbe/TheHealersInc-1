const SectionTheHealersApp = () => {
  return (
    <section className="self-stretch bg-consumer-colors-primary-1 flex flex-row items-start justify-start py-[140.5px] px-[100px] box-border gap-[56px] max-w-full text-left text-smi text-consumer-colors-monochromatic font-web-primary-h3-primary-dm-sans mq1225:flex-wrap mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border mq750:gap-[28px] mq750:py-[91px] mq750:px-[25px] mq750:box-border">
      <div className="w-[690px] flex flex-col items-start justify-start gap-[32px] min-w-[690px] max-w-full mq1225:flex-1 mq750:gap-[16px] mq1050:min-w-full">
        <div className="w-[589px] flex flex-col items-start justify-start gap-[8px] max-w-full">
          <b className="self-stretch relative tracking-[1.63px] uppercase">
            The Healers app
          </b>
          <h1 className="m-0 w-[568px] relative text-37xl tracking-[-1.8px] leading-[110%] font-bold font-inherit text-gray-200 inline-block max-w-full mq750:text-26xl mq750:leading-[49px] mq450:text-15xl mq450:leading-[37px]">
            Experience Wellness On the Go
          </h1>
        </div>
        <div className="self-stretch relative text-xl tracking-[-0.2px] leading-[180%] text-gray-700 mix-blend-normal mq450:text-base mq450:leading-[29px]">
          Take your wellness journey with you wherever you go with our mobile
          app. Seamlessly access our services, schedule appointments, and stay
          connected with your practitioner—all from the palm of your hand. With
          user-friendly navigation and convenient features, our app makes it
          easy to prioritize your well-being, no matter how busy life gets.
        </div>
      </div>
      <div className="w-64 flex flex-col items-start justify-start pt-[39.5px] px-0 pb-0 box-border min-w-[256px] text-lgi text-m3-black mq1225:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[36px] mq450:gap-[18px]">
          <div className="rounded-2xl bg-white flex flex-row items-start justify-start p-4 gap-[16px]">
            <div className="flex flex-row items-start justify-start py-1 px-0">
              <div className="h-4 w-4 relative rounded-[50%] bg-lightcoral" />
            </div>
            <b className="relative tracking-[-0.2px]">
              <p className="m-0">{`Booking Made `}</p>
              <p className="m-0">Simple</p>
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end text-center text-white">
            <div className="w-[213px] flex flex-row items-start justify-start relative">
              <div className="h-[530px] w-[409.1px] absolute !m-[0] top-[-242px] right-[-238px]">
                <div className="absolute top-[0px] left-[234.1px] rounded-3xs bg-orange w-[175px] h-[216px] mix-blend-normal" />
                <img
                  className="absolute top-[393.2px] left-[0px] w-[170px] h-[79px] object-contain"
                  alt=""
                  src="/group-101@2x.png"
                />
                <div className="absolute top-[28px] left-[118.1px] w-[227px] h-[502px] z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[0px] top-[42px] [transform:scale(1.476)]"
                    loading="lazy"
                    alt=""
                    src="/group-5@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-tomato flex flex-col items-start justify-start py-8 px-6 gap-[24px] z-[2]">
                <div className="flex flex-row items-start justify-start py-0 px-7">
                  <img
                    className="h-[46px] w-[109px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
                <b className="self-stretch relative tracking-[-0.2px]">
                  Best Practitioners
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTheHealersApp;
