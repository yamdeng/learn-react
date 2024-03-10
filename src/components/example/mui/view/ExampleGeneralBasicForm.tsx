import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function ExampleGeneralBasicForm() {
  return (
    <>
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
    </>
  );
}
