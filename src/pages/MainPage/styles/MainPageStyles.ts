import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import dateBackground from "../../../assets/images/dateBackground.png";

const buttonsHeightWidth = "83px";
const buttonsPrimaryCol = "rgb(51, 153, 255)";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    mainPageWrapper: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      alignSelf: "stretch",
    },
    buttonsContainer: {
      width: "50%",
    },
    twoButtonsWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(2.5),
    },
    newMeetingBtn: {
      background: "rgb(255, 102, 0)",
      "&:hover": {
        background: "rgb(255, 133, 51)",
      },
      color: "white",
      height: buttonsHeightWidth,
      width: buttonsHeightWidth,
      borderRadius: "15px",
      margin: theme.spacing(0, 3.75),
    },
    icons: {
      fontSize: "48px",
    },
    buttonTitle: {
      fontSize: "12px",
      display: "block",
      marginTop: "5px",
    },
    primaryButton: {
      height: buttonsHeightWidth,
      width: buttonsHeightWidth,
      background: buttonsPrimaryCol,
      "&:hover": {
        background: "rgb(77, 166, 255)",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "15px",
      margin: theme.spacing(0, 3.75),
    },
    iconWrapper: {
      background: "white",
      color: buttonsPrimaryCol,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
    primaryBtnIcon: {
      fontSize: "30px",
      padding: "3px",
    },
    rightPartContainer: {
      width: "50%",
    },
    timeWrapper: {
      background: `url(${dateBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    typography: {
      color: "white",
      "&:first-child": {
        paddingTop: theme.spacing(3),
      },
      "&:last-child": {
        paddingBottom: theme.spacing(3),
      },
    },
    noUpcomingMeetings: {
      padding: theme.spacing(9, 0),
      border: "1px solid rgba(200, 200, 200, 0.3)",
      borderTop: "0",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      fontFamily: "Verdana",
      fontSize: "14px",
    },
  })
);
