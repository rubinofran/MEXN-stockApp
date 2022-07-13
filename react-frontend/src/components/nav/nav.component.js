import React, { Component } from 'react';
import './nav.component.css';

export default class NavComponent extends Component {

    state = {
        precio: '0',
        cantidad: '0'
    }

    obtenerTotal(productos) {
        let tot = 0;
        productos.map(p => {
            tot += (p.precioXUnidad * p.cantidad)
        })
        return tot;
    }

    onChangE = e => {
        const estadoActual = e.target.value.split(";")
        this.setState({precio: estadoActual[0],cantidad: estadoActual[1]})
    }

    render() {

        const { productos } = this.props;
    
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="favicon.ico" alt="" />
                        MERN-StockApp
                    </a>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active disabled" href="#">Monto total: {this.obtenerTotal(productos)}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active disabled" href="#">Productos: {productos.length}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <select defaultValue={'default'} name="select" onChange={this.onChangE}>
                                    <option value="default" disabled>Producto - Marca</option>
                                    {productos.map(producto => {
                                        return <option key={producto._id} value={producto.precioXUnidad + ";" + producto.cantidad}>{producto.nombre} - {producto.marca}</option>
                                    })}
                                </select>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active disabled" href="#">
                                <b>Unidades:</b> {this.state.precio}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active disabled" href="#">
                                <b>Precio:</b> {this.state.cantidad}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    
    }

}