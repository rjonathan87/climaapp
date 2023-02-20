import useClima from "../hooks/useClima"

const Resultado = () => {
  const { resultado } = useClima()
  const { name, main } = resultado
  const kelvin = 274.15

  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es: </h2>
      <p>{ parseInt(main.temp - kelvin) } <span>&#x2103;</span> </p>
      <div className="tempminmax">
        <p>mínima: { parseInt(main.temp_min - kelvin) } <span>&#x2103;</span> </p>
        <p>máxima: { parseInt(main.temp_max - kelvin) } <span>&#x2103;</span> </p>
      </div>
    </div>
  )
}

export default Resultado