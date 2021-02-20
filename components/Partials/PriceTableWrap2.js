import React from 'react';
import moment from 'moment';

import PriceTable from './PriceTable';

const PriceTableWrap2 = props => {
  return(
    <>
    {props.period.viewPeriodPrices && Object.entries(props.period.viewPeriodPrices).map( ([roomType, roomTypeContent], index) => 
      <React.Fragment key={index}>
        {roomTypeContent.prices && Object.entries(roomTypeContent.prices).map( ([treatment, prices], index2) => 
          <React.Fragment key={index2}>
            <div><span style={{color: '#4fbaad'}}>{roomTypeContent.room_type.name}</span></div>
            <PriceTable 
              // key={index2}
              index={index}
              room_type={roomTypeContent.room_type}
              treatment={treatment}
              prices={prices}
              hotel={props.hotel}
              period={props.period}
              priceTableLink={true}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    )}
    </>
  )
}

export default PriceTableWrap2;


// export const getPriceList = period =>{
//   let priceList = {}

//   for (const [roomTypeName, roomTypeContent] of Object.entries(period.viewPeriodPrices)){
//     priceList[roomTypeName] = {};

//     if( roomTypeContent.prices ){
//       for (const [key, treatmentObj] of Object.entries(roomTypeContent.prices)) {
//         priceList[roomTypeName][key] = {
//           n1: (treatmentObj.n1) ? treatmentObj.n1 : null,
//           n2: (treatmentObj.n2) ? treatmentObj.n2 : null,
//           n3: (treatmentObj.n3) ? treatmentObj.n3 : null,
//           n4: (treatmentObj.n4) ? treatmentObj.n4 : null,
//           n5: (treatmentObj.n5) ? treatmentObj.n5 : null,
//           n6: (treatmentObj.n6) ? treatmentObj.n6 : null,
//           n7: (treatmentObj.n7) ? treatmentObj.n7 : null,
//         };
//       }
//     }
//   }

//   return priceList
// }

// const PriceTableWrap2 = props => {
//   const priceList = getPriceList(props.period)
  
//   return(
//     <>
//     {priceList && Object.entries(priceList).map( ([roomType, treatments], index) => 
//       <React.Fragment key={index}>
//         {treatments && Object.entries(treatments).map( ([treatment, prices], index2) => 
//           <React.Fragment key={index2}>
//             <div><span style={{color: '#4fbaad'}}>{roomType}</span></div>
//             <PriceTable 
//               // key={index2}
//               index={index}
//               room_type={roomType}
//               treatment={treatment}
//               prices={prices}
//               hotel={props.hotel}
//               period={props.period}
//               priceTableLink={true}
//             />
//           </React.Fragment>
//         )}
//       </React.Fragment>
//     )}
//     </>
//   )
// }

// export default PriceTableWrap2;