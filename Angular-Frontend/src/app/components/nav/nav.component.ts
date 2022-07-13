import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cantidad = 0;
  precio = 0;

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
  }

  obtenerTotal(): number {
    let tot = 0;
    this.productoService.productos.map(p => {
        tot += (p.precioXUnidad * p.cantidad)
    })
    return tot;
  }

  onChangE(e: any) {
    const estadoActual = e.target.value.split(";")
    this.precio = estadoActual[0];
    this.cantidad = estadoActual[1];
  }
}
