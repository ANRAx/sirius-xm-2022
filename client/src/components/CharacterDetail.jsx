import React, { useState } from "react";
import { Popover, Button, Stack, Input } from "@mui/material";
import "./CharacterDetail.css";

const CharacterDetail = ({ character }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="CharacterDetail">
      <div className="character-image">
        <img
          className="character-profile"
          src={character?.image}
          alt="character profile"
        />
      </div>
      <div className="character-info">
        <h3>{character?.name}</h3>
        <span>
          Excepteur et qui mollit proident dolor occaecat reprehenderi.
        </span>
        <div className="character-detail-week-info">
          <span>Week of April 4th, 2021</span>
        </div>
        <Stack
          sx={{ marginTop: 5 }}
          direction="row"
          spacing={2}
          justifyContent="start"
        >
          <Button color="error">Play</Button>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Add Episode
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <form
              className="upload-file-form"
              method="post"
              action="http://localhost:5000/convert-to-MP3"
              encType="multipart/form-data"
            >
              <label htmlFor="avatar"></label>
              <Input type="file" name="the_file" accept="audio/wav" />
              <Input type="submit" />
            </form>
          </Popover>
        </Stack>
      </div>
    </div>
  );
};

export default CharacterDetail;
