let CantEle=0, Usu=0, MayCe=0, MenCe=0, Ce=0;
CantEle=prompt("Ingrese la cantidad de elementos a ingresar");
for (let i = 0; i < CantEle; i++) {
    Usu=prompt("Ingrese un numero");
    if (Usu==0) {
        Ce++;
    } 
    else if (Usu>0) {
        MayCe++;
    } 
    else {
        MenCe++;
    }
}
alert("Cantidad de ceros: "+Ce+"\nCantidad de numeros mayores a cero: "+MayCe+"\nCantidad de numeros menores a cero: "+MenCe);