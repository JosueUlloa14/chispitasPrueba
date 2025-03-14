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

    actividades = [
      { titulo: "Secuencia de colores", valor: this.datos.secuencia, color: 'amarillo' },
      { titulo: "Atrapa el sonido", valor: this.datos.sonido, color: 'verde' },
      { titulo: "Reconocimiento de formas", valor: this.datos.formas, color: 'morado' },
      { titulo: "Problemas matemáticos", valor: this.datos.matematicas, color: 'azul' }
    ];
    

  ngOnInit() {
  }

}
