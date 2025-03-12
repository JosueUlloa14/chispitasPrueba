import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-clase',
  templateUrl: './clase.page.html',
  styleUrls: ['./clase.page.scss'],
})
export class ClasePage implements OnInit {

  datos = {
      nombre: 'CEN00I',
      periodo: 'Enero - mayo 2025',
      promedio: 9.0,
      secuencia: 8.7,
      sonido: 9.2,
      formas: 10,
      matematicas: 8.3
    }
    usuario = {
      nombre: 'Alonso',
      apellidoP: 'Gómez',
      apellidoM: 'Martínez',
      correo: 'alonso@example.com',
      rol: 'Estudiante',
      foto: 'https://previews.123rf.com/images/libertos/libertos1201/libertos120100124/11933867-sonriente-ni%C3%B1o-de-ocho-a%C3%B1os-desde-el-frente-ni%C3%B1os.jpg'
    };

  ngOnInit() {
  }

}
