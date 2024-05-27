import User from "../models/user.model.js";

// Create new user
async function createUser({
  avatar,
  first_name,
  Last_name,
  username,
  email,
  password,
  date_of_birth,
  gender,
  phone_number,
  mybag,
  wishlist,
  myorders,
  addresses,
}) {
  try {
    const user = await User.findOne({ email: email });

    if (user?.name) {
      return { message: "User Already exists", status: "error" };
    } else {
      const newUser = new User({
        avatar,
        first_name,
        Last_name,
        username,
        email,
        password,
        date_of_birth,
        gender,
        phone_number,
        mybag,
        wishlist,
        myorders,
        addresses,
      });
      await newUser.save();
      return {
        message: "User Created Successfully",
        status: "success",
      };
    }
  } catch (err) {
    console.log(err);
  }
}

// Verify user
const verify = (req, res) => {
  const { first_name, Last_name, email, _id, avatar } = req.rootUser;
  res.status(200).send({ user: { _id, first_name, Last_name, email, avatar } });
};

// Logout
const logout = async (req, res) => {
  res.clearCookie("jwtoken");
  res.status(200).send("user logout");
};

export { createUser, verify, logout };