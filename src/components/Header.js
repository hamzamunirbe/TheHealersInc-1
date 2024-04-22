import { Button } from "@mui/material";

const Header = () => {
  return (
    <header className="self-stretch h-[108px] flex flex-row items-start justify-center py-6 px-5 box-border gap-[732.2px] z-[2] mq1225:gap-[366px] mq750:gap-[183px] mq450:gap-[92px]">
      <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
          <img
            className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/the-healers-logo1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
            <img
              className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch w-64 flex flex-row items-start justify-start gap-[16px]">
        <div className="w-[79px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
          <Button
            className="self-stretch h-[38px]"
            disableElevation={true}
            variant="text"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              borderRadius: "4px",
              height: 38,
            }}
          >
            Login
          </Button>
        </div>
        <Button
          className="self-stretch flex-1 [filter:drop-shadow(0px_2px_0px_rgba(0,_0,_0,_0.02))]"
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            borderColor: "#fff",
            borderRadius: "8px",
            "&:hover": { borderColor: "#fff" },
          }}
        >
          Sign Up Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
