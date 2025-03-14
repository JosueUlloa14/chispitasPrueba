import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-clase-detalle',
  templateUrl: './clase-detalle.page.html',
  styleUrls: ['./clase-detalle.page.scss'],
})
export class ClaseDetallePage implements OnInit {

  constructor() { }

  usuario = {
    nombre: 'Alonso',
    apellidoP: 'Gómez',
    apellidoM: 'Martínez',
    correo: 'alonso@example.com',
    rol: 'Estudiante',
    foto: 'https://previews.123rf.com/images/libertos/libertos1201/libertos120100124/11933867-sonriente-ni%C3%B1o-de-ocho-a%C3%B1os-desde-el-frente-ni%C3%B1os.jpg'
  };

  datos = {
    nombre: 'CEN00I',
    periodo: 'Enero - mayo 2025',
    promedio: 9.0,
    secuencia: 8.7,
    sonido: 9.2,
    formas: 10,
    matematicas: 8.3
  }

  observaciones={
    texto: 'El alumno tine buena retencion de memoria'
  }
  actividades = [
    { titulo: "Secuencia de colores", valor: this.datos.secuencia, color: 'amarillo' }
  ];

  ngOnInit() {
  }

}
