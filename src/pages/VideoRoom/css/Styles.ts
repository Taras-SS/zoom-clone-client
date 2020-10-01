import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    videoContainer: {
      position: "relative",
      height: "max-content",
    },
    loadarWrapper: {
      position: "absolute",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
    },
    stopVideoBtn: {
      height: "50%",
      textTransform: "capitalize",
      background: "rgb(204, 0, 0)",
      color: "white",
      marginTop: ".85%",
      fontWeight: 700,
      borderRadius: "8px",
      "&:hover": {
        background: "rgb(230, 0, 0)",
        transform: "scale(1.05)",
      },
    },
    endVideoWindow: {
      position: "absolute",
      right: "0",
      bottom: "70px",
      background: "rgba(10, 10, 10, 0.7)",
      padding: theme.spacing(2, 2),
      borderRadius: "10px",
    },
    stopForAllBtn: {
      display: "block",
      textTransform: "capitalize",
      color: "white",
      background: "rgb(204, 0, 0)",
      borderRadius: "8px",
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    leaveMeetingBtn: {
      display: "block",
      textTransform: "capitalize",
      borderRadius: "8px",
      color: "white",
      background: "rgb(150, 150, 150, 0.7)",
      width: "100%",
    },
  })
);
