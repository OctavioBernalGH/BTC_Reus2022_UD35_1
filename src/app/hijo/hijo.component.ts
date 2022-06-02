import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  /** Mirar fichero tsconfig.json */
  @Input()
  empleadoLista:Empleado;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
