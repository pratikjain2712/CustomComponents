import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const min = new Date("2013-05-13").getTime();
  const max = new Date("2013-06-21").getTime();
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const customDateFormat = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const marks = [
    {
      value: min,
      label: new Date(min).toLocaleDateString("en-us", customDateFormat)
    },
    {
      value: max,
      label: new Date(max).toLocaleDateString("en-us", customDateFormat)
    }
  ];
  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={new Date(value).toLocaleDateString("en-us", customDateFormat)}
      >
        {children}
      </Tooltip>
    );
  }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Date range Slider
      </Typography>
      <Slider
        min={min}
        max={max}
        value={value}
        step={86400000}
        onChange={handleChange}
        ValueLabelComponent={ValueLabelComponent}
        aria-labelledby="range-slider"
        marks={marks}
        getAriaValueText={valuetext}
      />
    </div>
  );
}
