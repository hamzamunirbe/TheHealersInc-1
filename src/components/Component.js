import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/search-results-services");
  }, [navigate]);

  return (
    <div className="w-[300px] flex flex-row items-start justify-between pt-5 pb-[19px] pr-6 pl-[42px] box-border relative gap-[20px] text-center text-base text-neutral-8 font-web-secondary-underline-subtitle2-dm-sans mq450:pl-5 mq450:box-border">
      <div className="h-[50px] w-full absolute !m-[0] top-[calc(50%_-_25px)] right-[0px] left-[0px] rounded-13xl bg-m3-sys-light-on-primary box-border border-[2px] border-solid border-whitesmoke-500" />
      <div
        className="relative leading-[24px] font-semibold inline-block min-w-[66px] cursor-pointer z-[1]"
        onClick={onServicesTextClick}
      >
        Services
      </div>
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-m3-sys-light-on-primary">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[50px] w-[150px] absolute !m-[0] top-[-14px] left-[-25px] rounded-tl-none rounded-tr-13xl rounded-br-13xl rounded-bl-none bg-darkorange z-[1]" />
          <div className="relative leading-[24px] font-semibold inline-block min-w-[101px] z-[2]">
            Practitioners
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
