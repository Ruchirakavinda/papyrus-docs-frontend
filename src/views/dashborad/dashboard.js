import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import logo from "../../assests/logo.png";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Divider,
  Grid,
} from "@mui/material";

export default function Dashboard() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
          width="100%"
          flexDirection="column"
          alignItems="center"
        >
          <img src={logo} width={150} />
          <Typography textAlign="center" px={10} color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Typography>
        </Box>
      </Grid>
      <Grid container display={"flex"} justifyContent={"center"} my={3}>
        <Grid item xl={3} md={3} mx={4} my={5}>
          <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://assets-global.website-files.com/618165faab94901955064900/618165faab9490c71e064b45_ACP-Blog-document-management-101-compressed.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="textSecondary"
                >
                  Document Manager
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidid
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box m={1}>
                <Button
                  mx={2}
                  variant="contained"
                  component="a"
                  href="/documents"
                  sx={{ borderRadius: 3 }}
                >
                  Explore Manager
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xl={3} md={3} mx={4} my={5}>
          <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.projectcubicle.com/wp-content/uploads/2022/04/Why-Does-Your-Company-Need-A-Project-Management-Software.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="textSecondary"
                >
                  Project Manager
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidid
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box m={1}>
                <Button
                  mx={2}
                  variant="contained"
                  component="a"
                  href="/projects"
                  sx={{ borderRadius: 3 }}
                >
                  Explore Manager
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xl={3} md={3} mx={4} my={5}>
          <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="http://www.zinghr.com/wp-content/uploads/2022/01/How-A-Digital-HRMS-Can-Help-With-Employee-Management-Issues.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="textSecondary"
                >
                  Employee Manager
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidid
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box m={1}>
                <Button
                  mx={2}
                  variant="contained"
                  component="a"
                  href="/employees"
                  sx={{ borderRadius: 3 }}
                >
                  Explore Manager
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
