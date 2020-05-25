//popup close
/*
var close = document.getElementById("close");
var fondo = document.getElementById("overlay");
var message = document.getElementById("popup");

close.addEventListener("click", cerrar);

function cerrar(){
    fondo.style.opacity = "0"
    fondo.style.visibility = "hidden"
    fondo.style.transition = "0.4s"
    message.style.opacity = "0"
    message.style.visibility = "hidden"
    message.style.transition = "0.4s"
}*/

//calc functions
var box = document.getElementById("datos");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var num0 = document.getElementById("num0");
var mas = document.getElementById("mas");
var menos = document.getElementById("menos");
var multi = document.getElementById("multi");
var divi = document.getElementById("divi");
var igual = document.getElementById("igual");
var cleanbutton = document.getElementById("clean");
var aux1;
var aux2;
var auxresto;
var cmenos = 0; //cantidad de veces que se apreto el boton menos
var operacion;

cleanbutton.addEventListener("click", function limpiar(){ box.value =""});
num1.addEventListener("click", function n1(){box.value += num1.innerHTML;});
num2.addEventListener("click", function n2(){box.value += num2.innerHTML;});
num3.addEventListener("click", function n3(){box.value += num3.innerHTML;});
num4.addEventListener("click", function n4(){box.value += num4.innerHTML;});
num5.addEventListener("click", function n5(){box.value += num5.innerHTML;});
num6.addEventListener("click", function n6(){box.value += num6.innerHTML;});
num7.addEventListener("click", function n7(){box.value += num7.innerHTML;});
num8.addEventListener("click", function n8(){box.value += num8.innerHTML;});
num9.addEventListener("click", function n9(){box.value += num9.innerHTML;});
num0.addEventListener("click", function n0(){box.value += num0.innerHTML;});
mas.addEventListener("click", sumar);
menos.addEventListener("click", restar);
multi.addEventListener("click", multiplicar);
divi.addEventListener("click", dividir);
igual.addEventListener("click", op);

function sumar(){
    if(box.value != '+' && box.value != '-' && box.value != '*' && box.value != '/'){
        aux1 = parseFloat(box.value)}; 
        box.value =""; 
        box.value += mas.innerHTML;
    }

function restar(){
    cmenos+=1;
    if(box.value != '+' & box.value != '-' & box.value != '*' & box.value != '/'){
        aux1 = parseFloat(box.value);
        box.value ="";
        box.value += menos.innerHTML;   
    }
}

function multiplicar(){
    if(box.value != '+' & box.value != '-' & box.value != '*' & box.value != '/'){
        aux1 = parseFloat(box.value); 
        box.value ="";
        box.value += multi.innerHTML;    
    }
}
function dividir(){
    aux1 = parseFloat(box.value); 
    box.value = divi.innerHTML;
}

function op(){
    aux2 = parseFloat(box.value.slice(1, box.value.length)); 
    resto = cmenos%2;
    if(box.value[0] == '+'){
        operacion = aux1+aux2; 
        box.value = operacion;
    }else if(box.value[0] == '-'){    
        if(resto != 0){
            operacion = aux1+aux2; 
            box.value = operacion;
        }else{
            operacion = aux1-aux2; 
            box.value = operacion;
        }
    }else if(box.value[0] == '*'){
        operacion = aux1*aux2; 
        box.value = operacion;
    }else if(box.value[0] == '/'){
        operacion = aux1/aux2; 
        box.value = operacion;
    }
}