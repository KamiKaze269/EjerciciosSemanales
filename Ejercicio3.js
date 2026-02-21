let Num=0, Sum=0, Prom=0;
for(let i=0; i<20;i++){
    Num=Number(prompt("Ingrese el valor "+ (i+1)));
    Sum += Num;
}
Prom=Sum/20;
alert("El promedio es: "+ Prom);