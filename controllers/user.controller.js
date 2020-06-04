const User = require("../models/User.model");

exports.addUser = async (req, resp) => {
  const addUser = new User();
  addUser.name = req.body.name;
  addUser.email = req.body.email;
  addUser.password = req.body.password;
  try {
    const newUser = await addUser.save();

    if (!newUser) {
      return resp.json({
        message: "No se guardo el usuario",
      });
    }
    return resp.json({
      message: "Nuevo usuario guardado",
      ok: true,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};

exports.getUsers = async (req, resp) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return resp.json({
        message: "No hay Usuarios en la bd",
      });
    }

    if (!users) {
      return resp.json({
        message: "No hay !usuarios en la bd",
      });
    }
    return resp.json({
      message: "usuarios",
      users,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un errors",
      error,
    });
  }
};
exports.getOneUser = async (req, resp) => {
  const { id } = req.params;

  try {
    const usuario = await User.findById(id);

    if (!usuario) {
      return resp.json({
        message: "No existe ese usuario",
      });
    }

    return resp.json({
      message: "Usuario",
      usuario,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.removeUser = async (req, resp) => {
  const { id } = req.params;

  try {
    const usuario = await User.findById(id);
    if (!usuario) {
      return resp.json({
        message: "No existe ese usuario",
      });
    }

    const eliminarUsuario = await User.findByIdAndDelete(id);
    return resp.json({
      message: "Usuario eliminado",
      usuario,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.Update = (req, resp) => {};
