import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage implements OnInit {
  usuario: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  usuarios = {
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