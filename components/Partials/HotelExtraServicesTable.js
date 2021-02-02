import React from 'react';
import moment from 'moment';
import Link from "next/link";


const HotelExtraServicesTable = props => {
  return (
    <React.Fragment>
      {props.extraServices && props.extraServices > 0 && 
        <React.Fragment>
          <span>Supplementi e servizi aggiuntivi</span>
          <table class="prices-table">
            <tbody>
            {props.extraServices.map( (obj, index) => 
              <tr key={index}>
                <td className="service-name">
                  {obj.name}
                </td>
                <td className="service-price">
                  <span className="no-smartphone">{(obj.pivot.price_type == 'fixed') ? '€ ' : '+ '}</span>
                  {obj.pivot.price},-
                  {(obj.pivot.price_type == 'percent') ? ' %' : ''}
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </React.Fragment>
      }
    </React.Fragment>
  )
}

export default HotelExtraServicesTable