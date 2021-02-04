import React from 'react';
import moment from 'moment';
import Link from "next/link";


const HotelAgeRangesTable = props => {
  return (
    <React.Fragment>
      {props.hotelAgeRanges && props.hotelAgeRanges.length > 0 && 
        <div class="prices-box-details">
          <span>Supplementi e Riduzioni per età</span>
          <table className="prices-table">
            <tbody>
            {props.hotelAgeRanges.map( (obj, index) => 
              <tr key={index}>
                <td className="service-name">
                  {obj.age_min} - {obj.age_max}
                </td>
                <td className="service-price">
                  {/* <span className="no-smartphone">{(obj.price_type == 'fixed') ? '€' : (parseFloat(obj.price) > 0 ? '+' : '')}</span> */}
                  <span className="no-smartphone" dangerouslySetInnerHTML={{ __html: (obj.price_type == 'fixed') ? '€&nbsp;' : (parseFloat(obj.price) > 0 ? '+' : '') }} />
                  {obj.price}
                  {(obj.price_type == 'percent') ? '%' : ',-'}
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      }
    </React.Fragment>
  )
}

export default HotelAgeRangesTable