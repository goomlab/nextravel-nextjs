import React from "react";
import moment from 'moment';
import Link from "next/link";
import ReactPaginate from 'react-paginate';

import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import PriceTable from './PriceTable';


const NavTab = props => {
  const index = props.index;
  let dateFrom = moment(props.period.date_from, 'YYYY-MM-DD');
  let dateTo = moment(props.period.date_to, 'YYYY-MM-DD');

  return (
    <div key={index} className={`swiper-slide swiper-slide-${props.hotel.id}`}>
      <a
        className={`nav-item nav-link ${(index == props.activeTab) ? 'active' : ''}`}
        id={`nav-${props.hotel.id}-period-${index}-tab`}
        data-toggle="tab"
        href={`#nav-${props.hotel.id}-period-${index}`}
        role="tab"
        aria-controls={`nav-${props.hotel.id}-period-${index}`}
        aria-selected="true"
        onClick={() => props.onActivateTab(index)}
      >
        <span>
          {dateFrom.format('DD/MM')}
          <br />
          {dateTo.format('DD/MM')}
        </span>
        <i className="ico ico-arrow-curved"></i>
      </a>
    </div>
  )
}



const NavContent = props => {
  const index = props.index;

  let priceList = {};
  // if( !props.period.viewPeriodPrices || props.period.viewPeriodPrices.length <= 0)
  //   return;
  for (const [roomTypeName, roomTypeContent] of Object.entries(props.period.viewPeriodPrices)){
    priceList[roomTypeName] = {};

    if( roomTypeContent.prices ){
      for (const [key, treatmentObj] of Object.entries(roomTypeContent.prices)) {
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
    }
  }




  return (
    <div
      className={`tab-pane fade ${(index == 0) ? 'show active' : ''}`}
      id={`nav-${props.hotel.id}-period-${index}`}
      role="tabpanel"
      aria-labelledby={`nav-${props.hotel.id}-period-${index}-tab`}
    >
      {/* {priceList && Object.entries(priceList).map( ([roomType, treatments], index) => 
        <React.Fragment key={index}>
          {treatments && Object.entries(treatments).map( ([treatment, prices], index2) => 
            <React.Fragment key={index2}>
              <div><span style={{color: '#4fbaad'}}>{roomType}</span></div>
              <PriceTable 
                // key={index2}
                index={index}
                treatment={treatment}
                prices={prices}
                hotel={props.hotel}
                period={props.period}
                priceTableLink={true}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      )} */}
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
    </div>
  )
}



const HotelArchiveItem = props => {
  const hotel = props.hotel;
  const swiperPrices = React.useRef(null)
  
  let stars = [];
  for( let i = 1; i <= parseInt(hotel.stars); i++ ) {
    stars.push(<i key={i} className="ico ico-star"></i>);
  }

  const [activeTab, setActiveTab] = React.useState(0)

  const onActivateTab = (index) => {
    setActiveTab(index)
  }

  React.useEffect(() => {
    swiperPrices.current = new Swiper(`#swiperPrices-${hotel.id}`, {
      grubCursor: false,
      simulateTouch : false,
      direction: 'horizontal',
      //speed: 600,
      // slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        1: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: `#swiperPrices-${hotel.id}-button-next`,
        prevEl: `#swiperPrices-${hotel.id}-button-prev`,
      }
    })
  }, [])


  // React.useEffect(() => {
  //   if( swiperPrices && swiperPrices.current )
  //     swiperPrices.current.update()
  // }, [activeTab])

  
  return (
    <div className="hotel-list-item">
      <a href={`${process.env.accommodations_path}/${props.hotel.slug.it}`} rel="nofollow">
        <div className="topline">
          <div className="title mr-auto">
            {hotel.name}
          </div>
          <div className="stars ml-auto">
            {stars}
          </div>
        </div>
      </a>
      <a href={`${process.env.accommodations_path}/${props.hotel.slug.it}`} rel="nofollow">
        <figure className="img-bgas">
          <img
            src={(hotel.media && hotel.media.gallery && hotel.media.gallery[0]) ? hotel.media.gallery[0].url : 'default'}
            alt={hotel.media && hotel.media.gallery && hotel.media.gallery[0] && hotel.media.gallery[0].name} 
          />
        </figure>
      </a>
      <div className="prices-box">
        {hotel.rateplanPeriods && hotel.rateplanPeriods.length > 0 &&
        <>
        <nav style={{width: "100% !important"}}>
          <div className="nav nav-tabs" id="nav-tab-1" role="tablist" style={{width: "100% !important"}}>
            <div id={`swiperPrices-${hotel.id}`} className="swiper-container swiperPrices" style={{width: "100% !important"}}>
              <div className="swiper-wrapper" style={{width: "100% !important"}}>
                {hotel.rateplanPeriods.map((period, index) => 
                  <NavTab 
                    key={index}
                    index={index}
                    period={period}
                    hotel={hotel}
                    activeTab={activeTab}
                    onActivateTab={() => onActivateTab(index)}
                  />
                )}
              </div>
            </div>
            <div id={`swiperPrices-${hotel.id}-button-prev`} className="swiper-button-prev"></div>
            <div id={`swiperPrices-${hotel.id}-button-next`} className="swiper-button-next"></div>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent-1">
          {hotel.rateplanPeriods.map((period, index) => 
            <NavContent 
              key={index}
              index={index}
              hotel={hotel}
              period={period}
              />
          )}
        </div>
        </>
        }
        {!hotel.rateplanPeriods || hotel.rateplanPeriods.length <= 0 &&
        <div style={{height: 70}}></div>
        }
        <div className="details">
          <div className="row">
            <div className="col-4">
              <div className="description">
                <span className="bold">POSIZIONE</span>
                <br />
                {hotel.details.address}
                <br />
                {hotel.details.zip_code} - {hotel.details.city}
                <br />
                —<br />
                <div dangerouslySetInnerHTML={{ __html: hotel.description_near.it }} />
              </div>
            </div>
            <div className="col-8">
              <ul className="hotel-service-list">
                {hotel.incServices && hotel.incServices.length > 0 && hotel.incServices.map( (obj, index) => 
                <li key={index}>
                  <span>
                    {/* ico */}
                    {/* <i className="ico ico-childrens"></i> */}
                    {obj.name}
                  </span>
                </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomline">
          <div className="row">
            <div className="col-8">
              <div className="line"></div>
            </div>
            <div className="col-4">
              <Link 
                as={`${process.env.accommodations_path}/${props.hotel.slug.it}`} 
                href={{pathname: `${process.env.accommodations_path}/[accommodition]`}}
              >
                <a className="goto">
                  Visualizza la struttura
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const HotelPagination = props => {
  const [currPage, setCurrPage] = React.useState(0);

  React.useEffect(() => {
    if(props.meta){
      setCurrPage(parseInt(props.meta.current_page) - 1)
    }
  },[]);

  const handlePageClick = (e) => {
    props.filter.page = e.selected + 1;

    let stringa = '?';
    for( let i in props.filter )
      stringa += `${i}=${props.filter[i]}&`;

    window.location.href = window.location.pathname + stringa;
  };

  if(props.meta){
    return(
      <ReactPaginate
        forcePage={currPage}
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={props.meta.last_page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(e) => handlePageClick(e)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    )
  }
  return ''
}


const HotelArchive = props => {
  return (
    <section>
      <div className="container">
        {props.hotels && props.hotels.length > 0 &&
          <>
            <div className="row">
              {props.hotels.map( (hotel, index) => 
              <div key={index} className="col-md-6">
                <HotelArchiveItem hotel={hotel} />
              </div>
              )}
            </div>
            <HotelPagination {...props} />
          </>
        }
        {!props.hotels || props.hotels.length <= 0 &&
          <div>Nessun risultato</div>
        }
      </div>
    </section>
  );
};

export default HotelArchive;