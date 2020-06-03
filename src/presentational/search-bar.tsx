import React, { useState } from "react";
import { FormControl, InputLabel, Input, IconButton, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

export const SearchBar = (props: {
  label: string;
  defaultValue?: string;
  onValueSubmit: (value: string) => void;
}) => {
  const [value, setValue] = useState(props.defaultValue ?? "");
  const emitSearch = () => props.onValueSubmit(value);

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        emitSearch();
      }}
    >
      <FormControl fullWidth>
        <InputLabel htmlFor="search">{props.label}</InputLabel>
        <Input
          id="search"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={emitSearch}>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};
