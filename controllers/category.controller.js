const Category = require("./../models/Category.model");

exports.addCategory = async (req, resp) => {
  const addCategory = new Category();
  addCategory.name = req.body.name;
  addCategory.description = req.body.description;
  try {
    const newCategory = await addCategory.save();

    if (!newCategory) {
      return resp.json({
        message: "No se guardo la categoria",
      });
    }
    return resp.json({
      message: "New Category Added Successfuly",
      ok: true,
    });
  } catch (error) {
    return resp.json({
      message: "No se guardo la categoria... Error..",
      error,
    });
  }
};
exports.getCategories = async (req, resp) => {
  try {
    const categorias = await Category.find({});

    if (categorias.length === 0) {
      return resp.json({
        message: "No hay Categorias en la bd",
      });
    }
    if (!categorias) {
      return resp.json({
        message: "No hay !categorias en la bd",
      });
    }
    return resp.json({
      message: "Categorias",
      categorias,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un errors",
      error,
    });
  }
};
exports.getOneCategory = async (req, resp) => {
  const { id } = req.params;

  try {
    const categoria = await Category.findById(id);

    if (!categoria) {
      return resp.json({
        message: "No existe ese Categoria",
      });
    }

    return resp.json({
      message: "Categoria",
      categoria,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
exports.removeCategory = async (req, resp) => {
  const { id } = req.params;

  try {
    const categoria = await Category.findById(id);
    if (!categoria) {
      return resp.json({
        message: "No existe esa categoria",
      });
    }

    const eliminarCategoria = await Category.findByIdAndDelete(id);
    return resp.json({
      message: "Categoria eliminada",
      categoria,
    });
  } catch (error) {
    return resp.json({
      message: "Ha ocurrido un error",
      error,
    });
  }
};
// exports.Update = (req, resp) => {};
