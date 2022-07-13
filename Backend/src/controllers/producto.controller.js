const Producto = require('../models/producto');

const productoController = {};

productoController.obtenerProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

productoController.obtenerProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoController.agregarProducto = async (req, res) => {
    const { nombre, marca, precioXUnidad, cantidad } = req.body;
    const producto = new Producto({ nombre, marca, precioXUnidad, cantidad });
    await producto.save();
    res.json({ status: 'Producto guardado en la BD' });
}

productoController.editarProducto = async (req, res) => {
    const { nombre, marca, precioXUnidad, cantidad } = req.body;
    const nuevoProducto = { nombre, marca, precioXUnidad, cantidad };
    await Producto.findByIdAndUpdate(req.params.id, nuevoProducto);
    res.json({ status: 'Producto actualizado en la BD' });
}

productoController.eliminarProducto = async (req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({ status: 'Producto eliminado de la BD' });
}

module.exports = productoController;