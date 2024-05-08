import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MuiGridBasicAdvance() {
  const length = 3;
  // 기본값이 3
  let responsiveColumnSize = 3;

  if (length < 4) {
    responsiveColumnSize = 12 / length;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <h1>length check test</h1>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} sm={responsiveColumnSize}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={12} sm={responsiveColumnSize}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={responsiveColumnSize}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12} sm={responsiveColumnSize}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
