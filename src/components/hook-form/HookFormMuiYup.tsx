import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { BasicInfo } from "../../types";
import { EMAIL_PATTERN } from "../../utils/pattern";
import { basicFormDefaultValues } from "../../utils/values";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { yupResolver } from "@hookform/resolvers/yup";
import { basicInfoShapeSchema } from "../../utils/schemas";

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

export default function HookFormMuiYup() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<BasicInfo>({
    defaultValues: basicFormDefaultValues,
    resolver: yupResolver(basicInfoShapeSchema),
  });

  const onSubmit: SubmitHandler<BasicInfo> = (data: BasicInfo) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  console.log(watch("description")); // watch를 쓰는것은 좋지 않음
  console.log(errors);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              id
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="id"
                control={control}
                rules={{ required: "필수값입니다" }}
                render={({ field }) => (
                  <TextField
                    margin="normal"
                    label="ID"
                    fullWidth
                    autoFocus
                    {...field}
                    helperText={errors.id ? errors.id.message : ""}
                    FormHelperTextProps={{
                      className: "error_message",
                    }}
                  />
                )}
              />
            </Grid>
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              이름
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: true,
                  minLength: { value: 6, message: "최소6 자리이상" },
                  maxLength: { value: 12, message: "최대 12자리이상" },
                }}
                render={({ field }) => (
                  <>
                    <TextField
                      margin="normal"
                      label="이름"
                      fullWidth
                      {...field}
                    />
                    {errors.name ? (
                      <FormHelperText className="error_message">
                        {errors.name.message}
                      </FormHelperText>
                    ) : (
                      ""
                    )}
                  </>
                )}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              나이
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="age"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    margin="normal"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              이메일
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: EMAIL_PATTERN }}
                render={({ field }) => (
                  <TextField margin="normal" fullWidth {...field} />
                )}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              암호
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="password"
                control={control}
                rules={{ required: true, minLength: 8 }}
                render={({ field }) => (
                  <TextField
                    type="password"
                    margin="normal"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              암호확인
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="confirm-password"
                control={control}
                rules={{ required: true, minLength: 8 }}
                render={({ field }) => (
                  <TextField
                    type="password"
                    margin="normal"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              알림설정
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="useAlarm"
                control={control}
                rules={{ minLength: 8 }}
                render={({ field: { onChange, value } }) => (
                  <Switch
                    checked={value}
                    onChange={(event) => {
                      onChange(event.target.checked);
                    }}
                  />
                )}
              />
            </Grid>
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              남/여
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="sex"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    {...field}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                )}
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              job
            </Grid>
            <Grid xs={4.5}>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Controller
                  name="job"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="">
                        <em>선택하세요</em>
                      </MenuItem>
                      <MenuItem value={"developer"}>Developer</MenuItem>
                      <MenuItem value={"pm"}>PM</MenuItem>
                      <MenuItem value={"pl"}>PL</MenuItem>
                      <MenuItem value={"owner"}>Owner</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
              설명
            </Grid>
            <Grid xs={4.5}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    margin="normal"
                    fullWidth
                    rows={4}
                    multiline
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "right" }}>
            <Button type="reset" variant="contained" sx={{ mt: 3, mb: 2 }}>
              취소
            </Button>{" "}
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              저장
            </Button>
          </Box>
        </form>
      </Container>
    </ThemeProvider>
  );
}
