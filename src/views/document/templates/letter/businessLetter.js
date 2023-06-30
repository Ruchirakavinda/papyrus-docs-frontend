import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import letterhead from "../../../../assests/letterhead.png";
import letterfoot from "../../../../assests/letterfoot.png";

export default function BusinessLetter(props) {
  const Fsize = "14px";

  return (
    <>
      <Grid Container sx={{ p: 0 }}>
        <Box sx={{ width: "100%" }}>
          <img
            src={letterhead}
            width="100%"
            alt="letter head"
            style={{ borderRadius: "20px" }}
          />
        </Box>
        <Box py={2} px={5} mt={-10}>
          <Box width="30%">
            <Typography py={0.2} color="red" variant="h5" fontWeight="bold">
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
          <Box width="30%" my={3}>
            <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
              {props.addresseeName}
            </Typography>
            <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
              {props.addresseeTitle}
            </Typography>
            <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
              {props.addresseeCompany}
            </Typography>
            <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
              {props.companyAddress}
            </Typography>
          </Box>

          <Box width="30%" my={3}>
            <Typography py={0.2} color="textSecondary" fontSize={Fsize}>
              Dear {props.salutation},
            </Typography>
          </Box>

          <Box width="100%" my={3}>
            <Typography
              py={1}
              color="textSecondary"
              fontSize={Fsize}
              align="justify"
            >
              {props.body1}
            </Typography>

            <Typography
              py={1}
              color="textSecondary"
              fontSize={Fsize}
              align="justify"
            >
              {props.body2}
            </Typography>

            <Typography
              py={1}
              color="textSecondary"
              fontSize={Fsize}
              align="justify"
            >
              {props.body3}
            </Typography>
          </Box>

          <Box width="30%" my={3}>
            <Typography py={1} color="textSecondary" fontSize={Fsize}>
              Sincerely,
            </Typography>
            <Typography
              py={0.2}
              color="black"
              fontWeight="bold"
              fontSize={Fsize}
            >
              {props.yourName}
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="end"
            mt={15}
            mb={-15}
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
            alt="letter footer"
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </Box>
      </Grid>
    </>
  );
}
