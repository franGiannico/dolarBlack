import { useState, useEffect } from "react";

function ValorDolarBluePromedio() {
  const [blueDollarValue, setBlueDollarValue] = useState(null);

  useEffect(() => {
    fetch("https://api.bluelytics.com.ar/v2/latest")
      .then(response => response.json())
      .then(data => {
        const blueValue = data.blue.value_avg;
        setBlueDollarValue(blueValue);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="div-dolar">
      <p className="p-valorDolar">Promedio: {blueDollarValue}</p>
    </div>
  );
}

export default ValorDolarBluePromedio