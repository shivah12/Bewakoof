import queryString from "query-string";
import axios from "axios";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { createUser } from "./user.controller.js";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENTID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const getGoogleUser = async (req, res) => {
  const code = req.query.code;

  const { id_token, access_token } = await getTokens({
    code,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: `https://localhost:5173/users/auth/google/callback`,
  });

  // Fetch the user's profile with the access token and bearer
  const googleUser = await getUser({ id_token, access_token });

  await createUser(googleUser);
  const user = await User.findOne({ email: googleUser.email });
  let token;
  if (user) {
    token = generateAccessToken(user);
    res.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 3000000),
      secure: true,
    });
    console.log(token);
  }
  res.redirect("https://localhost:5173/?" + token);
};

async function getTokens({ code, clientId, clientSecret, redirectUri }) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
  };

  try {
    const response = await axios.post(url, queryString.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch auth tokens`);
    throw new Error(error.message);
  }
}

async function getUser({ id_token, access_token }) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    );

    const payload = {
      avatar: response.data.picture,
      first_name: response.data.given_name,
      last_name: response.data.family_name,
      username: response.data.given_name + "@123",
      email: response.data.email,
      password: "12345",
      date_of_birth: "",
      gender: "",
      phone_number: "",
      mybag: [],
      wishlist: [],
      myorders: [],
      addresses: [],
    };

    return payload;
  } catch (error) {
    console.error(`Failed to fetch user`);
  }
}

function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user?._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
    process.env.SECRETKEY,
    {
      expiresIn: "1h",
    }
  );
}

export { getGoogleUser };