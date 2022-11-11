function convertir() {
    var valore= parseInt(document.getElementById("valor").value);
    var resultado= 0;
    var dolar= 152.83;
    var euro= 150.58;
    if (document.getElementById ("uno").checked) {
      resultado=valore/dolar;
      alert ("El cambio de pesos Arg a Dolares es:$"+ resultado);
    }
     else 
     if (document.getElementById("dos").checked) {
      resultado=valore/euro;
      alert ("El cambio de pesos Arg a Euros es:"+ resultado);
     }
      else{
        alert("Tienes que completar todos los campos")
      }
  }

  const apiUrl = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

  async function precioDolar() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      let ventaDolarOficial = document.getElementById("venta-dolar-oficial");
      let ventaDolarBlue = document.getElementById("venta-dolar-blue");
      let ventaDolarSoja = document.getElementById("venta-dolar-soja");
      let ventaDolarLiqui = document.getElementById("venta-dolar-liqui");
      let ventaDolarBolsa = document.getElementById("venta-dolar-bolsa");
      let ventaDolarBitcoin = document.getElementById("venta-dolar-bitcoin");
      let ventaDolarTurista = document.getElementById("venta-dolar-turista");
  
      let compraDolarOficial = document.getElementById("compra-dolar-oficial");
      let compraDolarBlue = document.getElementById("compra-dolar-blue");
      let compraDolarSoja = document.getElementById("compra-dolar-soja");
      let compraDolarLiqui = document.getElementById("compra-dolar-liqui");
      let compraDolarBolsa = document.getElementById("compra-dolar-bolsa");
      let compraDolarBitcoin = document.getElementById("compra-dolar-bitcoin");
      let compraDolarTurista = document.getElementById("compra-dolar-turista");
  
      ventaDolarOficial.innerHTML =
        data[0].casa.nombre + `: ${data[0].casa.venta}$`;
      ventaDolarBlue.innerHTML = data[1].casa.nombre + `: ${data[1].casa.venta}$`;
      ventaDolarSoja.innerHTML = data[2].casa.nombre + `: ${data[2].casa.venta}$`;
      ventaDolarLiqui.innerHTML =
        data[3].casa.nombre + `: ${data[3].casa.venta}$`;
      ventaDolarBolsa.innerHTML =
        data[4].casa.nombre + `: ${data[4].casa.venta}$`;
      ventaDolarBitcoin.innerHTML =
        data[5].casa.nombre + `: ${data[5].casa.venta}$`;
      ventaDolarTurista.innerHTML =
        data[6].casa.nombre + `: ${data[6].casa.venta}$`;
  
      compraDolarOficial.innerHTML =data[0].casa.nombre + `: ${data[0].casa.compra}$`;
      compraDolarBlue.innerHTML =data[1].casa.nombre + `: ${data[1].casa.compra}$`;
      compraDolarSoja.innerHTML =data[2].casa.nombre + `: ${data[2].casa.compra}$`;
      compraDolarLiqui.innerHTML =data[3].casa.nombre + `: ${data[3].casa.compra}$`;
      compraDolarBolsa.innerHTML =data[4].casa.nombre + `: ${data[4].casa.compra}$`;
      compraDolarBitcoin.innerHTML =data[5].casa.nombre + `: ${data[5].casa.compra}$`;
      compraDolarTurista.innerHTML =data[6].casa.nombre + `: ${data[6].casa.compra}$`;
    } catch (error){
      console.log("ERROR", error);
    }
  }
  
  precioDolar();

