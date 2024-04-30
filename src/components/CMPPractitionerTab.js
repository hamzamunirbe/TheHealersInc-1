import { Button } from "@mui/material";

const CMPPractitionerTab = () => {
  return (
    <div className="w-[230px] flex flex-col items-start justify-start p-10 box-border gap-[24px] leading-[normal] tracking-[normal]">
      <Button
        className="self-stretch h-[52px]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#f28500",
          borderRadius: "0px 24px 24px 0px",
          "&:hover": { background: "#f28500" },
          height: 52,
        }}
      >
        Practitioners
      </Button>
      <Button
        className="self-stretch h-[52px] hover:bg-whitesmoke-600"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#262626",
          fontSize: "16",
          background: "#fff",
          borderRadius: "0px 24px 24px 0px",
          "&:hover": { background: "#fff" },
          height: 52,
        }}
      >
        Practitioners
      </Button>
    </div>
  );
};

export default CMPPractitionerTab;
