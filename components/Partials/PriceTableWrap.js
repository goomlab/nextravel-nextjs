import React from 'react';
import moment from 'moment';

import PriceTable from './PriceTable';

export const getPriceList = period => {
  let priceList = {};
  
  for (const [key, treatmentObj] of Object.entries(period.viewPrices)) {
    priceList[roomTypeName][key] = {
      n1: (treatmentObj.n1) ? treatmentObj.n1 : null,
      n2: (treatmentObj.n2) ? treatmentObj.n2 : null,
      n3: (treatmentObj.n3) ? treatmentObj.n3 : null,
      n4: (treatmentObj.n4) ? treatmentObj.n4 : null,
      n5: (treatmentObj.n5) ? treatmentObj.n5 : null,
      n6: (treatmentObj.n6) ? treatmentObj.n6 : null,
      n7: (treatmentObj.n7) ? treatmentObj.n7 : null,
    };
  }
  
  return priceList
}

const PriceTableWrap = props => {
  const priceList = getPriceList(props.period)

  return(
    <>
    {priceList && Object.entries(priceList).map( ([treatment, prices], index) => 
      <PriceTable 
        key={index}
        index={index}
        treatment={treatment}
        prices={prices}
        hotel={props.hotel}
        period={props.period}
        priceTableLink={true}
        />
    )}
    </>
  )
}

export default PriceTableWrap;