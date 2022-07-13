import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL_API = "http://localhost:3000/api/productos";
  
  productos: Producto[] = [];
  producto: any = { /* VER TIPO, error en el from.component */
    nombre: '',
    marca: '',
    precioXUnidad: 0,
    cantidad: 0,
    _id: ''
  };
  accion: string = 'Agregar';

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    this.http.get<Producto[]>(this.URL_API)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.productos = res;
        },
        error: (err) => console.error(err)        
      })
  }

  obtenerProducto(id: string | number) {
    this.http.get<Producto>(`${this.URL_API}/${id}`)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.producto = res;
        },
        error: (err) => console.error(err)        
      })
  }

  agregarProducto(e: any) {
    if(this.producto._id) {
      this.http.put(`${this.URL_API}/${this.producto._id}`, this.producto)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert('Producto actualizado');
            this.resetProducto();
            this.accion = 'Agregar';
            this.obtenerProductos();
          },
          error: (err) => console.error(err)        
        })  
    } else {
      this.http.post(`${this.URL_API}`, this.producto)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert('Producto guardado');
            this.resetProducto();
            this.obtenerProductos();
          },
          error: (err) => console.error(err)        
        })  
    }
    e.preventDefault();
  }

  editarProducto(id: string | number) {
    this.obtenerProducto(id);
    this.accion = 'Editar';
  }

  eliminarProducto(id: string) {
    if(window.confirm('¿Estas seguro o segura de querer eliminar este producto?')) {
      this.http.delete(`${this.URL_API}/${id}`)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.obtenerProductos();
          },
          error: (err) => console.error(err)
        });
    }
  }

  private resetProducto() {
    this.producto = {
      nombre: '',
      marca: '',
      precioXUnidad: 0,
      cantidad: 0,
      _id: '',
    }
  }
}
