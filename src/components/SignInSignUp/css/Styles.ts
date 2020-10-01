import { makeStyles, createStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) =>
  createStyles({
    formikWrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    disActiveInput: {
      border: "1px solid rgb(116, 116, 135)",
    },
    activeInput: {
      border: "1px solid rgb(14, 113, 235)",
    },
    errorInput: {
      border: "1px solid rgb(255, 30, 90)",
      boxShadow:
        "rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgb(206, 132, 131) 0px 0px 6px",
    },
    formSignIn: {
      width: "450px",
      margin: theme.spacing(0, "auto"),
    },
    signInBtn: {
      display: "block",
      background: "rgb(14, 113, 235)",
      color: "white",
      textTransform: "capitalize",
      width: "100%",
      borderRadius: "10px",
      "&:hover": {
        background: "rgb(14, 113, 235)",
      },
    },
    label: {
      display: "block",
      margin: "0",
      width: "max-content",
      lineHeight: "1.4285",
      marginBottom: theme.spacing(0.5),
      fontSize: "14px",
      color: "rgb(116, 116, 135)",
      fontFamily: "inherit",
    },
    errorMsg: {
      color: "rgb(255, 30, 90)",
      textAlign: "left",
      fontSize: "14px",
      lineHeight: "1.42857",
      margin: theme.spacing(-2.5, 0, 2.5, 0),
    },
    title: {
      marginBottom: theme.spacing(2.5),
    },
    deviderWrapper: {
      margin: theme.spacing(5, 0),
      display: "flex",
      alignItems: "center",
      width: "450px",
    },
    deviderBorder: {
      borderBottom: "1px solid rgb(150, 150, 150)",
      width: "100%",
    },
    deviderText: {
      padding: theme.spacing(0, 1.25),
      color: "rgb(150, 150, 150)",
    },
    socailsBtnsWrapper: {
      width: "450px",
    },
    socialBtn: {
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      border: "1px solid rgb(186, 186, 204)",
      width: "100%",
      marginBottom: theme.spacing(1.5),
    },
    socialBtnImage: {
      height: "18px",
      width: "18px",
      display: "block",
    },
    socialBtnText: {
      borderLeft: "1px solid rgb(150, 150, 150)",
      marginLeft: theme.spacing(1.5),
      paddingLeft: theme.spacing(2),
      textTransform: "capitalize",
      width: "380px",
      fontFamily: "Lato, Helvetica, Arial",
      fontWeight: 700,
      lineHeight: "38px",
      fontSize: "15px",
      color: "rgb(150, 150, 150)",
    },
  })
);
