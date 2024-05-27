import Product from "../models/product.model.js";
import User from "../models/user.model.js";

const addToCart = async (req, res) => {
  const { id } = req.params;
  const { productId, size } = req.body;

  try {
    let productData = await Product.findById(productId);
    productData.sizes = size;
    console.log(productData);
    const userData = await User.findByIdAndUpdate(id, {
      $push: { mybag: productData },
    });
    return res.status(200).json({ productData });
  } catch (err) {
    return res.status(501).json({ err: err.message });
  }
};

export { addToCart };