/* for(let i=0;i<5;i++){
    console.log("Vuelta nro "+i)
}
 */

//Tabla de multiplicar
/* 
let ingresaNumero = parseInt(prompt("Ingrese número a multiplicar"))

for (let i = 1; i<=10; i++){
    let resultado =ingresaNumero * i
    console.log(ingresaNumero +" X "+ i +" = "+ resultado)
}

 */

//Usuario y contraseña con ciclo FOR
/* for(let i=0 ; i<3 ; i++)
{
let usuario= prompt("Ingresa Usuario")
let contraseña = prompt("Ingresa contraseña para "+usuario)


if((usuario=="DarthVader") && (contraseña=="Code_66")){
    console.log("Bienvenido al Sistema, Anakin!")
    break
}else{
    console.log("Usuario y/o contraseña erroneos")
}
console.log("Te quedan "+(2-i)+" intentos")
}

 */
/* 
for(let i=1; i<=100; i++){
    if(i%2==0){
        continue
    }
    console.log(i)
} */

/* let nota
let acumulador = 0

for(let i=1; i<=3;i++){
    nota=parseInt(prompt("Ingresa la nota nro "+i))
    console.log("La nota ingresada: "+nota)
    acumulador = acumulador + nota
    console.log("Acumulador actualizado "+acumulador)
}
console.log("Promedio: "+(acumulador/3))
 */


let numero = 0;
do{
numero = parseInt(prompt("Ingresar Número"));

if(numero==NaN){ 
    console.log("No es un número");
}else{
    console.log(numero);
}

}while(parseInt(numero))
