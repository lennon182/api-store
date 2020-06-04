const Order = require("./../models/Orders.model");

exports.addOrder = async (req, resp) => {
  const addOrder = new Order();
  addOrder.customer = req.body.customer;
  addOrder.detail = req.body.detail;
  addOrder.discount = req.body.discount;
  addOrder.subtotal = req.body.subtotal;
  addOrder.total = req.body.total;
  try {
    const newOrder = await addOrder.save();

    if (!newOrder) {
      return resp.json({
        message: "No se guardo el pedido",
      });
    }
    return resp.json({
      message: "Nuevo pedido guardado",
      ok: true,
      newOrder,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error: error.message,
    });
  }
};

exports.getOrders = async (req, resp) => {
  try {
    const orders = await Order.find({}).populate("customer").populate({
      path: "detail.product",
      model: "Product",
    });

    if (orders.length === 0) {
      return resp.json({
        message: "No hay pedidos en la bd",
      });
    }

    if (!orders) {
      return resp.json({
        message: "No hay !pedidos en la bd",
      });
    }
    return resp.json({
      message: "Pedidos",
      orders,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.getOneOrder = async (req, resp) => {
  const { id } = req.params;

  try {
    const order = await await Order.findById(id).populate("customer").populate({
      path: "detail.product",
      model: "Product",
    });

    if (!order) {
      return resp.json({
        message: "No existe ese Pedido",
      });
    }

    return resp.json({
      message: "Pedido",
      order,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.removeOrder = async (req, resp) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);
    if (!order) {
      return resp.json({
        message: "No existe ese pedido",
      });
    }

    const eliminarPedido = await Order.findByIdAndDelete(id);
    return resp.json({
      message: "Pedido eliminado",
      order,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error...",
      error: error.message,
    });
  }
};
exports.Update = (req, resp) => {};
