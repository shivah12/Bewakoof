import User from "../models/user.model.js";
import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  try {
    const userData = await User.findById(id).lean().exec();
    const productData = userData.mybag;
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(503).json({ err: err.message });
  }
};

const addToWishlist = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  try {
    const productData = await Product.findById(productId);
    const userData = await User.findByIdAndUpdate(id, {
      $push: { wishlist: productData },
    });
    return res.status(200).json({ productData: userData.mybag });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  try {
    let userData = await User.findById(id).lean().exec();
    let productData = userData.mybag;
    productData = productData.filter((el) => el._id != productId);
    userData = await User.findByIdAndUpdate(id, {
      $set: { mybag: productData },
    });
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const removeWish = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  try {
    let userData = await User.findById(id).lean().exec();
    let productData = userData.wishlist;
    productData = productData.filter((el) => el._id != productId);
    userData = await User.findByIdAndUpdate(id, {
      $set: { wishlist: productData },
    });
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const orderProduct = async (req, res) => {
  const { id } = req.params;
  const { productId } = req.body;

  try {
    let userData = await User.findById(id);
    const productData = userData.mybag;
    await User.findByIdAndUpdate(id, { myorders: productData });
    await User.findByIdAndUpdate(id, { mybag: [] });
    return res.status(200).json({ myorders: productData.myorders });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

const changeQuantity = async (req, res) => {
  const { id } = req.params;
  const { productId, qty } = req.body;

  try {
    let userData = await User.findById(id).lean().exec();
    let productData = userData.mybag;
    productData = productData.map((el) => {
      if (el._id == productId) {
        el.qty = qty;
      }
      return el;
    });

    userData.mybag = productData;
    userData = await User.findByIdAndUpdate(id, { mybag: productData });

    console.log(userData);

    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export {
  getProducts,
  addToWishlist,
  removeProduct,
  orderProduct,
  removeWish,
  changeQuantity,
};