let Num=0, SumPar=0, SumIm=0;
for(let i=0; i<10;i++){
    Num=Number(prompt("Ingrese el valor "+ (i+1)));
    if (Num%2 == 0) {
        SumPar += Num
    }
    else{
        SumIm += Num;
    }
}
alert("La suma de pares es: "+ SumPar + " y La suma de los impares es: "+ SumIm);