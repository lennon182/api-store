const Seller = require("./../models/Seller.model");

exports.addSeller = async (req, resp) => {
  const addSeller = new Seller();
  addSeller.name = req.body.name;
  addSeller.email = req.body.email;
  addSeller.password = req.body.password;
  addSeller.phone = req.body.phone;
  addSeller.address = req.body.address;
  addSeller.lat = req.body.lat;
  addSeller.lng = req.body.lat;
  addSeller.category = req.body.category;
  try {
    const newSeller = await addSeller.save();

    if (!newSeller) {
      return resp.json({
        message: "No se guardo el vendedor",
      });
    }
    return resp.json({
      message: "Nuevo vendedor guardado",
      ok: true,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};

exports.getSellers = async (req, resp) => {
  try {
    const sellers = await Seller.find({}).populate("category");

    if (sellers.length === 0) {
      return resp.json({
        message: "No hay Vendedores en la bd",
      });
    }

    if (!sellers) {
      return resp.json({
        message: "No hay !vendedores en la bd",
      });
    }
    return resp.json({
      message: "vendedores",
      sellers,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un errors",
      error,
    });
  }
};
exports.getOneSeller = async (req, resp) => {
  const { id } = req.params;

  try {
    const seller = await Seller.findById(id).populate("category");

    if (!seller) {
      return resp.json({
        message: "No existe ese vendedor",
      });
    }

    return resp.json({
      message: "Vendedor",
      seller,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.removeSeller = async (req, resp) => {
  const { id } = req.params;

  try {
    const seller = await Seller.findById(id);
    if (!seller) {
      return resp.json({
        message: "No existe ese Vendedor",
      });
    }

    const eliminarVendedor = await Seller.findByIdAndDelete(id);
    return resp.json({
      message: "Vendedor eliminado",
      seller,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.Update = (req, resp) => {};
