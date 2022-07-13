import React, { Component } from 'react';

export default class FormComponent extends Component {

    render() {

        const { agregarProducto, onChangE, nombre, marca, precioXUnidad, cantidad, accion } = this.props;
    
        return (
            <div className="card mt-2">
                <div className="card-header text-bg-secondary">
                    Información del producto
                </div>
                <div className="card-body">
                    <form className="d-flex" onSubmit={agregarProducto.bind(this)}>
                        <input 
                            className="form-control me-2" 
                            type="text"
                            name="nombre"
                            placeholder="Nombre del producto"
                            onChange={onChangE.bind(this)}
                            value={nombre}
                            required
                        />
                        <input 
                            className="form-control me-2" 
                            type="text" 
                            name="marca"
                            placeholder="Marca del producto"
                            onChange={onChangE.bind(this)}
                            value={marca}
                            required
                        />
                        <input 
                            className="form-control me-2" 
                            type="number" 
                            name="precioXUnidad"
                            placeholder="Precio por unidad" 
                            min="0"
                            onChange={onChangE.bind(this)}
                            value={precioXUnidad}
                            required
                        />
                        <input 
                            className="form-control me-2" 
                            type="number" 
                            name="cantidad"
                            placeholder="Cantidad de unidades" 
                            min="1"
                            onChange={onChangE.bind(this)}
                            value={cantidad}
                            required
                        />
                        <input 
                            type="submit" 
                            className="btn btn-primary" 
                            value={accion}>    
                        </input>
                    </form>
                </div>
            </div>
        )

    }

}