import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ExampleGeneralBasicForm from "./ExampleGeneralBasicForm";
import ExampleNestedTable from "./ExampleNestedTable";

import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function ExampleFormModal() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="xl">
        <ExampleGeneralBasicForm />
        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            전체삭제
          </Button>{" "}
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            추가
          </Button>
        </Box>
        <ExampleNestedTable />
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
