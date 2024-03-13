import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import TableCell from "@mui/material/TableCell";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormHelperText from "@mui/material/FormHelperText";
import { useFormContext, Controller } from "react-hook-form";
import { FinalFormInput, FinalFieldInput } from "../../../types";

export default function PlainMuiRow(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
  fieldInfo: FinalFieldInput;
  arrayName: "inputFields" | "outputFields";
}) {
  const { fieldInfo, arrayName, arrayFieldIndex, removeArrayField } = props;
  const { depth, parentTypeLabel, categoryLabel } = fieldInfo;

  const { control } = useFormContext<FinalFormInput>();

  return (
    <>
      <TableRow>
        <TableCell sx={{ padding: "3px" }} align="center">
          {depth}
        </TableCell>
        <TableCell sx={{ padding: "3px" }} align="center">
          {parentTypeLabel ? parentTypeLabel + categoryLabel : categoryLabel}
        </TableCell>
        <TableCell sx={{ padding: "3px" }}>
          <Controller
            name={`${arrayName}.${arrayFieldIndex}.name`}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                margin="normal"
                label="NAME"
                fullWidth
                autoFocus
                {...field}
                helperText={fieldState.error ? fieldState.error.message : ""}
                FormHelperTextProps={{
                  className: "error_message",
                }}
              />
            )}
          />
        </TableCell>
        <TableCell align="right" sx={{ padding: "3px" }}>
          <Controller
            name={`${arrayName}.${arrayFieldIndex}.length`}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                type="number"
                margin="normal"
                label="LENGTH"
                fullWidth
                {...field}
                helperText={fieldState.error ? fieldState.error.message : ""}
                FormHelperTextProps={{
                  className: "error_message",
                }}
              />
            )}
          />
        </TableCell>
        <TableCell align="right" sx={{ padding: "3px" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Controller
              name={`${arrayName}.${arrayFieldIndex}.plainType`}
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <Select {...field}>
                    <MenuItem value="">
                      <em>타입</em>
                    </MenuItem>
                    <MenuItem value={"String"}>String</MenuItem>
                    <MenuItem value={"Number"}>Number</MenuItem>
                    <MenuItem value={"BigInteger"}>Object</MenuItem>
                    <MenuItem value={"Boolean"}>List</MenuItem>
                  </Select>
                  {fieldState.error ? (
                    <FormHelperText className="error_message">
                      {fieldState.error.message}
                    </FormHelperText>
                  ) : null}
                </>
              )}
            />
          </FormControl>
        </TableCell>
        <TableCell align="right" sx={{ padding: "3px" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Controller
              name={`${arrayName}.${arrayFieldIndex}.plainType`}
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <>
                  <Select {...field}>
                    <MenuItem value="">
                      <em>필수여부</em>
                    </MenuItem>
                    <MenuItem value={"Y"}>예</MenuItem>
                    <MenuItem value={"N"}>아니오</MenuItem>
                  </Select>
                  {fieldState.error ? (
                    <FormHelperText className="error_message">
                      {fieldState.error.message}
                    </FormHelperText>
                  ) : null}
                </>
              )}
            />
          </FormControl>
        </TableCell>
        <TableCell align="right" sx={{ padding: "3px" }}>
          <Controller
            name={`${arrayName}.${arrayFieldIndex}.description`}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                margin="normal"
                label="DESCRIPTION"
                fullWidth
                {...field}
                helperText={fieldState.error ? fieldState.error.message : ""}
                FormHelperTextProps={{
                  className: "error_message",
                }}
              />
            )}
          />
        </TableCell>
        <TableCell align="center" sx={{ padding: "3px" }}>
          <Controller
            name={`${arrayName}.${arrayFieldIndex}.useAlarm`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Switch
                checked={value}
                onChange={(event) => {
                  onChange(event.target.checked);
                }}
              />
            )}
          />
        </TableCell>
        <TableCell align="center">
          <Button
            type="button"
            variant="contained"
            onClick={() => removeArrayField(arrayFieldIndex)}
          >
            삭제
          </Button>{" "}
        </TableCell>
      </TableRow>
    </>
  );
}
