import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Button, Typography } from "@material-ui/core";
import googleIcon from "../../assets/icons/Google.png";
import facebookIcon from "../../assets/icons/Facebook.png";
import { styles } from "./css/Styles";

interface Prop {
  type: string;
}

export default ({ type }: Prop) => {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  const responseGoogle = (values: any) => {
    console.log(values);
  };

  const responseFacebook = (values: any) => {
    console.log(values);
  };

  return (
    <div className={classes.socailsBtnsWrapper}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps: any) => (
          <Button
            variant="outlined"
            className={classes.socialBtn}
            onClick={renderProps.onClick}
          >
            <img
              src={googleIcon}
              alt="Google icon"
              className={classes.socialBtnImage}
            />
            <Typography align="left" className={classes.socialBtnText}>
              {`${type} with Google`}
            </Typography>
          </Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <FacebookLogin
        onSuccess={responseFacebook}
        onFailure={responseFacebook}
        appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
        fields="name,email,picture, first_name, last_name"
        render={(renderProps: any) => (
          <Button
            variant="outlined"
            className={classes.socialBtn}
            onClick={renderProps.onClick}
          >
            <img
              src={facebookIcon}
              alt="Facebook icon"
              className={classes.socialBtnImage}
            />
            <Typography align="left" className={classes.socialBtnText}>
              {`${type} with Facebook`}
            </Typography>
          </Button>
        )}
      />
    </div>
  );
};
