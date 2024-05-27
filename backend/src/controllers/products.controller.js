
import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  const { category } = req.params;
  try {
    const prod = await Product.find({ category });
    res.status(200).send(prod);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const prod = await Product.findById(id);
    if (!prod) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.status(200).send(prod);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const postProducts = async (req, res) => {
  try {
    const result = await Product.insertMany(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export { getProducts, getProduct, postProducts };
