import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';



function UsersList() {
  const [open, setOpen] = React.useState(false);


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Further actions",
      width: 150,
      renderCell: (params) => {
        console.log(params.row, "this is the param");
        return (
          <div className="d-flex gap-2">
            <div className="btn">
              {" "}
              <Link
                to={"userdetails/:id"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IoEyeSharp />
              </Link>{" "}
            </div>
            <div className="btn">
              <MdDelete onClick={() => setOpen(true)} />
              <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog variant="outlined" role="alertdialog">
                  <DialogTitle>
                    <WarningRoundedIcon />
                    Confirmation
                  </DialogTitle>
                  <Divider />
                  <DialogContent>
                    Are you sure you want to delete this User?
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="solid"
                      color="danger"
                      onClick={() => setOpen(false)}
                    >
                      Delete User
                    </Button>
                    <Button
                      variant="plain"
                      color="neutral"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </ModalDialog>
              </Modal>
            </div>
          </div>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
    { id: 6, lastName: "Melisandre", firstName: "Alow", age: 50 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div>
      <h1> Users list </h1>
      <div className="d-flex p-3">
        <Button
          variant="soft"
          style={{
            borderColor: "#B66055",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"addUser"}
          >
            Add User
          </Link>
        </Button>
      </div>
      <Box sx={{ height: 400, width: 1000 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default UsersList;
