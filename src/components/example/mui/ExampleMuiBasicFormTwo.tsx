import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

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

export default function ExampleMuiBasicFormTwo() {
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

        <Grid container spacing={1} sx={{ padding: "5px" }} alignItems="center">
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            암호
          </Grid>
          <Grid xs={4.5}>
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
            />
          </Grid>
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            암호확인
          </Grid>
          <Grid xs={4.5}>
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="confirm-password"
              label="confirm-password"
              name="confirm-password"
            />
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ padding: "5px" }} alignItems="center">
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            알림설정
          </Grid>
          <Grid xs={4.5}>
            <Switch
              inputProps={{ "aria-label": "Switch demo" }}
              defaultChecked
            />{" "}
          </Grid>
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            남/여
          </Grid>
          <Grid xs={4.5}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ padding: "5px" }} alignItems="center">
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            job
          </Grid>
          <Grid xs={4.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
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
              <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
          </Grid>
          <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
            설명
          </Grid>
          <Grid xs={4.5}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="description"
              name="description"
              rows={4}
              multiline
            />
          </Grid>
        </Grid>

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
