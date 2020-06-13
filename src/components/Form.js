import React, {useState, Fragment} from 'react';
import { calcularTotal } from "../helpers";

const Form = ({state, setState, dateTerm, setDateTerm, setTotal, setLoading}) => {

    const [error, setError] = useState(false)

    const prestamo = (e) => {
        e.preventDefault()
        
        if (state === 0 || dateTerm === 0 || isNaN(state) || isNaN(dateTerm)) {
            setError(true)
            return
        }
        
        setError(false)
        setLoading(true)

        setTimeout(() => {
            const total = calcularTotal(state,dateTerm)
            setTotal(total)
            setLoading(false)
        }, 3000);
    }

    return (
        <Fragment> 
        <form onSubmit={prestamo}>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  < input className = "u-full-width"
                  type = "number"
                  placeholder = "Ejemplo: 3000"
                  onChange = {
                    event => setState(parseInt(event.target.value))
                  }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                  className="u-full-width"
                  onChange= {
                      event => setDateTerm(parseInt(event.target.value))
                  }>
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input type="submit" value="Calcular" className="button-primary u-full-width" />
              </div>
          </div>
        </form>
        
        { (error) ? <p className = "error"> Todos los Campos son obligatorios </p> : null }
        </Fragment>
    );
}
 
export default Form;