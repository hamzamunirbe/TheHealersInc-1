import Header from "../components/Header";
import NavigationItems from "../components/NavigationItems";
import ServiceForm from "../components/ServiceForm";

const AddEditServices = () => {
  return (
    <div className="w-full relative shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <Header />
      <footer className="w-[1340px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[56px] max-w-full mq1050:pl-5 mq1050:box-border mq750:gap-[28px]">
        <div className="h-[787px] w-[300px] bg-gray1-300 box-border flex flex-col items-start justify-start py-4 px-[15px] border-r-[1px] border-solid border-silver-200 mq1050:hidden mq450:gap-[134px]">
          <NavigationItems />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border max-w-[calc(100%_-_356px)] mq1050:max-w-full mq750:pt-9 mq750:box-border">
          <ServiceForm />
        </div>
      </footer>
    </div>
  );
};

export default AddEditServices;
