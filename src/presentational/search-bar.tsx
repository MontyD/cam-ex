import React from "react";
import { FormControl, InputLabel, Input, IconButton, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

export const SearchBar = () => {
  return (
      <form noValidate autoComplete="off">
        <FormControl fullWidth>
          <InputLabel htmlFor="search">
            Search for location
          </InputLabel>
          <Input
            id="search"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
  );
};
