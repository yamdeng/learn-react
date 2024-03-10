import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ExampleFormModal from "./view/ExampleFormModal";

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
  const [visibleModal, setVisibleModal] = useState(false);
  const handleModalDisplay = function (visible: boolean) {
    setVisibleModal(visible);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "left" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleModalDisplay(true)}
          >
            modal open
          </Button>
        </Box>
      </Container>

      <Dialog
        onClose={() => handleModalDisplay(false)}
        open={visibleModal}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>form modal</DialogTitle>
        <ExampleFormModal />
      </Dialog>
    </ThemeProvider>
  );
}
