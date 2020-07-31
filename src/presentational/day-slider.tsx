import React from "react";
import { Typography, Slider, makeStyles, createStyles } from "@material-ui/core";

const getDayNameInNDays = (numberOfDays: number) => {
  const tempDate = new Date();
  tempDate.setDate(tempDate.getDate() + numberOfDays);
  return tempDate.toLocaleString("en-us", { weekday: "long" });
};

const marks = [
  "Today",
  "Tomorrow",
  getDayNameInNDays(2),
  getDayNameInNDays(3),
  getDayNameInNDays(4),
];

const useStyles = makeStyles(() =>
  createStyles({
    slider: {
      display: "block",
      width: "90%",
      margin: "1rem auto",
    },
  })
);

export const DaySlider = (props: { onChange: (newValue: number) => void }) => {
  const { slider } = useStyles();
  return (
    <>
      <Typography id="discrete-slider-restrict" gutterBottom></Typography>
      <Slider
        onChange={(_, newValue) => props.onChange(Array.isArray(newValue) ? newValue[0] : newValue)}
        className={slider}
        defaultValue={0}
        max={marks.length - 1}
        min={0}
        marks={marks.map((label, index) => ({ value: index, label }))}
      />
    </>
  );
};
