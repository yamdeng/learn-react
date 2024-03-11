import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  useForm,
  useFieldArray,
  Controller,
  SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrayInfo } from "../../types";
import { EMAIL_PATTERN } from "../../utils/pattern";
import {
  basicFormDefaultValues,
  inputListDefaultValues,
} from "../../utils/values";
import { v4 as uuid } from "uuid";
import { basicInfoWithArrayShapeSchema } from "../../utils/schemas";

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

export default function HookFormMuiArrayYup() {
  const customDefaultValues = {
    ...basicFormDefaultValues,
    inputList: [],
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ArrayInfo>({
    defaultValues: customDefaultValues,
    resolver: yupResolver(basicInfoWithArrayShapeSchema),
  });

  /* empty array를 check 할수는 없음 */
  const { fields, append, remove } = useFieldArray({
    control,
    name: "inputList",
    rules: {
      minLength: 1,
    },
  });

  const onSubmit: SubmitHandler<ArrayInfo> = (data: ArrayInfo) => {
    console.log(`data : ${JSON.stringify(data)}`);
  };

  function addRow() {
    const newInfo = { ...inputListDefaultValues, id: uuid() };
    append(newInfo);
  }

  function removeArray(arrayIndex: number) {
    remove(arrayIndex);
  }

  function removeAll() {
    remove();
  }

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

          <Box sx={{ textAlign: "right" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={removeAll}
            >
              전체삭제
            </Button>{" "}
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={addRow}
            >
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
                  <TableCell width={140} align="center">
                    타입
                  </TableCell>
                  <TableCell width={140} align="center">
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
                  return (
                    <TableRow key={fieldInfo.id}>
                      <TableCell sx={{ padding: "3px" }}>
                        <Controller
                          name={`inputList.${index}.name`}
                          control={control}
                          rules={{
                            required: true,
                            minLength: { value: 6, message: "최소6 자리이상" },
                            maxLength: {
                              value: 12,
                              message: "최대 12자리이상",
                            },
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
                      </TableCell>
                      <TableCell align="right" sx={{ padding: "3px" }}>
                        <Controller
                          name={`inputList.${index}.length`}
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
                      </TableCell>
                      <TableCell align="right" sx={{ padding: "3px" }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Controller
                            name={`inputList.${index}.dataType`}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="">
                                  <em>선택하세요</em>
                                </MenuItem>
                                <MenuItem value={"string"}>String</MenuItem>
                                <MenuItem value={"number"}>Number</MenuItem>
                                <MenuItem value={"OBJECT"}>Object</MenuItem>
                                <MenuItem value={"LIST"}>List</MenuItem>
                              </Select>
                            )}
                          />
                        </FormControl>
                      </TableCell>
                      <TableCell align="right" sx={{ padding: "3px" }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <Controller
                            name={`inputList.${index}.requireYn`}
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <Select {...field}>
                                <MenuItem value="">
                                  <em>선택하세요</em>
                                </MenuItem>
                                <MenuItem value={"Y"}>예</MenuItem>
                                <MenuItem value={"N"}>아니오</MenuItem>
                              </Select>
                            )}
                          />
                        </FormControl>
                      </TableCell>
                      <TableCell align="right" sx={{ padding: "3px" }}>
                        <Controller
                          name={`inputList.${index}.description`}
                          control={control}
                          render={({ field }) => (
                            <TextField margin="normal" fullWidth {...field} />
                          )}
                        />
                      </TableCell>
                      <TableCell align="center" sx={{ padding: "3px" }}>
                        <Controller
                          name={`inputList.${index}.checkedAlarm`}
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
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          type="button"
                          variant="contained"
                          onClick={() => removeArray(index)}
                        >
                          삭제
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                  );
                })}
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
        </form>
      </Container>
    </ThemeProvider>
  );
}
