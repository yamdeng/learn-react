import { useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useFieldArray, useFormContext } from "react-hook-form";
import { FinalFormInput } from "../../../types";
import { finalDefaultFieldInput } from "../../../utils/values";
import { v4 as uuid } from "uuid";
import { FieldListTypeContext } from "../../../utils/contexts";
import PlainMuiRow from "./PlainMuiRow";
import CollectionMuiRow from "./CollectionMuiRow";

export default function FieldsMuiTable(props: {
  rootArrayName: "inputFields" | "outputFields";
}) {
  const { rootArrayName } = props;

  const { ioType } = useContext(FieldListTypeContext);

  const { control } = useFormContext<FinalFormInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: rootArrayName,
  });

  function addRow(dataType: string) {
    let categoryLabel = "";
    if (dataType === "PLAIN") {
      categoryLabel = "P";
    } else if (dataType === "OBJECT") {
      categoryLabel = "O";
    } else if (dataType === "LIST") {
      categoryLabel = "L";
    }

    const newInfo = {
      ...finalDefaultFieldInput,
      id: uuid(),
      dataType,
      depth: 1,
      categoryLabel: categoryLabel,
      parentTypeLabel: null,
      arrayName: rootArrayName,
      ioType: ioType,
    };
    append(newInfo);
  }

  function removeAll() {
    remove();
  }

  function removeArrayField(index: number) {
    remove(index);
  }

  return (
    <>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => addRow("PLAIN")}
        >
          +Field
        </Button>{" "}
        <Button
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => addRow("OBJECT")}
        >
          +Object
        </Button>{" "}
        <Button
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => addRow("LIST")}
        >
          +List
        </Button>{" "}
        <Button
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={removeAll}
        >
          -delete
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={130}>depth</TableCell>
              <TableCell width={80}>구분</TableCell>
              <TableCell width={130}>이름</TableCell>
              <TableCell width={130} align="right">
                길이
              </TableCell>
              <TableCell width={130} align="center">
                타입
              </TableCell>
              <TableCell width={130} align="center">
                필수
              </TableCell>
              <TableCell align="center">설명</TableCell>
              <TableCell width={130} align="center">
                알림여부
              </TableCell>
              <TableCell width={130} align="center">
                삭제
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((fieldInfo, index) => {
              const { id, dataType } = fieldInfo;
              let fieldComponent: any = null;
              if (dataType === "PLAIN") {
                fieldComponent = (
                  <PlainMuiRow
                    key={id}
                    arrayFieldIndex={index}
                    removeArrayField={removeArrayField}
                    fieldInfo={fieldInfo}
                    arrayName={rootArrayName as "inputFields"}
                  />
                );
              } else {
                fieldComponent = (
                  <CollectionMuiRow
                    key={id}
                    arrayFieldIndex={index}
                    removeArrayField={removeArrayField}
                    fieldInfo={fieldInfo}
                    arrayName={rootArrayName as "inputFields"}
                  />
                );
              }
              return <>{fieldComponent}</>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
