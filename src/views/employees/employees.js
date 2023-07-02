import * as React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

function createData(ID, FirstName, LastName, Email, Password, Role) {
  return { ID, FirstName, LastName, Email, Password, Role };
}

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Employees() {
  const [deleteItemId, setDeleteItemId] = React.useState(null);
  const [openConfirmation, setOpenConfirmation] = React.useState(false);
  const [editItemId, setEditItemId] = React.useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [editedFirstName, setEditedFirstName] = React.useState("");
  const [editedLastName, setEditedLastName] = React.useState("");
  const [editedEmail, setEditedEmail] = React.useState("");
  const [editedPassword, setEditedPassword] = React.useState("");
  const [editedRole, setEditedRole] = React.useState("");

  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setOpenConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    // Filter the rows array to remove the item with the deleteItemId
    const updatedRows = rows.filter((row) => row.ID !== deleteItemId);
    rows = updatedRows;

    setDeleteItemId(null);
    setOpenConfirmation(false);
  };

  const handleDeleteCancel = () => {
    setDeleteItemId(null);
    setOpenConfirmation(false);
  };

  const handleEditClick = (id) => {
    setEditItemId(id);
    setOpenEditModal(true);
    const selectedItem = rows.find((row) => row.ID === id);
    setEditedFirstName(selectedItem.FirstName);
    setEditedLastName(selectedItem.LastName);
    setEditedEmail(selectedItem.Email);
    setEditedPassword(selectedItem.Password);
    setEditedRole(selectedItem.Role);
  };

  const handleEditSave = () => {
    // Update the row with the edited values
    const updatedRows = rows.map((row) => {
      if (row.ID === editItemId) {
        return {
          ...row,
          FirstName: editedFirstName,
          LastName: editedLastName,
          Email: editedEmail,
          Password: editedPassword,
          Role: editedRole,
        };
      }
      return row;
    });
    rows = updatedRows;

    setEditItemId(null);
    setOpenEditModal(false);
  };

  const handleEditCancel = () => {
    setEditItemId(null);
    setOpenEditModal(false);
  };

  return (
    <Container>
      <Typography variant="h4" mt={5} display="flex" justifyContent="center">
        Employees
      </Typography>
      <div>
        <h1>Employee Details</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">FirstName</TableCell>
                <TableCell align="center">LastName</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.ID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.ID}</TableCell>
                  <TableCell align="center">{row.FirstName}</TableCell>
                  <TableCell align="center">{row.LastName}</TableCell>
                  <TableCell align="center">{row.Email}</TableCell>
                  <TableCell align="center">{row.Password}</TableCell>
                  <TableCell align="center">{row.Role}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="info"
                      startIcon={<Edit />}
                      onClick={() => handleEditClick(row.ID)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteClick(row.ID)}
                    >
                      <Delete />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Dialog open={openConfirmation} onClose={handleDeleteCancel}>
          <DialogTitle>Delete Item</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete this Employee?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog open={openEditModal} onClose={handleEditCancel}>
          <DialogTitle>Edit Employee</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="First Name"
              fullWidth
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Last Name"
              fullWidth
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Email"
              fullWidth
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Password"
              fullWidth
              value={editedPassword}
              onChange={(e) => setEditedPassword(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Role"
              fullWidth
              value={editedRole}
              onChange={(e) => setEditedRole(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleEditSave} color="warning">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}
