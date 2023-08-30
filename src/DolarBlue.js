import { useState, useEffect } from "react";

function DolarBlue() {
  const [blueDollarSell, setBlueDollarSell] = useState(null);
  const [blueDollarBuy, setBlueDollarBuy] = useState(null);
  const [blueDollarAvg, setBlueDollarAgv] = useState(null);
  const [blueDollarLastUpdate, setBlueLastUpdate] = useState(null);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => response.json())
      .then(data => {
        const blueValueSell = data.blue.value_sell;
        const blueValueBuy = data.blue.value_buy;
        const blueValueAvg = data.blue.value_avg;
        const blueLastUpdate = data.last_update;

        setBlueDollarSell(blueValueSell)
        setBlueDollarBuy(blueValueBuy) 
        setBlueDollarAgv(blueValueAvg)
        setBlueLastUpdate(blueLastUpdate)
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="div-dolar dark-mode-card">
      <h2 className="tituloDolarBlackRecuadro">dolarBlack.com.ar</h2>
      <p className="p-valorDolar">Dólar blue venta: {blueDollarSell}</p>
      <p className="p-valorDolar">Dólar blue compra: {blueDollarBuy}</p>
      <p className="p-valorDolar">Promedio: {blueDollarAvg}</p>
      <p className="p-lastUpdate">actualizado: {blueDollarLastUpdate}</p>
      
    {/* <div className="">
        <p className="p-valorDolar">Calculadora Online: <input placeholder="Ingresá el importe en dólares"></input></p>
    </div> */}
    </div>
  );
}

export default DolarBlue

