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
import BusinessLetter from "./businessLetter";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import {
  getBusLetterById,
  updateBusLetterById,
} from "../../../../api-services/docService/businessLetterService";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ViewBusinessLetter() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [yourCompany, SetYourCompany] = useState("");
  const [yourAddress, SetYourAddress] = useState("");
  const [todayDate, SetTodayDate] = useState("");
  const [addresseeName, SetAddresseeName] = useState("");
  const [addresseeTitle, SetAddresseeTitle] = useState("");
  const [addresseeCompany, SetAddresseeCompany] = useState("");
  const [companyAddress, SetCompanyAddress] = useState("");
  const [salutation, SetSalutation] = useState("");
  const [body1, SetBody1] = useState("");
  const [body2, SetBody2] = useState("");
  const [body3, SetBody3] = useState("");
  const [yourName, SetYourName] = useState("");
  const [companyWebsite, SetCompanyWebsite] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");

  useEffect(() => {
    async function getTheBusLetterById() {
      const response = await getBusLetterById(id);
      console.log("Letter : " + response);
      if (response !== null) {
        SetYourCompany(response.companyName);
        SetYourAddress(response.yourAddress);
        SetTodayDate(response.todayDate);
        SetAddresseeName(response.addresseeName);
        SetAddresseeTitle(response.addresseeTitle);
        SetAddresseeCompany(response.addresseeCompany);
        SetCompanyAddress(response.companyAddress);
        SetSalutation(response.salutation);
        SetBody1(response.body1);
        SetBody2(response.body2);
        SetBody3(response.body3);
        SetYourName(response.yourName);
        SetCompanyWebsite(response.companyWebsite);
        SetEmail(response.email);
        SetPhone(response.phone);
      } else {
        console.log(response);
      }
    }
    getTheBusLetterById();
  }, []);

  const pdfExportComponent = useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const busLetterObj = {
    templateType: "business-letter",
    companyName: yourCompany,
    yourAddress: yourAddress,
    todayDate: todayDate,
    addresseeName: addresseeName,
    addresseeTitle: addresseeTitle,
    addresseeCompany: addresseeCompany,
    companyAddress: companyAddress,
    salutation: salutation,
    body1: body1,
    body2: body2,
    body3: body3,
    yourName: yourName,
    companyWebsite: companyWebsite,
    email: email,
    phone: phone,
  };

  async function updateBusLetter() {
    const response = await updateBusLetterById(id, busLetterObj);
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
              Edit Business Letter
            </Typography>
            <Divider />
            <Box component="form" role="form">
              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Your Address
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
                Addressee Details
              </Typography>

              <TextField
                type="text"
                label="Addressee Name"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetAddresseeName(e.target.value)}
                value={addresseeName}
              />
              <TextField
                type="text"
                label="Addressee Title"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetAddresseeTitle(e.target.value)}
                value={addresseeTitle}
              />
              <TextField
                type="text"
                label="Addressee Company"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetAddresseeCompany(e.target.value)}
                value={addresseeCompany}
              />
              <TextField
                type="text"
                label="Company Address"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetCompanyAddress(e.target.value)}
                value={companyAddress}
              />

              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Letter Content
              </Typography>
              <TextField
                type="text"
                label="Salutation (or greeting)"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetSalutation(e.target.value)}
                value={salutation}
              />
              <TextField
                type="text"
                label="Letter Body (Paragraph 1)"
                id="outlined-size-small"
                size="small"
                fullWidth
                multiline
                rows={4}
                sx={{ my: 1 }}
                onChange={(e) => SetBody1(e.target.value)}
                value={body1}
              />
              <TextField
                type="text"
                label="Letter Body (Paragraph 2)"
                id="outlined-size-small"
                size="small"
                fullWidth
                multiline
                rows={2}
                sx={{ my: 1 }}
                onChange={(e) => SetBody2(e.target.value)}
                value={body2}
              />
              <TextField
                type="text"
                label="Letter Body (Paragraph 3)"
                id="outlined-size-small"
                size="small"
                fullWidth
                multiline
                rows={2}
                sx={{ my: 1 }}
                onChange={(e) => SetBody3(e.target.value)}
                value={body3}
              />

              <Typography
                gutterBottom
                mt={2}
                color="textSecondary"
                fontWeight="bold"
              >
                Signature
              </Typography>
              <TextField
                type="text"
                label="Your Name"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetYourName(e.target.value)}
                value={yourName}
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
                  onClick={updateBusLetter}
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
              fileName={"Bussines Letter - " + yourCompany + " - " + todayDate}
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
                <BusinessLetter
                  yourCompany={yourCompany}
                  yourAddress={yourAddress}
                  todayDate={todayDate}
                  addresseeName={addresseeName}
                  addresseeTitle={addresseeTitle}
                  addresseeCompany={addresseeCompany}
                  companyAddress={companyAddress}
                  salutation={salutation}
                  body1={body1}
                  body2={body2}
                  body3={body3}
                  yourName={yourName}
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
