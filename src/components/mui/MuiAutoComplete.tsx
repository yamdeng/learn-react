import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];
const options2 = [
  { label: "yamdeng", id: "yamdeng-id" },
  { label: "yamdeng2", id: "yamdeng-id2" },
];

export default function MuiAutoComplete() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [value2, setValue2] = React.useState<any | null>("yamdeng-id2");

  console.log(`value2 : ${value2}`);

  const [vacType, setVacType] = React.useState<any>("Sample");
  const [inputValue3, setInputValue3] = React.useState("Sample");
  const options3: any[] = [
    {
      VaccinationType: "Sample",
    },
    {
      VaccinationType: "Another Sample",
    },
  ];

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
      <br />
      <br />
      <Autocomplete
        value={value2}
        getOptionLabel={(option) => option.label}
        getOptionKey={(option) => option.id}
        isOptionEqualToValue={(option, value) => {
          console.log(`isOptionEqualToValue : ${value}`);
          console.log(`isOptionEqualToValue option.id: ${option.id}`);
          return option.label === value;
        }}
        onChange={(event: any, newValue: any) => {
          console.log(`onChange : ${newValue.id}`);
          setValue2(newValue.id);
        }}
        id="controllable-states-demo2"
        options={options2}
        sx={{ width: 300 }}
        renderInput={(params) => {
          return <TextField {...params} label="Controllable" />;
        }}
      />
      <br />
      <br />
      <Autocomplete
        value={options3.find((op) => op.VaccinationType === vacType)} //here u set default Value and change whenever it changes a list choice
        inputValue={inputValue3} //here u set default Input and change whenever it changes by typing
        onChange={(event: any, newValue: any | null) => {
          setVacType(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue3(newInputValue);
        }} // handles typing
        options={options3}
        getOptionLabel={(option: { VaccinationType: string }) => {
          return option?.VaccinationType;
        }}
        isOptionEqualToValue={(option, value) =>
          option?.VaccinationType === value?.VaccinationType
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" size="small" />
        )}
      />
    </div>
  );
}
