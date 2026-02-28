let Nt=[5], Sum=0, Prom=0;
for (let i = 0; i < 5; i++) {
    Nt[i]=Number(prompt("Ingrese la nota "+(i+1)));
    Sum+=Nt[i];
}
Prom=Sum/5;
alert("La primera nota es: "+Nt[0]+"\nLa segunda nota es: "+Nt[1]+"\nLa tercera nota es: "+Nt[2]+"\nLa cuarta nota es: "+Nt[3]+"\nLa quinta nota es: "+Nt[4]+"\nLa suma de las notas es: "+Sum+"\nEl promedio es: "+Prom);