import React from "react";
import moment from 'moment';
import Link from "next/link";

import HotelAgeRangesTable from '~/components/Partials/HotelAgeRangesTable';
import PriceTable from './PriceTable';
import PriceTableWrap from './PriceTableWrap';
import PriceTableWrap2 from './PriceTableWrap2';
import HotelExtraServicesTable from "./HotelExtraServicesTable";


const PeriodArchiveItem = props => {
  const period = props.period; console.log('period', props)
  let dateFrom = moment(props.period.date_from, 'YYYY-MM-DD');
  let dateTo = moment(props.period.date_to, 'YYYY-MM-DD');

  // let priceList = {};
  // for (const [key, treatmentObj] of Object.entries(props.period.viewPrices)) {
  //   priceList[key] = {
  //     n1: (treatmentObj.n1) ? treatmentObj.n1 : null,
  //     n2: (treatmentObj.n2) ? treatmentObj.n2 : null,
  //     n3: (treatmentObj.n3) ? treatmentObj.n3 : null,
  //     n4: (treatmentObj.n4) ? treatmentObj.n4 : null,
  //     n5: (treatmentObj.n5) ? treatmentObj.n5 : null,
  //     n6: (treatmentObj.n6) ? treatmentObj.n6 : null,
  //     n7: (treatmentObj.n7) ? treatmentObj.n7 : null,
  //   };
  // }


  return (
    <React.Fragment>
    <div className="col-sm-10">
      <div className="prices-date">
        dal {dateFrom.format('DD/MM')} al {dateTo.format('DD/MM')}
      </div>

      {/* {priceList && Object.entries(priceList).map( ([treatment, prices], index) => 
        <div className="prices-box" key={index}>
          <PriceTable 
            key={index}
            index={index}
            treatment={treatment}
            prices={prices}
            hotel={props.hotel}
            period={props.period}
            />
        </div>
      )} */}

      <PriceTableWrap2 {...props} />

      {props.hasHotelAgeRanges && period.hotelAgeRanges && period.hotelAgeRanges.length > 0 && 
        <HotelAgeRangesTable
          hotelAgeRanges={period.hotelAgeRanges}
          />  

        // <React.Fragment>
        //   <span>Supplementi e Riduzioni per età</span>
        //   <table className="prices-table">
        //     <tbody>
        //       {period.hotelAgeRanges.map( (obj, index) => 
        //         <tr key={index}>
        //           <td className="service-name">
        //             {obj.age_min} - {obj.age_max}
        //           </td>
        //           <td className="service-price">
        //             <span className="no-smartphone">{(obj.price_type == 'fixed') ? '€ ' : '+ '}</span>
        //             {obj.price},-
        //             {(obj.price_type == 'percent') ? ' %' : ''}
        //           </td>
        //         </tr>
        //       )}
        //     </tbody>
        //   </table>
        // </React.Fragment>
      }
    </div>
    <div className="col-sm-2 text-right">
      <Link 
        as={`${process.env.accommodations_path}/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}`} 
        href={{pathname: `${process.env.accommodations_path}/[accommodition]/booking/[period]`}}
      >
        <a className="prices-goto with-top-border"></a>
      </Link>
    </div>
    </React.Fragment>
  );
};



const PeriodArchive = props => {
  return (
    <div className="prices-box-container">
      <div className="row">
        {props.periods && props.periods.length > 0 && props.periods.map( (period, index) => 
          <PeriodArchiveItem 
            key={index} 
            hotel={props.hotel}
            period={period} 
            hasHotelAgeRanges={props.hasHotelAgeRanges}
            />
        )}
      </div>
    </div>
  );
};

export default PeriodArchive;