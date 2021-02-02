import React from 'react';
import moment from 'moment';
import Link from "next/link";


const HotelAgeRangesTable = props => {
  return (
    <React.Fragment>
      {props.hotelAgeRanges && props.hotelAgeRanges > 0 && 
        <React.Fragment>
          <span>Supplementi e Riduzioni per età</span>
          <table className="prices-table">
            <tbody>
            {props.hotelAgeRanges.map( (obj, index) => 
              <tr key={index}>
                <td className="service-name">
                  {obj.age_min} - {obj.age_max}
                </td>
                <td className="service-price">
                  <span className="no-smartphone">{(obj.price_type == 'fixed') ? '€ ' : '+ '}</span>
                  {obj.price},-
                  {(obj.price_type == 'percent') ? ' %' : ''}
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

export default HotelAgeRangesTable