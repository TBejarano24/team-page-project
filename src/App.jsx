import "./App.css";
import Card from "./components/Card";

/*
USO DE PROPS

<Card
        img="https://http2.mlstatic.com/D_NQ_NP_2X_979515-MLA83466723391_042025-F.webp"
        title="Samsung Galaxy A56 5G 256 Gb Negro"
        precio_anterior="$ 1.899"
        precio_actual="$ 1.699"
        descuento="10% OFF"
        cuotas="12 cuotas de S/ 141,58"
        envio_gratis={true}
      ></Card>
*/

function App() {
  const data = [
    {
      nombre: "Samsung Galaxy A56 5G 256 Gb Negro",
      precio_actual: "S/ 1.699",
      precio_anterior: "S/ 1.899",
      descuento: "10%",
      cuotas: "12 cuotas de S/ 141,58",
      envio_gratis: true,
    },
    {
      nombre: "Apple iPhone 13 (128 Gb) - Blanco Estelar",
      precio_actual: "S/ 1.979",
      precio_anterior: "S/ 3.169",
      descuento: "37%",
      cuotas: "6 cuotas de S/ 329,83",
      envio_gratis: true,
    },
    {
      nombre: "Apple iPhone 12 (128 Gb) - Blanco",
      precio_actual: "S/ 2.799",
      precio_anterior: null,
      descuento: null,
      cuotas: "12 cuotas de S/ 233,25",
      envio_gratis: true,
    },
    {
      nombre: "Xiaomi Poco X7 Pro 5G Dual Sim 512 Gb Negro",
      precio_actual: "S/ 1.413",
      precio_anterior: "S/ 2.356",
      descuento: "40%",
      cuotas: "6 cuotas de S/ 235,66",
      envio_gratis: true,
    },
  ];
  return (
    <>
      {data.map((product, index) => (
        <div key={index}>
          <Card
            img="https://http2.mlstatic.com/D_NQ_NP_2X_979515-MLA83466723391_042025-F.webp"
            title={product.nombre}
            precio_anterior={
              product.precio_anterior ? `${product.precio_anterior}` : ""
            }
            precio_actual={product.precio_actual}
            descuento={product.descuento ? `${product.descuento} OFF` : ""}
            cuotas={`${product.cuotas} sin interés`}
            envios={product.envio_gratis ? "Envío gratis" : ""}
          ></Card>
        </div>
      ))}
    </>
  );
}

export default App;
