import { Button } from "@mui/material";

const CMPFocusSelector = () => {
  return (
    <div className="w-[489px] max-w-full flex flex-row flex-wrap items-start justify-start p-10 box-border gap-[38px] leading-[normal] tracking-[normal]">
      <Button
        className="h-28 flex-1 min-w-[119px]"
        endIcon={<img width="24px" height="24px" src="/image-98.png" />}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#18181b",
          fontSize: "16",
          background: "#f4f1fc",
          borderRadius: "8px",
          "&:hover": { background: "#f4f1fc" },
          height: 112,
        }}
      >
        Mental Health
      </Button>
      <Button
        className="h-28 flex-1 min-w-[122px]"
        endIcon={<img width="24px" height="24px" src="/image-98-1.png" />}
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#18181b",
          fontSize: "16",
          borderColor: "#6366f1",
          borderRadius: "8px",
          "&:hover": { borderColor: "#6366f1" },
          height: 112,
        }}
      >
        Mental Health
      </Button>
    </div>
  );
};

export default CMPFocusSelector;
