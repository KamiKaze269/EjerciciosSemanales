let Num=0, Usu=0;
Num=Math.floor(Math.random() * 100) + 1;
for(let i=0; i<10; i++){
    Usu=Number(prompt("Adivina el numero entre 1 y 100:"));
if(Usu==Num){
    alert("Felicidades, adivinaste el numero!");
}else if(Usu<Num){
    alert("El numero es mayor que " + Usu);
}else{
    alert("El numero es menor que " + Usu);
}
}
alert("El numero era: " + Num);
