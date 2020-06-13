import React, {useState} from 'react';
import Header from './components/Header'
import Form from './components/Form';
import Message from './components/Message'
import Total from './components/Total'
import Spinner from './components/Spinner';

function App() {

  const [state, setState] = useState(0)
  const [dateTerm, setDateTerm] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  let component 

  if (loading) {
    component = <Spinner/>
  } else if (total === 0) {
    component = <Message/>
  } else {
    component = <Total
      quantity = {state}
      timeLimit = {dateTerm}
      total = {total}
    />
  }  
  
  return (
    <div className="App">
      <Header
        title="Cotizador de Prestámos"
      />

      <div className="container">
        <Form 
          state= {state}
          setState= {setState}
          dateTerm= {dateTerm}
          setDateTerm= {setDateTerm}
          setTotal= {setTotal}
          setLoading= {setLoading}
        />

        <div className = "mensajes">
          {component}
        </div>
      </div>

    </div>
  );
}

export default App;
