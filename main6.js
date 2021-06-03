
/**Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.
 *//*
alert ="Buenos dias , este es el objeto "


 var persona ={
     nombre:"JUan",
     apellidos:"Vega",
    edad:40.,
     }*/
   
   /*  Este fue el ejemplo Luis

var persona = {
    nombre: ["Bob","Smith"],
    edad: 32,
    genero: "Masculino",
    intereses: ["Música", "Esqui"],
    bio: function () {
        alert(this.nombre[0] + " " + this.nombre[1] + " Tiene " 
        + this.edad + " años. Le gusta "+ this.interes[0] + " y "+
        this.intereses[1] + ".");
    },
    saludo: function(){
        alert("Hola, soy" + this.nombre[0] + ". ");
    }

}


*/



funtion persona(nombre,apellidos,edad){
    this.nombre= nombre;
    this.apellidos= apellidos;
    this.edad = edad ;

}

var objetopersona= new persona ("Rogelio,"martinez", 40);


console.log(objeto_persona.persona)
