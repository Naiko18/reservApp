import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //aquí se pueden crear variables, constantes, lsitas. json, etc.

  //nom variable: tipo = valor;

  titulo: string = "Página de login";
  numero: number = 5;
  decimal: number = 5.2;
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre": "Jeison", "edad": 5};

  //ngModel:
  email: string = "pedro@gmail.com";

  constructor() { }

  ngOnInit() {
  }

}
