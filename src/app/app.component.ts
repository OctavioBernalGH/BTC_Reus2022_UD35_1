import { Component } from '@angular/core';
import { Empleado } from './empleado.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio_UD35';
  name = 'Octavio Bernal'

  /** Se crean instancias de empleado */
  empleados:Empleado[]=[
    new Empleado("Octavio","falso cif", "c/paco", 3),
    new Empleado("Pedro","falso cif", "c/pacotilla", 2),
    new Empleado("Ana","falso cif", "c/pacomprar", 1),
    new Empleado("Marina","falso cif", "c/pacorrer", 2),
    new Empleado("Pedro","falso cif", "c/pacomer", 3),
  ];

  /** Se instancian los elementos de la vista */
  cuadroNombre:string = "";
  cuadroCif:string="";
  cuadroDireccion:string="";
  cuadroSelector:any ="";

  /** Función para agregar un empleado a la lista de empleados */
  agregar(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroCif, this.cuadroDireccion, this.cuadroSelector);
      /** Se le pasa el empleado generado en el form al array de empleados. */
      this.empleados.push(miEmpleado);
  }

}
