import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 500,
}));

export default function MuiAccordionWithGrid() {
  const length = 3;
  // 기본값이 3
  let responsiveColumnSize = 4;

  if (length < 3) {
    responsiveColumnSize = 12 / length;
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
