let Arr1=[], Arr2=[];
for(let i=0; i<5; i++){
    Arr1[i]=parseInt(prompt("Ingrese el numero "+(i+1)+" del primer arreglo"));
    Arr2[5-i]=Arr1[i];
}
alert("El primer arreglo es: "+ Arr2);