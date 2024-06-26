import User from '../models/user.model.js';

const getOrders = async (req, res) => {
  const { id } = req.params;

  let UserData;
  let productData;

  try {
    UserData = await User.findById(id).populate("myorders").lean().exec();
    productData = UserData.myorders;
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(503).json({ err: err.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  let UserData;

  try {
    UserData = await User.findById(id);
    return res.status(200).json({ UserData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

export { getOrders, getUser };