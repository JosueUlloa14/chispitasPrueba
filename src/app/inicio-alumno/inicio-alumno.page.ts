import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {

  constructor() { }

  clases = [
    { id: 'CEN001', alumnos: 10, img: 'https://colegioscruzsaco.edu.pe/wp-content/uploads/2021/05/asdaasdads-edit.jpg' },
    { id: 'CEN002', alumnos: 8, img: 'https://www.realinfluencers.es/wp-content/uploads/2020/11/pupils-raising-their-hands-4.jpg' },
    { id: 'CEN003', alumnos: 9, img: 'https://www.larepublica.net/storage/images/2024/06/06/20240606191340.8-tecno.x2.jpg' },
    { id: 'CEN004', alumnos: 6, img: 'https://aptus.com.ar/wp-content/uploads/2019/07/tecno2.jpg' }
  ];

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
