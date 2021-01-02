import React from 'react';
import moment from 'moment';
import Link from "next/link";


const PriceTable = props => {
  const prices = props.prices;
  
  let title = "";
  switch( props.treatment ){
    case 'RO': title = "Solo Camera"; break;
    case 'BB': title = "Camera e Colazione"; break;
    case 'HB': title = "Mezza Pensione"; break;
    case 'FB': title = "Pensione Completa"; break;
    case 'HBB': title = "Mezza Completa + Bevande"; break;
    case 'FBB': title = "Pensione Completa + Bevande"; break;
  }

  return (
    <div className="prices-box-details" key={props.index}>
      <div className="prices-top">
        <div className="prices-details">
          <span>{title} / prezzi p.p.</span>
          {/* <span>
            <strong>Omaggio:</strong> Spiaggia + Cure termali + Servizio taxi
          </span> */}
        </div>
        {props.priceTableLink &&
          <Link 
            as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}`} 
            href={{
              pathname: `/accommodations/[accommodition]/booking/[id]`,
              query: {
                checkin: props.period.date_from,
                checkout: props.period.date_to,
              }
            }}
          >
            <a className="prices-goto"></a>
          </Link>
        }
      </div>
      <table className="prices-table">
        <thead>
          <tr className="yes-smartphone">
            <th colSpan="7">notti</th>
          </tr>
          <tr>
            <th>
              1 <span className="no-smartphone">notti</span>
            </th>
            <th>
              2 <span className="no-smartphone">notti</span>
            </th>
            <th>
              3 <span className="no-smartphone">notti</span>
            </th>
            <th>
              4 <span className="no-smartphone">notti</span>
            </th>
            <th>
              5 <span className="no-smartphone">notti</span>
            </th>
            <th>
              6 <span className="no-smartphone">notti</span>
            </th>
            <th>
              7 <span className="no-smartphone">notti</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {prices.n1 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=1`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 1,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n1},-
                </a>
              </Link>
              }
              {!prices.n1 &&  `-`}
            </td>
            <td>
              {prices.n2 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=2`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 2,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n2},-
                </a>
              </Link>
              }
              {!prices.n2 &&  `-`}
            </td>
            <td>
              {prices.n3 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=3`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 3,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n3},-
                </a>
              </Link>
              }
              {!prices.n3 &&  `-`}
            </td>
            <td>
              {prices.n4 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=4`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 4,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n4},-
                </a>
              </Link>
              }
              {!prices.n4 &&  `-`}
            </td>
            <td>
              {prices.n5 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=5`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 5,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n5},-
                </a>
              </Link>
              }
              {!prices.n5 &&  `-`}
            </td>
            <td>
              {prices.n6 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=6`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 6,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n6},-
                </a>
              </Link>
              }
              {!prices.n6 &&  `-`}
            </td>
            <td>
              {prices.n7 && 
              <Link 
                as={`/accommodations/${props.hotel.slug.it}/booking/${props.period.id}?checkin=${props.period.date_from}&checkout=${props.period.date_to}&treatment=${props.treatment}&nights=7`} 
                href={{
                  pathname: `/accommodations/[accommodition]/booking/[id]`,
                  query: {
                    checkin: props.period.date_from,
                    checkout: props.period.date_to,
                    treatment: props.treatment,
                    nights: 7,
                  }
                }}
              >
                <a>
                  <span className="no-smartphone">&euro;</span> {prices.n7},-
                </a>
              </Link>
              }
              {!prices.n7 &&  `-`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PriceTable;