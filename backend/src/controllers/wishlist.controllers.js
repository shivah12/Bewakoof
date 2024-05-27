
import User from "../models/user.model.js";
import Product from "../models/product.model.js";

const getWishlistProducts = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  try {
    const UserData = await User.findById(id).lean().exec();
    const productData = UserData.wishlist;
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(503).json({ err: err.message });
  }
};

export { getWishlistProducts };
