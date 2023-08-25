export const CameraStyles = (theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: "center",
      maxWidth: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      height: "400px"
    },
    cameraBox: {
      position: "relative",
      marginBottom: theme.spacing(2),
      alignContent: "center"
    },
    captureButton: {
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      padding: theme.spacing(3),
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      '&:hover': {
        backgroundColor: "#45A049",
      },
    },
    deleteButton: {
      position: "absolute",
      top: "-20px",
      right: "-20px",
      backgroundColor: "#FF5252",
      color: "white",
      borderRadius: "50%",
      padding: theme.spacing(2),
      '&:hover': {
        backgroundColor: "#E53935",
      },
    },
    img: {
      maxWidth: "100%",
      maxHeight: "70vh",
      objectFit: "contain",
      transform: "rotate(0deg)",
    },
    title: {
      marginBottom: theme.spacing(2),
      color: "#333",
      fontWeight: "bold",
      fontSize: "24px",
    },
  });
  