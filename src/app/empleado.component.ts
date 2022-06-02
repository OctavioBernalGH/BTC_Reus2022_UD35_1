export class Empleado{

  /** Se definen atributos de clase */
  nombre:string = "";
  cif:string = "";
  direccion:string= "";
  selector:any = "";

  /** Se define el constructor para crear el empleado */
  constructor(nombre:string, cif:string, direccion:string, selector:any){
    this.nombre = nombre;
    this.cif = cif;
    this.direccion = direccion;
    this.selector = selector;
  }

}
