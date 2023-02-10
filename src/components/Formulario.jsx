import { useEffect, useState } from 'react'
import countriesJS from '../api/countries.json'
import statesJS from '../api/states.json'
import citiesJS from '../api/cities.json'

const Formulario = () => {

  const [countrie, setCountrie] = useState('')
  const [estado, setEstado] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [estados, setEstados] = useState([])
  const [cities, setCities] = useState([])
  
  const handleCountrie = e => setCountrie(e.target.value)
  const handleState = e => setEstado(e.target.value)

  useEffect(() => {
    if(countrie !== ''){
      setEstados( statesJS.states.filter( state => state.id_country === +countrie ) )
    }
  }, [countrie])

  useEffect(() => {
    if(estado){
      setCities( citiesJS?.cities.filter( citjs => citjs.id_state === +estado ) )
    }
  }, [estado])
  
  

  return (
    <>
      <div className="contenedor">
        <form>
          <div className="campo">
            <label htmlFor="pais">País</label>
            <select 
              name="pais" id="pais"
              value={countrie}
              onChange={ e => handleCountrie(e) }
            >
              <option value="">-- Selecciona un País --</option>
                {countriesJS.countries?.map( countrie => (
                  <option key={countrie.id} value={countrie.id}>{countrie.name}</option>
                ))}
            </select>
          </div>
          <div className="campo">
            <label htmlFor="estado">Entidad Federativa</label>
            <select 
              name="estado" id="estado"
              value={estado}
              onChange={ e => handleState(e) }
            >
              <option value="">-- Selecciona una Entidad Federativa --</option>
                {estados?.map( estado => (
                  <option key={estado.id} value={estado.id}>{estado.name}</option>
                ))}
            </select>
          </div>
          <div className="campo">
            <label htmlFor="ciudad">Ciudad</label>
            <select 
              name="ciudad" id="ciudad"
              value={ciudad}
              onChange={ e => handleState(e) }
            >
              <option value="">-- Selecciona una Entidad Federativa --</option>
                {cities.map( citie => (
                  <option key={citie.id} value={citie.id}>{citie.name}</option>
                ))}
            </select>
          </div>
        </form>
      </div>
    </>
  )
}

export default Formulario