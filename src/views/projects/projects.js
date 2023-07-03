import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Modal,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function Projects() {
  const [yourProject, SetYourProject] = useState("");
  const [yourDuration, SetYourDuration] = useState("");
  const [todayDate, SetTodayDate] = useState("");
  const [yourManagerName, SetManagerName] = useState("");
  const [yourStatus, SetStatus] = useState("");
  const [email, SetEmail] = useState("");

  const project = {
    projectName: yourProject,
    duration: yourDuration,
    todayDate: todayDate,
    email: email,
    managerName: yourManagerName,
    status: yourStatus,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {""}
      <Typography variant="h4" mt={5} display="flex" justifyContent="center">
        Projects
      </Typography>
      <Container>
        <Typography variant="h6" color="#016670">
          Managing Projects
        </Typography>

        <Box component="form" role="form">
          <Typography
            gutterBottom
            mt={2}
            color="textSecondary"
            fontWeight="bold"
          >
            Project Allocation
          </Typography>
          <TextField
            type="text"
            label="Project Name"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ my: 1 }}
            onChange={(e) => SetYourProject(e.target.value)}
          />
          <TextField
            type="text"
            label="Duration"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ my: 1 }}
            onChange={(e) => SetYourDuration(e.target.value)}
          />
          <TextField
            type="date"
            label=""
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ my: 1 }}
            onChange={(e) => SetTodayDate(e.target.value)}
          />
          <TextField
            type="email"
            label="Email"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ my: 1 }}
            onChange={(e) => SetEmail(e.target.value)}
          />

          <TextField
            type="text"
            label="Manager Name"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ my: 1 }}
            onChange={(e) => SetManagerName(e.target.value)}
          />
          <TextField
            type="text"
            label="Status"
            id="outlined-size-small"
            size="small"
            fullWidth
            sx={{ my: 1 }}
            onChange={(e) => SetStatus(e.target.value)}
          />

          <div>
            <Stack spacing={2} direction="row" pt={5}>
              <Button variant="contained">Register</Button>
              <div>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                >
                  Update
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      color="#016670"
                    >
                      Update Project Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <TextField
                        type="text"
                        label="Project Name"
                        id="outlined-size-small"
                        size="small"
                        fullWidth
                        sx={{ my: 1 }}
                        onChange={(e) => SetYourProject(e.target.value)}
                      />
                    </Typography>
                    <TextField
                      type="text"
                      label="Duration"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      sx={{ my: 1 }}
                      onChange={(e) => SetYourDuration(e.target.value)}
                    />
                    <TextField
                      type="date"
                      label=""
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      sx={{ my: 1 }}
                      onChange={(e) => SetTodayDate(e.target.value)}
                    />
                    <TextField
                      type="email"
                      label="Email"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      sx={{ my: 1 }}
                      onChange={(e) => SetEmail(e.target.value)}
                    />
                    <TextField
                      type="text"
                      label="Manager Name"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      sx={{ my: 1 }}
                      onChange={(e) => SetManagerName(e.target.value)}
                    />
                    <TextField
                      type="text"
                      label="Status"
                      id="outlined-size-small"
                      size="small"
                      fullWidth
                      sx={{ my: 1 }}
                      onChange={(e) => SetStatus(e.target.value)}
                    />
                    <Button variant="contained" color="success">
                      Update
                    </Button>
                  </Box>
                </Modal>
              </div>
              <div>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </div>
            </Stack>
          </div>
        </Box>
      </Container>
    </div>
  );
}
