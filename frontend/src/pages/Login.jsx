import React from "react";
import styles from "./Login.module.css";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <GoogleOAuthProvider clientId="1039553759473-04hf7inkrh9mb9tu0rn8b6nlnv816mf2.apps.googleusercontent.com">
      <div className={styles.main}>
        <div className={styles.submain}>
          <h1 className="text-[30px] font-bold">Welcome to the world of Bewakoof!</h1>
          <div className="w-[80%] m-auto">
            <img
              className="w-[100%]"
              src="https://images.bewakoof.com/web/group-19-1617704502.png"
              alt="welcome"
            />
          </div>
        </div>

        <div className="w-[50%] flex justify-center flex-col items-center">
          <h2 className="text-[24px] font-bold">Log in / Sign up</h2>
          <p className={styles.loginP}>
            for Latest trends, exciting offers and everything Bewakoof!
          </p>
          <input
            style={{
              width: "420px",
              height: "60px",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "15px",
              marginTop: "30px",
              border: "1px solid black",
            }}
            id="mobile_number"
            name="mobile"
            placeholder="Enter Mobile Number"
            maxLength="10"
            data-phonecode="+91"
          />
          <button
            style={{
              backgroundColor: "#00AFAF",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "5px",
              width: "420px",
              height: "60px",
              textTransform: "uppercase",
              marginTop: "10px",
            }}
            onClick={handleClick}
          >
            Continue
          </button>
          <div className="flex w-full my-6 justify-center items-center">
            <div className="w-[30%] h-[1px] bg-black"></div>
            <p className="px-2">OR</p>
            <div className="w-[30%] h-[1px] bg-black"></div>
          </div>

          <GoogleLogin
            onSuccess={(response) => {
              console.log('Login Success:', response);
              alert('Login Successful');
            }}
            onError={() => {
              console.error('Login Failed');
              alert('Login Failed');
            }}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                  backgroundColor: "white",
                  color: "#6B6B6B",
                  padding: "5px 40px 5px 30px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "1px solid black",
                  borderRadius: "5px",
                  margin: "2px",
                }}
              >
                <img
                  style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                  src="https://images.bewakoof.com/web/group-3-2x-1558356035.png"
                  alt="google"
                />
                GOOGLE
              </button>
            )}
          />

          <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1548728332017744&kid_directed_site=0&app_id=1548728332017744&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D1548728332017744%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_gender%252Cuser_hometown%252Cuser_location%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.bewakoof.com%252Flogin%252Ffacebook%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dba16d91c-1c50-4965-97e6-31128372d4c2%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.bewakoof.com%2Flogin%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
            <button
              style={{
                backgroundColor: "white",
                color: "#6B6B6B",
                padding: "5px 25px 5px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                fontSize: "16px",
                border: "1px solid black",
                borderRadius: "5px",
                margin: "2px",
              }}
            >
              <img
                style={{ width: "20px", margin: "0px 15px 0px 10px" }}
                src="https://images.bewakoof.com/web/bi-facebook2x-1620886445.png"
                alt="facebook"
              />
              FACEBOOK
            </button>
          </a>
          <small style={{ textAlign: "center" }}>
            <p
              className="termsAndConditions"
              style={{
                width: "450px",
                height: "30px",
                margin: "auto",
                marginTop: "30px",
                color: "gray",
              }}
            >
              By creating an account or logging in, you agree with Bewakoof's
              <a
                style={{
                  textDecoration: "none",
                  color: "#1CB4C0",
                  fontWeight: "800",
                }}
                href="https://www.bewakoof.com/terms-and-conditions"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Terms and Conditions{" "}
              </a>
              and
              <a
                style={{
                  textDecoration: "none",
                  color: "#00AFAF",
                  fontWeight: "800",
                }}
                href="https://www.bewakoof.com/privacy-policy-and-disclaimer"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Privacy Policy
              </a>
              .
            </p>
          </small>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="We are only accepting Logins from Google!"
        action={action}
      />
    </GoogleOAuthProvider>
  );
};

export default Login;
