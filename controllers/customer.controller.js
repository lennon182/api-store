const Customer = require("./../models/Customer.modgitl");

exports.addCustomer = async (req, resp) => {
  const addCustomer = new Customer();
  addCustomer.name = req.body.name;
  addCustomer.email = req.body.email;
  addCustomer.password = req.body.password;
  addCustomer.phone = req.body.phone;
  addCustomer.address = req.body.address;
  addCustomer.lat = req.body.lat;
  addCustomer.lng = req.body.lat;

  try {
    const newCustomer = await addCustomer.save();

    if (!newCustomer) {
      return resp.json({
        message: "No se guardo el Cliente",
      });
    }
    return resp.json({
      message: "Nuevo Cliente guardado",
      ok: true,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};

exports.getCustomers = async (req, resp) => {
  try {
    const customers = await Customer.find({});

    if (customers.length === 0) {
      return resp.json({
        message: "No hay Clientes en la bd",
      });
    }

    if (!customers) {
      return resp.json({
        message: "No hay !Clientes en la bd",
      });
    }
    return resp.json({
      message: "Clientes",
      customers,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.getOneCustomer = async (req, resp) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id);

    if (!customer) {
      return resp.json({
        message: "No existe ese cliente",
      });
    }

    return resp.json({
      message: "Cliente",
      customer,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.removeCustomer = async (req, resp) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      return resp.json({
        message: "No existe ese Cliente",
      });
    }

    const eliminarCliente = await Customer.findByIdAndDelete(id);
    return resp.json({
      message: "Cliente eliminado",
      customer,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.Update = (req, resp) => {};
