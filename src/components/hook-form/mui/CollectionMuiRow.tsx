import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import TableCell from "@mui/material/TableCell";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import PlainMuiRow from "./PlainMuiRow";

import { useFieldArray, useFormContext, Controller } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { finalDefaultFieldInput } from "../../../utils/values";
import { FinalFormInput, FinalFieldInput } from "../../../types";

export default function CollectionMuiRow(props: {
  arrayFieldIndex: number;
  removeArrayField: (index: number) => void;
  fieldInfo: FinalFieldInput;
  arrayName: "inputFields" | "outputFields";
}) {
  const { fieldInfo, arrayName, arrayFieldIndex, removeArrayField } = props;
  const { depth, parentTypeLabel, categoryLabel, dataType } = fieldInfo;

  const { control } = useFormContext<FinalFormInput>();

  const subListArrayName =
    `${arrayName}.${arrayFieldIndex}.properties` as "inputFields";

  const { fields, append, remove } = useFieldArray({
    control,
    name: subListArrayName,
  });

  function addRowChild(dataType: string) {
    let childCategoryLabel = "";
    if (dataType === "PLAIN") {
      childCategoryLabel = "P";
    } else if (dataType === "OBJECT") {
      childCategoryLabel = "O";
    } else if (dataType === "LIST") {
      childCategoryLabel = "L";
    }

    const newInfo = {
      ...finalDefaultFieldInput,
      id: uuid(),
      dataType,
      depth: depth + 1,
      categoryLabel: childCategoryLabel,
      parentTypeLabel: parentTypeLabel
        ? parentTypeLabel + categoryLabel
        : categoryLabel,
      arrayName: subListArrayName,
    };
    append(newInfo);
  }

  function removeArrayFieldChild(index: number) {
    remove(index);
  }

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
          {dataType}
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
        <TableCell align="left" colSpan={3}>
          <Button
            type="button"
            variant="contained"
            onClick={() => addRowChild("PLAIN")}
          >
            [+Field]
          </Button>{" "}
          <Button
            type="button"
            variant="contained"
            onClick={() => addRowChild("OBJECT")}
          >
            [+Object]
          </Button>{" "}
          <Button
            type="button"
            variant="contained"
            onClick={() => addRowChild("LIST")}
          >
            [+List]
          </Button>{" "}
          <Button
            type="button"
            variant="contained"
            onClick={() => removeArrayField(arrayFieldIndex)}
          >
            삭제
          </Button>{" "}
        </TableCell>
      </TableRow>
      {fields.map((fieldInfo, index) => {
        const { id, dataType } = fieldInfo;
        let fieldComponent: any = null;
        if (dataType === "PLAIN") {
          fieldComponent = (
            <PlainMuiRow
              key={id}
              arrayFieldIndex={index}
              removeArrayField={removeArrayFieldChild}
              fieldInfo={fieldInfo}
              arrayName={subListArrayName as "inputFields"}
            />
          );
        } else {
          fieldComponent = (
            <CollectionMuiRow
              key={id}
              arrayFieldIndex={index}
              removeArrayField={removeArrayFieldChild}
              fieldInfo={fieldInfo}
              arrayName={subListArrayName as "inputFields"}
            />
          );
        }
        return <>{fieldComponent}</>;
      })}
    </>
  );
}
