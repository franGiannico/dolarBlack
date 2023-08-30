import { useState, useEffect } from "react";

function DolarOficial() {
  const [officialDollarSell, setOfficialDollarSell] = useState(null);
  const [officialDollarBuy, setOfficialDollarBuy] = useState(null);
  const [officialDollarAvg, setOfficialDollarAgv] = useState(null);
  const [blueDollarLastUpdate, setBlueLastUpdate] = useState(null);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => response.json())
      .then(data => {
        const officialValueSell = data.oficial.value_sell;
        const officialValueBuy = data.oficial.value_buy;
        const officialValueAvg = data.oficial.value_avg;
        const blueLastUpdate = data.last_update;

        setOfficialDollarSell(officialValueSell)
        setOfficialDollarBuy(officialValueBuy) 
        setOfficialDollarAgv(officialValueAvg)
        setBlueLastUpdate(blueLastUpdate)
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="div-dolar dark-mode-card">
      <h2 className="tituloDolarBlackRecuadro">dolarBlack.com.ar</h2>
      <p className="p-valorDolar">Dólar Oficial venta: {officialDollarSell}</p>
      <p className="p-valorDolar">Dólar Oficial compra: {officialDollarBuy}</p>
      <p className="p-valorDolar">Promedio: {officialDollarAvg}</p>
      <p className="p-lastUpdate">actualizado: {blueDollarLastUpdate}</p>
    {/* <div className="">
        <p className="p-valorDolar">Calculadora Online: <input placeholder="Ingresá el importe en dólares"></input></p>
    </div> */}
    </div>
  );
}

export default DolarOficial
