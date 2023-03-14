import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { ButtonStyled, ButtonStyledTwo, InputStyled } from "./TitleModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "400px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "16px",
};

const ImageModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newImg, setNewImg] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");

  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:3004/personalInformation"
        );
        if (res) {
          setNewImg(res.data[0].image);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setTitle(res.data[0].title);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewImg(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          "http://localhost:3004/personalInformation/1",
          {
            title: title,
            overview: overView,
            rate: rate,
            skills: skills,
            image: newImg,
          }
        );
        if (res) {
          setNavigator(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ display: "flex", justifyContent: "space-between" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {" "}
            Upload New Image
            <span onClick={handleClose} style={{ cursor: "pointer" }}>
              X
            </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 8 }}>
            Show clients the best version of yourself!
          </Typography>
          <form style={{ marginTop: "20px" }} onSubmit={handleUpdateTitle}>
            <label>Insert the URL of the photo to upload</label>
            <InputStyled
              style={{ marginBottom: "20px" }}
              type="text"
              value={newImg}
              onChange={handleChangeInput}
            />

            <div style={{ width:"fit-content",marginLeft:"auto" }}>

            <ButtonStyledTwo type="button" onClick={handleClose}>
              cancel
            </ButtonStyledTwo>
            <ButtonStyled type="submit">Save Photo</ButtonStyled>
            </div>
          </form>
        </Box>
      </Modal>
      {navigator ? <Navigate to={"/redirect"} /> : ""}
    </div>
  );
};

export default ImageModal;
