import Header from "../components/Header";
import ScheduleContainer from "../components/ScheduleContainer";

const Schedule = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header />
      <section className="w-[1340px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[56px] max-w-full text-left text-xl text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans mq800:pl-5 mq800:box-border mq675:gap-[28px]">
        <div className="h-[682px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] border-r-[1px] border-solid border-silver-200 mq450:gap-[134px] mq800:hidden">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Dashboard
              </h3>
            </div>
            <div className="self-stretch rounded-lg bg-whitesmoke-1300 flex flex-row items-center justify-center py-4 px-3 gap-[12px] text-neutral-10">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/sidebar-icons-11.svg"
              />
              <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                Schedule
              </div>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons-2.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Appointments
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons-3.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit">
                Services
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons-4.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Inbox
              </h3>
            </div>
            <div className="self-stretch rounded-lg flex flex-row items-center justify-center py-4 px-3 gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/sidebar-icons-5.svg"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-normal font-inherit mq450:text-base mq450:leading-[19px]">
                Profile
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-[calc(100%_-_356px)] mq800:max-w-full mq675:pt-9 mq675:box-border">
          <ScheduleContainer />
        </div>
      </section>
    </div>
  );
};

export default Schedule;
