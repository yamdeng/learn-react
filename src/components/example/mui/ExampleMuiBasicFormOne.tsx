import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
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
          marginTop: 10,
        },
      },
    },
  },
});

export default function ExampleMuiBasicFormOne() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="md">
        <Box
          sx={{
            marginTop: 0,
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="id"
              name="id"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
            />
            <TextField
              type="number"
              margin="normal"
              required
              fullWidth
              id="age"
              label="age"
              name="age"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="email"
              name="email"
            />
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="password"
              label="password"
              name="password"
            />
            <TextField
              type="password"
              margin="normal"
              required
              fullWidth
              id="confirm-password"
              label="confirm-password"
              name="confirm-password"
            />
            <Box>
              <Switch
                inputProps={{ "aria-label": "Switch demo" }}
                defaultChecked
              />{" "}
              알림설정
            </Box>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={""}
                label="Age"
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
            <Box sx={{ textAlign: "right" }}>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                취소
              </Button>{" "}
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                저장
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
