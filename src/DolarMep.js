import { useState, useEffect } from "react";

function DolarMep() {
  const [blueDollarSell, setBlueDollarSell] = useState(null);
  const [blueDollarBuy, setBlueDollarBuy] = useState(null);
  const [blueDollarLastUpdate, setBlueLastUpdate] = useState(null);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/bolsa")
      .then(response => response.json())
    //   .then(data => console.log(data))
      .then( data=> {

        const blueValueSell = data.venta;
        const blueValueBuy = data.compra;
        const blueLastUpdate = data.fechaActualizacion;

        setBlueDollarSell(blueValueSell)
        setBlueDollarBuy(blueValueBuy) 
        setBlueLastUpdate(blueLastUpdate)
      })
      .catch(error => console.error(error));
}, []);

  return (
    <div className="div-dolar dark-mode-card">
      <h2 className="tituloDolarBlackRecuadro">dolarBlack.com.ar</h2>
      <p className="p-valorDolar">Dólar MEP venta: {blueDollarSell}</p>
      <p className="p-valorDolar">Dólar MEP compra: {blueDollarBuy}</p>
      <p className="p-lastUpdate">actualizado: {blueDollarLastUpdate}</p>
      
    {/* <div className="">
        <p className="p-valorDolar">Calculadora Online: <input placeholder="Ingresá el importe en dólares"></input></p>
    </div> */}
    </div>
  );
}

export default DolarMep

