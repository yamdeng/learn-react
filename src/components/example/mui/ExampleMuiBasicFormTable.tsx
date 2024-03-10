import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          marginTop: 30,
        },
      },
    },
  },
});

export default function ExampleMuiBasicFormTable() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ padding: "5px" }} alignItems="center">
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            id
          </Grid>
          <Grid xs={4.5}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="id"
              name="id"
              autoFocus
            />
          </Grid>
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            이름
          </Grid>
          <Grid xs={4.5}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ padding: "5px" }} alignItems="center">
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            나이
          </Grid>
          <Grid xs={4.5}>
            <TextField
              type="number"
              margin="normal"
              required
              fullWidth
              id="age"
              label="age"
              name="age"
            />
          </Grid>
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            이메일
          </Grid>
          <Grid xs={4.5}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            전체삭제
          </Button>{" "}
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            추가
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
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
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            취소
          </Button>{" "}
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            저장
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
