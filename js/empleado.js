const empleados = [];
function agregaEmpleado() {
 const name = prompt("Ingresa el nombre:");
 const apellido = prompt("Ingresa el apellido:");
 const dni = prompt("Ingresa el DNI:");
 const fechaInicio = prompt("Ingresa la fecha de inicio (en formato dd/mm/yyyy):");
 const fechaNacimiento = prompt("Ingresa la fecha de nacimiento (en formato dd/mm/yyyy):");

 empleados.push({
 name,
 apellido,
 dni,
 fechaInicio,
 fechaNacimiento
 });
}
function borraEmpleado() {
 const dni = prompt("Ingresa el DNI del empleado a eliminar:");
 const index = empleados.findIndex(empleado => empleado.dni === dni);

 if (index === -1) {
 alert("Empleado no encontrado");
 return;
 }

 empleados.splice(index, 1);
}
function modificaEmpleado() {
 const dni = prompt("Ingresa el DNI del empleado a modificar:");
 const index = empleados.findIndex(empleado => empleado.dni === dni);

 if (index === -1) {
 alert("Empleado no encontrado");
 return;
 }

 const name = prompt("Ingresa el nuevo nombre (o presiona cancelar para dejarlo sincambios):", empleados[index].name);
 if (name) {
 empleados[index].nombre= nombre;
 }

 const apellido = prompt("Ingresa el nuevo apellido (o presiona cancelar para dejarlo sincambios):", empleados[index].apellido);
 if (apellido) {
 empleados[index].apellido = apellido;
 }

 const fechaInicio = prompt("Ingresa la nueva fecha de inicio (en formato dd/mm/yyyy) o presiona cancelar para dejarlo sin cambios):", empleados[index].fechaInicio);
 if (fechaInicio) {
 empleados[index].fechaInicio = fechaInicio;
 }

 const fechaNacimiento = prompt("Ingresa la nueva fecha de nacimiento (en formato dd/mm/yyyy) (opresiona cancelar para dejarlo sin cambios):", empleados[index].fechaNacimiento);
 if (fechaNacimiento) {
 empleados[index].fechaNacimiento = fechaNacimiento;
 }
}

function listarEmpleados() {
    console.log("Lista de empleados:");
    for (let i = 0; i < empleados.length; i++) {
      let empleado = empleados[i];
      console.log(`${i + 1}. Nombre: ${empleado.nombre} Apellido: ${empleado.apellido} DNI: ${empleado.dni} Fecha de inicio: ${empleado.fechaInicio} Fecha de nacimiento: ${empleado.fechaNacimiento}`);
    }
  }


do{

const option = prompt(`Selecciona una opción:
1. Dar de Alta un Empleado
2. Dar de Baja un Empleado
3. Modificar un Empleado
4. Listar
5. Salir


Opción:`);

 switch (option) {
 case "1":
    agregaEmpleado();
 break;
 case "2":

    borraEmpleado();
 break;
 case "3":
    modificaEmpleado();
 break ;
 case  "4":{
    alert("listar empleados");
    listarEmpleados(); }           
 break;
 case "5":{
        alert("Gracias por usar el sistema");
      console.log("Gracias por usar el sistema!")}
      
 break;

default:{
      
    console.log("Opción inválida. Por favor elija una opción válida (1-5).");
    break;}
  }
alert(option);
}while(option != "5" );


