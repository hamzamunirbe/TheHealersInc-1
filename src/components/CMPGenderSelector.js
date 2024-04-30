const CMPGenderSelector = () => {
  return (
    <div className="w-[374px] max-w-full flex flex-row items-start justify-start p-10 box-border gap-[38px] tracking-[normal] leading-[normal]">
      <button className="cursor-pointer [border:none] py-4 px-8 bg-ghostwhite-200 rounded-lg overflow-hidden flex flex-col items-start justify-start gap-[8px]">
        <img
          className="w-16 h-16 relative object-cover"
          loading="lazy"
          alt=""
          src="/image-102@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-[13px]">
          <p className="m-0 relative text-base leading-[24px] font-sf-pro-display text-gray-800 text-left inline-block min-w-[35px]">
            ‏Male
          </p>
        </div>
      </button>
      <button className="cursor-pointer py-[13px] px-[30px] bg-ghostwhite-200 rounded-lg overflow-hidden flex flex-col items-start justify-start gap-[8px] border-[2px] border-solid border-primary-7">
        <img
          className="w-16 h-16 relative object-cover"
          loading="lazy"
          alt=""
          src="/image-102@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-[13px]">
          <p className="m-0 relative text-base leading-[24px] font-sf-pro-display text-gray-800 text-left inline-block min-w-[35px]">
            ‏Male
          </p>
        </div>
      </button>
    </div>
  );
};

export default CMPGenderSelector;
