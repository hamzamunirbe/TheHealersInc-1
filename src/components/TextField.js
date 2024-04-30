import { Autocomplete, TextField } from "@mui/material";

const TextField = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xs text-text-secondary font-web-secondary-underline-subtitle2-dm-sans">
      <Autocomplete
        className="self-stretch h-[57px]"
        disablePortal
        options={["tag 1", "tag 2", "tag 3"]}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            label="Tags"
            variant="standard"
            placeholder=""
            helperText="You can add 3 to 8 tags."
          />
        )}
      />
      <div className="self-stretch flex flex-row items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
        <div className="flex-1 relative leading-[18px] inline-block max-w-full">
          You can add 3 to 8 tags.
        </div>
      </div>
    </div>
  );
};

export default TextField;
