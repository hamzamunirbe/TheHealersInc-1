import { Button } from "@mui/material";

const SectionPractitionerAndVendo = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center max-w-full text-left text-5xl text-white font-web-primary-h3-primary-dm-sans">
      <div className="h-[500px] flex-1 relative max-w-full">
        <div className="absolute top-[0px] left-[0px] w-[720px] overflow-hidden flex flex-col items-start justify-start pt-14 px-[100px] pb-[287px] box-border bg-[url('/public/divpractitionernavigation@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[500px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[0.5px] font-bold font-inherit mq450:text-lgi">
              Join our community of healers and showcase your fitness and
              wellness services to a wide audience.
            </h3>
            <Button
              className="w-[206px] h-10"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#e08e2b",
                borderRadius: "4px",
                "&:hover": { background: "#e08e2b" },
                width: 206,
                height: 40,
              }}
            >
              Join as practitioner
            </Button>
          </div>
        </div>
        <div className="absolute top-[0px] left-[720px] w-[720px] overflow-hidden flex flex-col items-start justify-start pt-14 px-[100px] pb-[287px] box-border bg-[url('/public/divconsumernavigation@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[500px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 gap-[24px]">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[0.5px] font-bold font-inherit mq450:text-lgi">
              Explore a variety of fitness and wellness services offered by our
              trusted providers to enhance your well-being.
            </h3>
            <Button
              className="w-[181px] h-10"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#e08e2b",
                borderRadius: "4px",
                "&:hover": { background: "#e08e2b" },
                width: 181,
                height: 40,
              }}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPractitionerAndVendo;
