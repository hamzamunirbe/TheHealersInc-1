import { Button } from "@mui/material";

const IdentityDetails = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-base text-m3-black font-web-secondary-underline-subtitle2-dm-sans mq675:gap-[16px]">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full [row-gap:20px] gap-[0px] text-13xl mq750:flex-wrap">
        <div className="w-[537px] flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
            Your Identity
          </h1>
          <div className="self-stretch relative text-sm leading-[22px]">
            Add your logo and images.
          </div>
        </div>
        <div className="rounded overflow-hidden flex flex-row items-center justify-center py-1 px-4 gap-[10px]">
          <div className="bg-hitbox-1000 overflow-hidden hidden flex-col items-center justify-center">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
              alt=""
              src="/wrapper1@2x.png"
            />
          </div>
          <Button
            className="flex-1 relative min-w-[83px]"
            disableElevation={true}
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Skip for now
          </Button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch relative leading-[24px] font-semibold">
          Logo
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[191px] pl-0 box-border gap-[20px] max-w-full text-sm font-poppins mq675:pr-[95px] mq675:box-border mq450:pr-5 mq450:box-border">
          <img
            className="h-[100px] w-[100px] relative"
            loading="lazy"
            alt=""
            src="/component-placeholder-image.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[222px] max-w-full">
            <i className="relative leading-[22px] font-light">
              Please upload square image, size less than 100KB
            </i>
            <input
              className="self-stretch rounded-8xs bg-gray1-200 flex flex-row items-center justify-start py-2.5 pr-[50px] pl-2.5 mq450:flex-wrap mq450:gap-[15px] mq450:pr-5 mq450:box-border"
              type="file"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch relative leading-[24px] font-semibold">
          Gallery Images
        </div>
        <input
          className="self-stretch rounded-4xs overflow-hidden flex flex-col items-center justify-center py-[38px] px-[39px] border-[1px] border-dashed border-lightsteelblue"
          type="file"
        />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[32px] max-w-full mq675:gap-[16px]">
        <button className="cursor-pointer p-[13px] bg-m3-sys-light-on-primary h-[50px] w-[50px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center relative border-[1px] border-solid border-m3-sys-light-on-primary">
          <div className="w-2.5 relative text-sm leading-[22px] font-components-helper-text text-m3-sys-light-on-primary text-center hidden shrink-0 z-[0]">
            A
          </div>
          <div className="!m-[0] absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/arrow-back-ios-new.svg"
            />
          </div>
        </button>
        <Button
          className="h-[60px] flex-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] min-w-[370px] max-w-full mq675:min-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#006a6a",
            border: "#006a6a solid 1px",
            borderRadius: "8px",
            "&:hover": { background: "#006a6a" },
            height: 60,
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default IdentityDetails;
