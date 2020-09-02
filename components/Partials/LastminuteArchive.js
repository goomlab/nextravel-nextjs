import React from "react";
import moment from 'moment';
import Link from "next/link";

import PriceTable from './PriceTable';


const LastminuteArchiveItem = props => {
  let dateFrom = moment(props.lastminute.date_from, 'YYYY-MM-DD');
  let dateTo = moment(props.lastminute.date_to, 'YYYY-MM-DD');

  let priceList = {};
  for( let i in props.lastminute.prices ) {
    priceList[props.lastminute.prices[i].treatment] = {
      n1: null,
      n2: null,
      n3: null,
      n4: null,
      n5: null,
      n6: null,
      n7: null,
      n8: null,
      n9: null,
      n10: null,
      n11: null,
      n12: null,
      n13: null,
      n14: null,
    };
  }
  for( let i in props.lastminute.prices ) {
    priceList[props.lastminute.prices[i].treatment]['n'+props.lastminute.prices[i].nights] = props.lastminute.prices[i];
  }


  return (
    <React.Fragment>
    <div className="col-sm-10">
      <div className="prices-date">
        dal {dateFrom.format('DD/MM')} al {dateTo.format('DD/MM')}
      </div>

      {priceList && Object.entries(priceList).map( ([treatment, prices], index) => 
        <div className="prices-box" key={index}>
          <PriceTable 
            key={index}
            index={index}
            treatment={treatment}
            prices={prices}
            hotel={props.lastminute.hotel}
            lastminute={props.lastminute}
            />
        </div>
      )}
    </div>
    <div className="col-sm-2 text-right">
       <a href="#" className="prices-goto with-top-border"></a>
    </div>
    </React.Fragment>
  );
};



const LastminuteArchive = props => {
  return (
    <div className="prices-box-container">
      <div className="row">
        {props.lastminutes && props.lastminutes.length > 0 && props.lastminutes.map( (lastminute, index) => 
          <LastminuteArchiveItem 
            key={index} 
            lastminute={lastminute} 
            />
        )}
      </div>
    </div>
  );
};

export default LastminuteArchive;