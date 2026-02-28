let Multi=Number(prompt("Ingrese el valor a evaluar"));
function Multiplos(Multi){
let Arr=[];
for(let i=0; i<5;i++){
            Arr[i]=Multi*(i+1);
        alert("Los multiplos de "+Multi+" son: "+Arr);}
    }
    Multiplos(Multi);