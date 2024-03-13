import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function ExampleMuiTable() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3.5}>
          {/* 좌측 테이블 */}
          <>
            <TableContainer sx={{ paddingTop: "20px" }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>구분</TableCell>
                    <TableCell align="right">이름</TableCell>
                    <TableCell align="center">타입</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">aaa</TableCell>
                    <TableCell align="right">bbb</TableCell>
                    <TableCell align="right">ccc</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">aaa</TableCell>
                    <TableCell align="right">bbb</TableCell>
                    <TableCell align="right">ccc</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="right">aaa</TableCell>
                    <TableCell align="right">bbb</TableCell>
                    <TableCell align="right">ccc</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        </Grid>
        {/* 우측 테이블 */}
        <Grid item xs={8.5}>
          <>
            <Box sx={{ textAlign: "right" }}>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                취소
              </Button>{" "}
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                저장
              </Button>
            </Box>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>depth</TableCell>
                    <TableCell align="right">구분</TableCell>
                    <TableCell align="center">타입</TableCell>
                    <TableCell align="right">이름</TableCell>
                    <TableCell align="right">버튼들</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>OOL</TableCell>
                    <TableCell>PLAIN</TableCell>
                    <TableCell>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Button type="button" variant="contained">
                        +Field
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +Object
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +List
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        삭제
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>OOL</TableCell>
                    <TableCell>PLAIN</TableCell>
                    <TableCell>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Button type="button" variant="contained">
                        +Field
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +Object
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +List
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        삭제
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <Box sx={{ textAlign: "right" }}>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                취소
              </Button>{" "}
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                저장
              </Button>
            </Box>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>depth</TableCell>
                    <TableCell align="right">구분</TableCell>
                    <TableCell align="center">타입</TableCell>
                    <TableCell align="right">이름</TableCell>
                    <TableCell align="right">버튼들</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>OOL</TableCell>
                    <TableCell>PLAIN</TableCell>
                    <TableCell>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Button type="button" variant="contained">
                        +Field
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +Object
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +List
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        삭제
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>OOL</TableCell>
                    <TableCell>PLAIN</TableCell>
                    <TableCell>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Button type="button" variant="contained">
                        +Field
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +Object
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        +List
                      </Button>{" "}
                      <Button type="button" variant="contained">
                        삭제
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        </Grid>
      </Grid>
    </>
  );
}
