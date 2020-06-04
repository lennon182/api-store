const Product = require("./../models/Products.model");

exports.addProduct = async (req, resp) => {
  const addProduct = new Product();
  addProduct.name = req.body.name;
  addProduct.description = req.body.description;
  addProduct.price = req.body.price;
  addProduct.unit = req.body.unit;
  addProduct.img = req.body.img;
  addProduct.stock = req.body.stock;
  addProduct.seller = req.body.seller;
  try {
    const newProduct = await addProduct.save();

    if (!newProduct) {
      return resp.json({
        message: "No se guardo el producto",
      });
    }
    return resp.json({
      message: "Nuevo producto guardado",
      ok: true,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error: error.message,
    });
  }
};

exports.getProducts = async (req, resp) => {
  try {
    const products = await Product.find({}).populate("seller");

    if (products.length === 0) {
      return resp.json({
        message: "No hay Productos en la bd",
      });
    }
    if (!products) {
      return resp.json({
        message: "No hay !productos en la bd",
      });
    }
    return resp.json({
      message: "Productos",
      products,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.getOneProduct = async (req, resp) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id).populate("seller");

    if (!product) {
      return resp.json({
        message: "No existe ese producto",
      });
    }

    return resp.json({
      message: "Producto",
      product,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.removeProduct = async (req, resp) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return resp.json({
        message: "No existe ese producto",
      });
    }

    const elminarProducto = await Product.findByIdAndDelete(id);
    return resp.json({
      message: "producto eliminado",
      product,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error...",
      error: error.message,
    });
  }
};
exports.Update = (req, resp) => {};
