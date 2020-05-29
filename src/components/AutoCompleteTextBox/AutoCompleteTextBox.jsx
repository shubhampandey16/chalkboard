//import fetch from "cross-fetch";
import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
//import { makeStyles } from "@material-ui/core/styles";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 500,
//     "& > * + *": {
//       marginTop: theme.spacing(3),
//     },
//   },
// }));

export default function AutoCompleteTextBox(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  //const classes = useStyles();

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      //const response = await fetch(
      //  "https://country.register.gov.uk/records.json?page-size=5000"
      //);
      await sleep(1e3); // For demo purposes.
      const dropdownData = props.itemsList;
      console.log("Dropdown data" + dropdownData);
      if (active) {
        setOptions(Object.keys(dropdownData).map((key) => dropdownData[key]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      style={{ width: 300 }}
      limitTags={2}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.value === value.value}
      getOptionLabel={(option) => option.value}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          //variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
