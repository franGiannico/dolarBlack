import { useState, useEffect } from "react";

function ValorDolarBlueCompra() {
  const [blueDollarValue, setBlueDollarValue] = useState(null);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => response.json())
      .then(data => {
        const blueValue = data.blue.value_buy;
        setBlueDollarValue(blueValue);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <p className="p_valorDolar">Dólar blue para la compra: {blueDollarValue}</p>
    </div>
  );
}

export default ValorDolarBlueCompra