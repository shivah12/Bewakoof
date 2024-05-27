
import User from '../models/user.model.js';

const createUser = async (req, res) => {
  let UserData;

  try {
    UserData = await User.create(req.body);
    return res.status(200).json({ UserData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

export default createUser;
