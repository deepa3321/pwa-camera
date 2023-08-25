import React, { useState, useRef } from 'react';
import { Container, Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import Webcam from "react-webcam";
import { CameraStyles } from './CameraStyles'; // Import the styles

const useStyles = makeStyles((theme) => CameraStyles(theme));

function Camera() {
  const classes = useStyles();
  const [source, setSource] = useState("");
  const [imageRotation, setImageRotation] = useState(0);
  const webcamRef = useRef(null);

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        setImageRotation(0);
      }
    }
  };

  const handleDelete = () => {
    setSource("");
    setImageRotation(0);
  };

  const handleCaptureFromCamera = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setSource(screenshot);
    setImageRotation(0);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <h2 className={classes.title}>Capture Your Picture here</h2>
          <div className={classes.cameraBox}>
            {source ? (
              <div className={classes.imageBox}>
                <img
                  src={source}
                  alt="snap"
                  className={classes.img}
                  style={{ transform: `rotate(${imageRotation}deg)` }}
                />
                <IconButton
                  color="secondary"
                  component="span"
                  className={classes.deleteButton}
                  onClick={handleDelete}
                >
                  <DeleteOutlineRoundedIcon fontSize="large" />
                </IconButton>
              </div>
            ) : (
              <Webcam
                audio={false}
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className={classes.img}
              />
            )}
            <input
              accept="image/*"
              type="file"
              capture="environment"
              onChange={(e) => handleCapture(e.target)}
              id="icon-button-file"
              style={{ display: "none" }}
            />
            {!source && (
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  component="span"
                  className={classes.captureButton}
                  onClick={handleCaptureFromCamera}
                >
                  <PhotoCameraRoundedIcon fontSize="large" />
                </IconButton>
              </label>
            )}
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Camera;
