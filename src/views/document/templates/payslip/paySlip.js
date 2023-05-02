import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import * as React from "react";
import letterhead from "../../../../assests/paysliphead.png";
import letterfoot from "../../../../assests/payslipfoot.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PaySlip(props) {
  const Fsize = "14px";

  return (
    <>
      <Grid Container sx={{ p: 0 }}>
        <Box sx={{ width: "100%" }}>
          <img
            src={letterhead}
            width="100%"
            style={{ borderRadius: "20px 20px 1000px 0px " }}
          />
        </Box>
        <Box py={2} px={5} mt={5}>
          <Box width="100%" textAlign="center">
            <Typography py={0.2} color="black" variant="h5" fontWeight="bold">
              Payslip
            </Typography>
            <Typography py={0.2} color="gray" variant="h6" fontWeight="bold">
              {props.yourCompany}
            </Typography>
            <Typography
              py={0.2}
              color="black"
              fontWeight="bold"
              fontSize={Fsize}
            >
              {props.yourAddress}
            </Typography>
            <Typography py={0.5} color="textSecondary" fontSize={Fsize}>
              {props.todayDate}
            </Typography>
          </Box>

          <Grid container display="flex" justifyContent="space-between" mt={5}>
            <Grid item xl={5} md={5}>
              <Box
                width="100%"
                my={1}
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  py={0.2}
                  color="black"
                  fontWeight="bold"
                  fontSize={Fsize}
                >
                  Employee Name :
                </Typography>
                <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
                  {props.empName}
                </Typography>
              </Box>

              <Box
                width="100%"
                my={1}
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  py={0.2}
                  color="black"
                  fontWeight="bold"
                  fontSize={Fsize}
                >
                  Designation
                </Typography>
                <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
                  {props.designation}
                </Typography>
              </Box>
            </Grid>

            <Grid item xl={5} md={5}>
              <Box
                width="100%"
                my={1}
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  py={0.2}
                  color="black"
                  fontWeight="bold"
                  fontSize={Fsize}
                >
                  Pay Period
                </Typography>
                <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
                  {props.payPeriod}
                </Typography>
              </Box>

              <Box
                width="100%"
                my={1}
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  py={0.2}
                  color="black"
                  fontWeight="bold"
                  fontSize={Fsize}
                >
                  Worked Days
                </Typography>
                <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
                  {props.workedDays}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container display="flex" justifyContent="space-between" mt={3}>
            <Grid item xl={5.9} md={5.9}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ width: "100%" }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Earnings</StyledTableCell>
                      <StyledTableCell align="right">Amount</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        Basic
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.basic}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        Incetive pay
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.insentive}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        House Rent Allowance
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.rent}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        Meal Allowance
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.meal}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        _
                      </StyledTableCell>
                      <StyledTableCell align="right">_</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        Total Earnings
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{ fontWeight: "bold" }}
                      >
                        $ {props.totalEarnings}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xl={5.9} md={5.9}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ width: "100%" }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Deductions</StyledTableCell>
                      <StyledTableCell align="right">Amount</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        Provident Fund
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.fund}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        Professional Tax
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.tax}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        Loan
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        $ {props.loan}
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        _
                      </StyledTableCell>
                      <StyledTableCell align="right">_</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        _
                      </StyledTableCell>
                      <StyledTableCell align="right">_</StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        Total Deductions
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        sx={{ fontWeight: "bold" }}
                      >
                        $ {props.totalDeductions}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box
                width="100%"
                my={2}
                display="flex"
                justifyContent="space-between"
              >
                <Typography
                  py={0.2}
                  color="black"
                  fontWeight="bold"
                  fontSize={Fsize}
                  ml={2}
                >
                  Net Pay
                </Typography>
                <Typography
                  py={0.2}
                  fontWeight="bold"
                  variant="h6"
                  color="black"
                  fontSize={Fsize}
                  mr={2}
                >
                  $ {props.netPay}
                </Typography>
              </Box>
              <Divider />
              <Divider sx={{ mt: 1 }} />
            </Grid>
          </Grid>

          <Grid container display="flex" justifyContent="space-around" mt={3}>
            <Grid item xl={4} md={4}>
              <Typography
                mt={3}
                color="black"
                fontWeight="bold"
                fontSize={Fsize}
                textAlign="center"
              >
                Employer Signature
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 100,
                  borderBottom: "1px solid black",
                  mb: 2,
                }}
              ></Box>
            </Grid>

            <Grid item xl={4} md={4}>
              <Typography
                mt={3}
                color="black"
                fontWeight="bold"
                fontSize={Fsize}
                textAlign="center"
              >
                Employee Signature
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: 100,
                  borderBottom: "1px solid black",
                  mb: 2,
                }}
              ></Box>
            </Grid>
          </Grid>

          <Typography textAlign="center" my={5} fontSize={Fsize}>
            This is system genarated payslip
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="end"
            mt={10}
            mb={0}
          >
            <Typography
              px={2}
              color="black"
              fontWeight="bold"
              fontSize={Fsize}
              sx={{ borderRight: "1px solid black" }}
            >
              {props.companyWebsite}
            </Typography>
            <Typography
              color="black"
              fontWeight="bold"
              fontSize={Fsize}
              px={2}
              sx={{ borderRight: "1px solid black" }}
            >
              {props.email}
            </Typography>
            <Typography color="black" fontWeight="bold" fontSize={Fsize} px={2}>
              {props.phone}
            </Typography>
          </Box>
        </Box>

        <Box>
          <img
            src={letterfoot}
            width="100%"
            height="30px"
            style={{ borderRadius: "0px 0px 20px 20px" }}
          />
        </Box>
      </Grid>
    </>
  );
}
