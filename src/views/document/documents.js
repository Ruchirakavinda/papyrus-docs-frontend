import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import doc from "../../assests/doc.png";
import {
  getAllBusLetters,
  removeBusLetterById,
} from "../../api-services/docService/businessLetterService";
import { useEffect } from "react";
import { useState } from "react";
import {
  getAllPayslips,
  removePayslipById,
} from "../../api-services/docService/payslipService";

export default function Documemnts() {
  const [busLetters, setBusLetters] = useState([]);
  const [payslips, setPayslips] = useState([]);

  async function getTheBusLetters() {
    const response = await getAllBusLetters();

    if (response !== null) {
      setBusLetters(response);
    } else {
      console.log("All letters : " + response);
    }
  }

  async function getThePayslips() {
    const response = await getAllPayslips();

    if (response !== null) {
      setPayslips(response);
    } else {
      console.log("All Payslips : " + response);
    }
  }

  useEffect(() => {
    getTheBusLetters();
    getThePayslips();
  }, []);

  async function deleteBusLetter(id) {
    const response = await removeBusLetterById(id);

    if (response === "ok") {
      getTheBusLetters();
      console.log("Business letter deleted Successfully");
    } else {
      console.log("Business letter deletion failed");
      console.log(response);
    }
  }

  async function deletePayslip(id) {
    const response = await removePayslipById(id);

    if (response === "ok") {
      getThePayslips();
      console.log("Payslip deleted Successfully");
    } else {
      console.log("Payslip deletion failed");
      console.log(response);
    }
  }

  const companyLetters = busLetters.map((bus) => {
    return (
      <Grid item xs={12} md={3} lg={2} xl={2} m={2} key={bus.id}>
        <Card sx={{ borderRadius: 5, height: "100%" }}>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="end"
              alignItems="end"
              sx={{ width: "100%" }}
            >
              <Box
                onClick={() => deleteBusLetter(bus.id)}
                sx={{ cursor: "pointer" }}
              >
                <DeleteIcon color="error" fontSize="medium" />
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={doc}
              alt="Live from space album cover"
            />
            <Typography variant="text" mb={2}>
              {"Bussines Letter - " + bus.companyName + " - " + bus.todayDate}
            </Typography>

            {/* <Button
              variant="outlined"
              size="small"
              sx={{ borderRadius: 2, px: 2, fontSize: 12 }}
            >
              Download
            </Button> */}
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 2, px: 2, fontSize: 12, my: 2 }}
              component="a"
              href={`/business_letter/${bus.id}`}
            >
              View & Edit
            </Button>
          </Box>
        </Card>
      </Grid>
    );
  });

  const companyPayslips = payslips.map((pay) => {
    return (
      <Grid item xs={12} md={3} lg={2} xl={2} m={2} key={pay.id}>
        <Card sx={{ borderRadius: 5, height: "100%" }}>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="end"
              alignItems="end"
              sx={{ width: "100%" }}
            >
              <Box
                onClick={() => deletePayslip(pay.id)}
                sx={{ cursor: "pointer" }}
              >
                <DeleteIcon color="error" fontSize="medium" />
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={doc}
              alt="Live from space album cover"
            />
            <Typography variant="text" mb={2}>
              {"Payslip - " + pay.payPeriod + " - " + pay.employeeName}
            </Typography>

            {/* <Button
            variant="outlined"
            size="small"
            sx={{ borderRadius: 2, px: 2, fontSize: 12 }}
          >
            Download
          </Button> */}
            <Button
              variant="contained"
              size="small"
              sx={{ borderRadius: 2, px: 2, fontSize: 12, my: 2 }}
              component="a"
              href={`/payslip/${pay.id}`}
            >
              View & Edit
            </Button>
          </Box>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          mt={5}
          fontWeight={500}
          display="flex"
          justifyContent="center"
          color="textSecondary"
        >
          Create a Document
        </Typography>
        <Typography
          mt={2}
          display="flex"
          justifyContent="center"
          color="textSecondary"
          textTransform="capitalize"
        >
          select template and get started create document
        </Typography>
        <Grid container display={"flex"} justifyContent={"center"} my={1}>
          <Grid item xl={2.5} md={2.5} mx={3} my={5}>
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://i.pinimg.com/736x/9f/c0/60/9fc060d443cafdf50640b78faeb54283--cover-letter-for-job-cover-letters.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    Business Letter Template
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box m={1}>
                  <Button
                    size="small"
                    mx={2}
                    variant="contained"
                    component="a"
                    href="/business_letter"
                    sx={{ borderRadius: 2, px: 2, fontSize: 12 }}
                  >
                    Use Template
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xl={2.5} md={2.5} mx={3} my={5}>
            <Card
              sx={{
                borderRadius: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://t4.ftcdn.net/jpg/01/22/85/75/360_F_122857565_6HkVkpWUUqU85bRVtAkPPwEvpdqMCwt8.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    Company Payslip Template
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box m={1}>
                  <Button
                    size="small"
                    mx={2}
                    variant="contained"
                    component="a"
                    href="/payslip"
                    sx={{ borderRadius: 2, px: 2, fontSize: 12 }}
                  >
                    Use Template
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Divider />
        <Typography
          color="textSecondary"
          fontWeight="bold"
          variant="h6"
          my={2}
          display="flex"
          justifyContent="center"
        >
          Your Documents
        </Typography>
        <Divider />
        <Typography
          color="textSecondary"
          fontWeight="bold"
          variant="text"
          my={2}
          display="flex"
          justifyContent="start"
        >
          Business Letters
        </Typography>
        <Grid container display="flex" justifyContent="start" my={2}>
          {companyLetters}
        </Grid>

        <Divider />
        <Typography
          color="textSecondary"
          fontWeight="bold"
          variant="text"
          my={2}
          display="flex"
          justifyContent="start"
        >
          Payslips
        </Typography>
        <Grid container display="flex" justifyContent="start" my={2}>
          {companyPayslips}
        </Grid>
      </Container>
    </>
  );
}
