
var box = document.getElementById("datos");

box.addEventListener("click", clean);

var n1 = document.getElementById("num1");
n1.addEventListener("click", num1);

var n2 = document.getElementById("num2");
n2.addEventListener("click", num2);

var n3 = document.getElementById("num3");
n3.addEventListener("click", num3);

var n4 = document.getElementById("num4");
n4.addEventListener("click", num4);

var n5 = document.getElementById("num5");
n5.addEventListener("click", num5);

var n6 = document.getElementById("num6");
n6.addEventListener("click", num6);

var n7 = document.getElementById("num7");
n7.addEventListener("click", num7);

var n8 = document.getElementById("num8");
n8.addEventListener("click", num8);

var n9 = document.getElementById("num9");
n9.addEventListener("click", num9);

var n0 = document.getElementById("num0");
n0.addEventListener("click", num0);

var suma = document.getElementById("mas");
suma.addEventListener("click", s);

var resta = document.getElementById("menos");
resta.addEventListener("click", r);

var divi = document.getElementById("multi");
divi.addEventListener("click", m);

var multi = document.getElementById("divi");
multi.addEventListener("click", d);

var resultado = document.getElementById("igual");
resultado.addEventListener("click", mostrar);

function clean(){
    box.innerHTML = "";
}

function num1(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num1").innerHTML;
    box.innerHTML = actual + append;
}

function num2(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num2").innerHTML;
    box.innerHTML = actual + append;
}
function num3(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num3").innerHTML;
    box.innerHTML = actual + append;
}

function num4(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num4").innerHTML;
    box.innerHTML = actual + append;
}

function num5(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num5").innerHTML;
    box.innerHTML = actual + append;
}

function num6(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num6").innerHTML;
    box.innerHTML = actual + append;
}

function num7(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num7").innerHTML;
    box.innerHTML = actual + append;
}

function num8(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num8").innerHTML;
    box.innerHTML = actual + append;
}

function num9(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num9").innerHTML;
    box.innerHTML = actual + append;
}

function num0(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("num0").innerHTML;
    box.innerHTML = actual + append;
}

function s(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("mas").innerHTML;
    box.innerHTML = actual + " " + append + " ";
}

function r(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("menos").innerHTML;
    box.innerHTML = actual + " " + append + " ";
}
function m(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("multi").innerHTML;
    box.innerHTML = actual + " " + append + " ";
}
function d(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("divi").innerHTML;
    box.innerHTML = actual + " " + append + " ";
}

function mostrar(){
    var actual = document.getElementById('datos').innerHTML;
    var append = document.getElementById("divi").innerHTML;
    box.innerHTML = actual + " " + append + " ";
}

/*Button message function*/

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
}
