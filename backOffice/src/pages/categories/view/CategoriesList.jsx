import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import useCategoryStore from "../../../zustandStore/categoryStore";

function CategoriesList() {
    const {categories,fetch} = useCategoryStore((state)=>state)
    console.log(categories,"this is my store")
    const [open, setOpen] = React.useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Further actions",
      width: 150,
      renderCell: (params) => {
        
        return (
          <div className="d-flex gap-2">
            <div className="btn">
              <Link
                to={`categorydetails/${params.row.id}`} state={{data : params.row}}
                style={{ textDecoration: "none", color: "black" }}
              >
                <IoEyeSharp />
              </Link>
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
                    Are you sure you want to delete this category?
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="solid"
                      color="danger"
                      onClick={() => setOpen(false)}
                    >
                      Delete category
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

  
  useEffect(()=>{
    fetch()
  },[])

  return (
    <div>
      <h1> Categories list </h1>
      <div className="d-flex p-3">
        <Button
          variant="soft"
          style={{
            borderColor: "#B66055",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"addrecipes"}
          >
            Add Category
          </Link>
        </Button>
      </div>
      <Box sx={{ height: 400, width: 1000 }}>
        <DataGrid
          rows={categories}
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

export default CategoriesList;
