import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/material/FormHelperText";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { AutoCompleteTestInfo } from "../../types";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { autoCompleteSchema } from "../../utils/schemas";

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

const nameList: any[] = [
  {
    name: "Yamdeng1",
  },
  {
    name: "Yamdeng2",
  },
  {
    name: "Yamdeng3",
  },
  {
    name: "Yam",
  },
  {
    name: "YamdengGEALV",
  },
];

const roleTestData: any[] = [
  { roleId: 1, id: "role1", name: "권한1" },
  { roleId: 2, id: "role2", name: "권한2" },
  { roleId: 3, id: "role3", name: "권한3" },
  { roleId: 4, id: "role4", name: "권한4" },
  { roleId: 5, id: "role5", name: "권한5" },
];

export default function HookFormMuiAutoCompleteYup() {
  const {
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<AutoCompleteTestInfo>({
    defaultValues: { name: "", roleNumberList: [] },
    resolver: yupResolver(autoCompleteSchema),
  });

  const onSubmit: SubmitHandler<AutoCompleteTestInfo> = (
    data: AutoCompleteTestInfo
  ) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  console.log(watch("name")); // watch를 쓰는것은 좋지 않음
  console.log(errors);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 값하나 처리하는 autoComplete */}
          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={2} sx={{ textAlign: "right", paddingRight: "5px" }}>
              이름
            </Grid>
            <Grid xs={6}>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                  console.log(`hook-field-value : ${value}`);
                  return (
                    <>
                      <Autocomplete
                        id="name-autocomplete"
                        value={nameList.find((op) => op.name === value)}
                        onChange={(event: any, newValue: any | null) => {
                          onChange(event);
                          setValue("name", newValue ? newValue.name : "");
                        }}
                        onBlur={() => {
                          onBlur();
                        }}
                        options={nameList}
                        getOptionLabel={(option: { name: string }) => {
                          return option.name;
                        }}
                        isOptionEqualToValue={(option, value) => {
                          if (value) {
                            return option.name === value.name;
                          }
                          return false;
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            size="small"
                          />
                        )}
                      />
                      {errors.name ? (
                        <FormHelperText className="error_message">
                          {errors.name.message}
                        </FormHelperText>
                      ) : (
                        ""
                      )}
                    </>
                  );
                }}
              />
            </Grid>
          </Grid>

          {/* 숫자형 role id 멀티 선택 autocomplete */}
          <Grid
            container
            spacing={1}
            sx={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid xs={2} sx={{ textAlign: "right", paddingRight: "5px" }}>
              role numbers
            </Grid>
            <Grid xs={6}>
              <Controller
                name="roleNumberList"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => {
                  console.log(`hook-field-value : ${value}`);

                  let autoCompleteValue = [];
                  if (value) {
                    autoCompleteValue = roleTestData.filter(
                      (roleOriginInfo) => {
                        if (
                          value.find(
                            (roleId) => roleId === roleOriginInfo.roleId
                          )
                        ) {
                          return true;
                        } else {
                          return false;
                        }
                      }
                    );
                  }
                  return (
                    <>
                      <Autocomplete
                        multiple
                        id="role-number"
                        options={roleTestData}
                        getOptionLabel={(option) => option.name}
                        onChange={(event: any, newValue: any) => {
                          console.log("start");
                          console.log(newValue);
                          console.log("end");
                          onChange(event);
                          const roleIdList = newValue
                            ? newValue.map((info) => info.roleId)
                            : [];
                          setValue("roleNumberList", roleIdList);
                        }}
                        // isOptionEqualToValue={(option, value) => {
                        //   return option.roleId === value.roleId;
                        // }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Multiple values7"
                            placeholder="Favorites"
                            onChange={(event: any) => {
                              console.log(event);
                            }}
                          />
                        )}
                        value={autoCompleteValue}
                      />
                      {errors.name ? (
                        <FormHelperText className="error_message">
                          {errors.name.message}
                        </FormHelperText>
                      ) : (
                        ""
                      )}
                    </>
                  );
                }}
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
