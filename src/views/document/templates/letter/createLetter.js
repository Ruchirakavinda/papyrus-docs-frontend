import * as React from "react";
import { useTheme } from "@mui/material/styles";
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

export default function CreateBusinessLetter() {
  const [yourCompany, SetYourCompany] = useState("Your Company Name");
  const [yourAddress, SetYourAddress] = useState(
    "No 27, Prasannapura, Pitipana South, Homagama."
  );
  const [todayDate, SetTodayDate] = useState("12th January 2030");
  const [addresseeName, SetAddresseeName] = useState(" Addressee Name");
  const [addresseeTitle, SetAddresseeTitle] = useState("Address Title");
  const [addresseeCompany, SetAddresseeCompany] = useState("Addressee Company");
  const [companyAddress, SetCompanyAddress] = useState(
    "No 27, Prasannapura, Pitipana South, Homagama."
  );
  const [salutation, SetSalutation] = useState(" Dear Salutation,");
  const [body1, SetBody1] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugia nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [body2, SetBody2] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugia nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [body3, SetBody3] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugia nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [yourName, SetYourName] = useState("Your Full Name");
  const [yourTitle, SetYourTitle] = useState("Your Title");
  const [companyWebsite, SetCompanyWebsite] = useState("www.yourwebsite.com");
  const [email, SetEmail] = useState("urmail@gmail.com");
  const [phone, SetPhone] = useState("+89 5810 2132");

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
              Create Business Letter
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
              />
              <TextField
                type="text"
                label="Address"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetYourAddress(e.target.value)}
              />
              <TextField
                type="text"
                label="Today Date"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetTodayDate(e.target.value)}
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
              />
              <TextField
                type="text"
                label="Addressee Title"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetAddresseeTitle(e.target.value)}
              />
              <TextField
                type="text"
                label="Addressee Company"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetAddresseeCompany(e.target.value)}
              />
              <TextField
                type="text"
                label="Company Address"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetCompanyAddress(e.target.value)}
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
              />
              <TextField
                type="text"
                label="Your title"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetYourTitle(e.target.value)}
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
                label="Your Company Eebsite"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetCompanyWebsite(e.target.value)}
              />
              <TextField
                type="email"
                label="Your Company Email"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetEmail(e.target.value)}
              />
              <TextField
                type="text"
                label="Your Company Phone Number"
                id="outlined-size-small"
                size="small"
                fullWidth
                sx={{ my: 1 }}
                onChange={(e) => SetPhone(e.target.value)}
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
                >
                  Create
                </Button>
                <Button
                  mx={2}
                  variant="contained"
                  sx={{ borderRadius: 2, px: 2, ml: 5 }}
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
                yourTitle={yourTitle}
                companyWebsite={companyWebsite}
                email={email}
                phone={phone}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
