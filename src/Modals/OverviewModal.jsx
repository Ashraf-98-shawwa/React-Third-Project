import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { ButtonStyled, ButtonStyledTwo } from "./TitleModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "550px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "16px",
};

const OverviewModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newOverView, setNewOverView] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [skills, setSkills] = useState([]);

  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:3004/personalInformation"
        );
        if (res) {
          setNewOverView(res.data[0].overview);
          setTitle(res.data[0].title);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImage(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewOverView(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          "http://localhost:3004/personalInformation/1",
          {
            overview: newOverView,
            title: title,
            rate: rate,
            skills: skills,
            image: image,
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
            Edit Your Overview
            <span onClick={handleClose} style={{ cursor: "pointer" }}>
              X
            </span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 8 }}>
            Use this space to show clients you have the skills and experience
            they're looking for.
          </Typography>
          <ul
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li>Describe your strengths and skills</li>
            <li>Highlight projects, accomplishments and education</li>
            <li>Keep it short and make sure it's error-free</li>
          </ul>
          <form onSubmit={handleUpdateTitle}>
            <textarea
              style={{
                display: "block",
                width: "100%",
                marginTop: "50px",
                outline: "none",
                marginBottom: "50px",
              }}
              rows="10"
              type="text"
              value={newOverView}
              onChange={handleChangeInput}
            />

            <div
              style={{
                width: "fit-content",
                marginLeft: "auto",
              }}
            >
              <ButtonStyledTwo type="button" onClick={handleClose}>
                cancel
              </ButtonStyledTwo>
              <ButtonStyled type="submit">save</ButtonStyled>
            </div>
          </form>
        </Box>
      </Modal>
      {navigator ? <Navigate to={"/redirect"} /> : ""}
    </div>
  );
};

export default OverviewModal;
