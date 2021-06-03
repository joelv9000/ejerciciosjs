/** 
 * Calcular el salario bruto y neto mensual y quincenal de una persona, 
 * el salario diario debe ser ingresado por el usuario a traves de promt (pago por día), 
 * los descuentos para calcular el sueldo netos serán sueldo bruto - ISR(30%)  - IMSS(10)
 * El salario bruto es lo que pagan pero sin descuentos
 * Neto implica los impuestos
 */



var salario_diario =parseInt( prompt ("cual es su salario por dia "));

var salario_bruto_mensual=parseInt(salario_diario*28);
var salario_bruto_quincenal=parseInt(salario_diario*14);
var salario_neto_quincenal= parseInt(salario_bruto_quincenal)-(salario_bruto_quincenal*.3)-(salario_bruto_quincenal*.1);
var salario_neto_mensual =parseInt(( salario_bruto_mensual- (salario_bruto_mensual*.3)-(salario_bruto_mensual*.1)));

console.log("tu salario bruto mensual es $:"+salario_bruto_mensual);
console.log("Tu salario neto mensual es $"+salario_neto_mensual);
console.log("Tu salario bruto quincenal es: $"+salario_bruto_quincenal);
console.log("Tu salario neto quincenal es: $"+salario_neto_quincenal);