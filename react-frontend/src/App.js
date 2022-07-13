import React, { Component } from 'react';
import './App.css';

import NavComponent from './components/nav/nav.component';
import FormComponent from './components/form/form.component';
import StockComponent from './components/stock/stock.component';

export default class App extends Component {

  URL_API = "http://localhost:3000/api/productos";

  state = {
    productos: [],
    nombre: '',
    marca: '',
    precioXUnidad: 0,
    cantidad: 0,
    _id: '',
    accion: 'Agregar'
  }
  
  componentDidMount() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    fetch(this.URL_API)
      .then(respuesta => respuesta.json())
      .then(data => {
          console.log(data);
          this.setState({productos: data});
      })
      .catch(error => console.error(error))
  }

  // obtenerProducto = id => {} 

  agregarProducto = e => {
    if(this.state._id) {
      const {productos, accion, ...stateAux} = this.state;
      fetch(`${this.URL_API}/${stateAux._id}`, {
        method: 'PUT',
        body: JSON.stringify(stateAux),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert('Producto actualizado');
          this.setState({nombre: '', marca: '', precioXUnidad: '', cantidad: '', _id: '', accion: 'Agregar'});
          this.obtenerProductos();
        })
        .catch(err => console.error(err))
    } else {
        const {productos, _id, accion, ...stateAux} = this.state;
        fetch(this.URL_API, {
          method: 'POST',
          body: JSON.stringify(stateAux),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            alert('Producto guardado');
            this.setState({nombre: '', marca: '', precioXUnidad: '', cantidad: ''});
            this.obtenerProductos();
          })
          .catch(err => console.error(err))
    }
    e.preventDefault();
  }

  editarProducto = id => {
    fetch(`${this.URL_API}/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          nombre: data.nombre,
          marca: data.marca,
          precioXUnidad: data.precioXUnidad,
          cantidad: data.cantidad,
          _id: data._id,
          accion: 'Editar'
        });
        this.setState({producto: data});
      })
      .catch(err => console.error(err))
  }

  eliminarProducto = id => {
    if(window.confirm('¿Estas seguro o segura de querer eliminar este producto?')) {
      fetch(`${this.URL_API}/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json', 
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert('Producto eliminado');
          this.obtenerProductos();
        })
        .catch(err => console.error(err))
      }
  }

  onChangE = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div>
        <NavComponent productos = {this.state.productos}/>
        <div className="container">
          <FormComponent 
            agregarProducto = {this.agregarProducto} 
            onChangE = {this.onChangE}
            nombre = {this.state.nombre}
            marca = {this.state.marca}
            precioXUnidad = {this.state.precioXUnidad}
            cantidad = {this.state.cantidad}
            accion = {this.state.accion}
          />
          <StockComponent 
            editarProducto={this.editarProducto} 
            eliminarProducto={this.eliminarProducto}
            productos = {this.state.productos}
          />
        </div>
      </div>
    ); 
  }
}

