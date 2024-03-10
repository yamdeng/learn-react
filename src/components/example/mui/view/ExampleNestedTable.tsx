import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";

import Switch from "@mui/material/Switch";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ExampleNestedTable() {
  return (
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
          <TableRow>
            <TableCell sx={{ padding: "3px" }} align="center">
              depth
            </TableCell>
            <TableCell sx={{ padding: "3px" }} align="center">
              object
            </TableCell>
            <TableCell sx={{ padding: "3px" }}>
              <TextField
                required
                fullWidth
                id="name"
                label="name"
                name="name"
              />
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <TextField
                required
                fullWidth
                id="name"
                label="name"
                name="name"
              />
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <FormControl sx={{ m: 0, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <FormControl sx={{ m: 0, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <TextField
                required
                fullWidth
                id="name"
                label="name"
                name="name"
              />
            </TableCell>
            <TableCell align="center" sx={{ padding: "3px" }}>
              <Switch
                inputProps={{ "aria-label": "Switch demo" }}
                defaultChecked
              />{" "}
            </TableCell>
            <TableCell align="center">
              <Button type="button" variant="contained">
                삭제
              </Button>{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ padding: "3px" }} align="center">
              depth
            </TableCell>
            <TableCell sx={{ padding: "3px" }} align="center">
              object
            </TableCell>
            <TableCell sx={{ padding: "3px" }}>
              <TextField
                required
                fullWidth
                id="name"
                label="name"
                name="name"
              />
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <TextField
                required
                fullWidth
                id="name"
                label="name"
                name="name"
              />
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <FormControl sx={{ m: 0, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
            </TableCell>
            <TableCell align="right" sx={{ padding: "3px" }}>
              <FormControl sx={{ m: 0, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={""}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
            </TableCell>
            <TableCell align="left" colSpan={3}>
              <Button type="button" variant="contained">
                [+Field]
              </Button>{" "}
              <Button type="button" variant="contained">
                [+List]
              </Button>{" "}
              <Button type="button" variant="contained">
                삭제
              </Button>{" "}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
