import { Button } from "@mui/material";

const CMPServiceTab = () => {
  return (
    <div className="w-[230px] flex flex-col items-start justify-start p-10 box-border gap-[24px] leading-[normal] tracking-[normal]">
      <Button
        className="self-stretch h-[52px] hover:bg-consumer-colors-monochromatic active:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] active:opacity-[1]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#f28500",
          borderRadius: "24px 0px 0px 24px",
          "&:hover": { background: "#f28500" },
          height: 52,
        }}
      >
        Services
      </Button>
      <Button
        className="self-stretch h-[52px]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#262626",
          fontSize: "16",
          background: "#fff",
          borderRadius: "24px 0px 0px 24px",
          "&:hover": { background: "#fff" },
          height: 52,
        }}
      >
        Services
      </Button>
    </div>
  );
};

export default CMPServiceTab;
