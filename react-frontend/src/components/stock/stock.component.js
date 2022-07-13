import React, { Component } from 'react';

export default class StockComponent extends Component {

    render() {

        const { editarProducto, eliminarProducto, productos } = this.props;

        return (
            <div>
                <div className="card mt-2">
                    <div className="card-header text-bg-info">
                        Detalles del stock
                    </div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Marca</th>
                                    <th scope="col">Precio por unidad</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map(producto => {
                                        return (
                                            <tr key={producto._id}>
                                                <td>{producto.nombre}</td>
                                                <td>{producto.marca}</td>
                                                <td>{producto.precioXUnidad}</td>
                                                <td>{producto.cantidad}</td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-success" 
                                                        onClick={editarProducto.bind(this, producto._id)}
                                                    > + </button>
                                                </td>
                                                <td>
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger" 
                                                        onClick={eliminarProducto.bind(this, producto._id)}
                                                    > x </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}