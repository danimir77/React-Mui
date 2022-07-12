import React from "react";
import { Button, TextField, Tooltip } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.default",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
  color: "text.primary",
};
export default function Add() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        arrow
        sx={{
          position: "fixed",
          bottom: 40,
          left: { xs: "calc(50%)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Write your Ideas
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TextField
            sx={{ width: "100%" }}
            placeholder="What needs"
          ></TextField>
          <Button variant="success">Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
