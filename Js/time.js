"use strict"

function startTime(){
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes(); 
    let s=today.getSeconds(); 
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById("reloj").innerHTML=h+":"+m+":"+s;
    let t=setTimeout("startTime()",500);
}// Construimos el formato de salida esta escrito en htmlporque no responde por aca
// document.getElementById("#reloj").classList.add(".digital");
//document.write("Hora:"+ getHours(),"Minutos: "+ getMinutes(),"Segundos: "+ getSeconds());


    function checkTime(i){
        if (i<12) {i="0" + i;}return i;}
    window.onload=function(){
        startTime();
    }
    // Creamos array con los meses del año
     const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
     const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];// Creamos array con los días del año
     const fecha = new Date();
// Construimos el formato de salida que esta escrito en html porque no responde pro aca
//const list = element.classList;
//document.getElementById("#fecha").list.add(".digitalizado");
//document.write(dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
