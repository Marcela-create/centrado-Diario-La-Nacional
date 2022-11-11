"use estrict"
let imagen = document.getElementById("anuncios")
const marcas = ["bbva", "turkish", "cocacola","carrefour","coto"]
let num = 0
const timer = () =>{
    
    setInterval(()=>{
      if (num<= marcas.length-1){
        imagen.src ="img/anuncios/"+marcas[num]+".jpg";
        num++;
        console.log(imagen.src)
      } if (num>marcas.length-1) num=0;
      
    },3000)
}

timer();