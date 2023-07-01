import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PaySlip from "./paySlip";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import { useEffect } from "react";
import {
  getPayslipById,
  updatePayslipById,
} from "../../../../api-services/docService/payslipService";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewPaySlip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [yourCompany, SetYourCompany] = useState("");
  const [yourAddress, SetYourAddress] = useState("");
  const [todayDate, SetTodayDate] = useState("");

  const [empName, setEmpName] = useState("");
  const [designation, setDesignation] = useState("");
  const [payPeriod, setPayperiod] = useState("");
  const [workedDays, setWorkedDyas] = useState("");

  const [basic, setBasic] = useState(0);
  const [insentive, setInsntive] = useState(0);
  const [rent, setRent] = useState(0);
  const [meal, setMeal] = useState(0);

  const [fund, setFund] = useState(0);
  const [tax, setTax] = useState(0);
  const [loan, setLoan] = useState(0);

  const totalEarnings =
    parseInt(basic) + parseInt(insentive) + parseInt(rent) + parseInt(meal);
  const totalDeductions = parseInt(fund) + parseInt(tax) + parseInt(loan);
  const netPay = totalEarnings - totalDeductions;

  const [companyWebsite, SetCompanyWebsite] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");

  const pdfExportComponent = useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  useEffect(() => {
    async function getThePayslipById() {
      const response = await getPayslipById(id);
      console.log("Payslip : " + response);
      if (response !== null) {
        SetYourCompany(response.companyName);
        SetYourAddress(response.yourAddress);
        SetTodayDate(response.todayDate);
        setEmpName(response.employeeName);
        setDesignation(response.designation);
        setPayperiod(response.payPeriod);
        setWorkedDyas(response.workedDays);
        setBasic(response.basic);
        setInsntive(response.incetivePay);
        setRent(response.houseRentAllowance);
        setMeal(response.mealAllowance);
        setFund(response.providentFund);
        setTax(response.professionalTax);
        setLoan(response.loan);
        SetCompanyWebsite(response.companyWebsite);
        SetEmail(response.email);
        SetPhone(response.phone);
      } else {
        console.log(response);
      }
    }
    getThePayslipById();
  }, []);

  const payslipObj = {
    templateType: "payslip",
    companyName: yourCompany,
    yourAddress: yourAddress,
    todayDate: todayDate,
    employeeName: empName,
    designation: designation,
    payPeriod: payPeriod,
    workedDays: workedDays,
    basic: basic,
    incetivePay: insentive,
    houseRentAllowance: rent,
    mealAllowance: meal,
    providentFund: fund,
    professionalTax: tax,
    loan: loan,
    companyWebsite: companyWebsite,
    email: email,
    phone: phone,
  };

  async function updatePayslip() {
    const response = await updatePayslipById(id, payslipObj);
    if (response === "ok") {
      console.log("updated Successfully");
      navigate("/documents");
    } else {
      console.log("update failed");
    }
  }
  return (
    <>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xl="5" md="12" pr={5} pt={5}>
            <Typography
              gutterBottom
              variant="h5"
              color="textSecondary"
              fontWeight="bold"
              pb={2}
            >
              Create Payslip
            </Typography>
            <Divider />
            <Box component="form" role="form">
              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Company
              </Typography>
              <TextField
                type="text"
                label="Your Company"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetYourCompany(e.target.value)}
                value={yourCompany}
              />
              <TextField
                type="text"
                label="Address"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetYourAddress(e.target.value)}
                value={yourAddress}
              />
              <TextField
                type="text"
                label="Today Date"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetTodayDate(e.target.value)}
                value={todayDate}
              />

              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Employee Details
              </Typography>

              <TextField
                type="text"
                label="Employee Name"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setEmpName(e.target.value)}
                value={empName}
              />
              <TextField
                type="text"
                label="Designation"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setDesignation(e.target.value)}
                value={designation}
              />

              <TextField
                type="text"
                label="Pay Period"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setPayperiod(e.target.value)}
                value={payPeriod}
              />

              <TextField
                type="text"
                label="Worked Days"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setWorkedDyas(e.target.value)}
                value={workedDays}
              />

              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Earnings
              </Typography>
              <TextField
                type="text"
                label="Basic"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setBasic(e.target.value)}
                value={basic}
              />

              <TextField
                type="text"
                label="Incetive pay"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setInsntive(e.target.value)}
                value={insentive}
              />

              <TextField
                type="text"
                label="House Rent Allowance"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setRent(e.target.value)}
                value={rent}
              />

              <TextField
                type="text"
                label="Meal Allowance"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setMeal(e.target.value)}
                value={meal}
              />

              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Deductions
              </Typography>
              <TextField
                type="text"
                label="Provident Fund"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setFund(e.target.value)}
                value={fund}
              />
              <TextField
                type="text"
                label="Professional Tax"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setTax(e.target.value)}
                value={tax}
              />

              <TextField
                type="text"
                label="Loan"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => setLoan(e.target.value)}
                value={loan}
              />

              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Contact Details
              </Typography>
              <TextField
                type="text"
                label="Your Company Website"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetCompanyWebsite(e.target.value)}
                value={companyWebsite}
              />
              <TextField
                type="email"
                label="Your Company Email"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetEmail(e.target.value)}
                value={email}
              />
              <TextField
                type="text"
                label="Your Company Phone Number"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetPhone(e.target.value)}
                value={phone}
              />

              <Box
                display="flex"
                justifyContent="end"
                alignItems="center"
                py={3}
              >
                <Button
                  mx={2}
                  variant="outlined"
                  sx={{ borderRadius: 2, px: 2 }}
                  component="a"
                  href="/documents"
                >
                  Cancel
                </Button>
                <Button
                  mx={2}
                  variant="contained"
                  sx={{ borderRadius: 2, px: 2, ml: 5 }}
                  onClick={updatePayslip}
                >
                  Save Changes
                </Button>
                <Button
                  mx={2}
                  variant="contained"
                  sx={{ borderRadius: 2, px: 2, ml: 5 }}
                  onClick={exportPDFWithComponent}
                >
                  Download
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xl="7" md="12" pt={5}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="textSecondary"
              mb={5}
            >
              Preview
            </Typography>
            <Divider />
            <PDFExport
              ref={pdfExportComponent}
              fileName={"Payslip - " + payPeriod + " - " + empName}
              scale={0.8}
              paperSize="A4"
              margin="0.5cm"
            >
              <Box
                sx={{
                  boxShadow: "2px 2px 20px  rgba(0,0,0,0.1)",
                  borderRadius: 5,
                }}
              >
                <PaySlip
                  yourCompany={yourCompany}
                  yourAddress={yourAddress}
                  todayDate={todayDate}
                  empName={empName}
                  designation={designation}
                  payPeriod={payPeriod}
                  workedDays={workedDays}
                  basic={basic}
                  insentive={insentive}
                  rent={rent}
                  meal={meal}
                  fund={fund}
                  tax={tax}
                  loan={loan}
                  totalEarnings={totalEarnings}
                  totalDeductions={totalDeductions}
                  netPay={netPay}
                  companyWebsite={companyWebsite}
                  email={email}
                  phone={phone}
                />
              </Box>
            </PDFExport>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
