import {
  FormProvider,
  useForm,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import { FinalFormInput } from "../../types";
import { finalFormValues } from "../../utils/values";
import { yupResolver } from "@hookform/resolvers/yup";
import { finalSchema } from "../../utils/schemas";
import FieldsMuiTable from "./mui/FieldsMuiTable";
import { FieldListTypeContext } from "../../utils/contexts";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function HookFormMuiFinal() {
  const methods = useForm<FinalFormInput>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: finalFormValues,
    resolver: yupResolver(finalSchema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FinalFormInput> = (data: FinalFormInput) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  console.log(errors);

  return (
    <ThemeProvider theme={defaultTheme}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container maxWidth="xl">
            <Grid
              container
              spacing={1}
              sx={{ padding: "5px" }}
              alignItems="center"
            >
              <Grid xs={1.5} sx={{ textAlign: "right", paddingRight: "5px" }}>
                이름
              </Grid>
              <Grid xs={4.5}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field, fieldState }) => (
                    <TextField
                      margin="normal"
                      label="NAME"
                      fullWidth
                      autoFocus
                      {...field}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                      FormHelperTextProps={{
                        className: "error_message",
                      }}
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
                  render={({ field, fieldState }) => (
                    <TextField
                      margin="normal"
                      label="EMAIL"
                      fullWidth
                      autoFocus
                      {...field}
                      helperText={
                        fieldState.error ? fieldState.error.message : ""
                      }
                      FormHelperTextProps={{
                        className: "error_message",
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            {/* input */}
            <FieldListTypeContext.Provider
              value={{
                ioType: "I",
              }}
            >
              <FieldsMuiTable rootArrayName="inputFields" />
            </FieldListTypeContext.Provider>

            {/* output */}
            <FieldListTypeContext.Provider
              value={{
                ioType: "O",
              }}
            >
              <FieldsMuiTable rootArrayName="outputFields" />
            </FieldListTypeContext.Provider>

            <Box sx={{ textAlign: "right" }}>
              <Button type="reset" variant="contained" sx={{ mt: 3, mb: 2 }}>
                취소
              </Button>{" "}
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                저장
              </Button>
            </Box>
          </Container>
        </form>
      </FormProvider>
    </ThemeProvider>
  );
}
