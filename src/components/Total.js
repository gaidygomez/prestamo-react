import React, {Fragment} from 'react';

const Total = ({total, timeLimit, quantity}) => (
        <Fragment>
            <div className="u-full-width resultado">
                <h2>Resume</h2>
                <p>Cantidad Solicitada: $ {quantity} </p>
                <p>Plazo a pagar: {timeLimit} meses</p>
                <p>Cuotas Mensuales: $ {(total/timeLimit).toFixed(2)} </p>
                <p>Total a pagar: $ {(total).toFixed(2)} </p>
            </div>
        </Fragment>
);
 
export default Total;