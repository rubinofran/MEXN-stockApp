import { Component, OnInit } from '@angular/core';
import { ProductoService } from './services/producto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos();
  }

}
