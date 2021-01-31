import React from "react";
import moment from "moment";
import Link from "next/link";

import BaseService from "~/packages/BaseService";

import DateRangePicker from 'react-bootstrap-daterangepicker';

import SwiperCore, { Swiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BookingSearchBox = props => {
  const swiperBookingMonths = React.useRef(null)
  const swiperBookingHolidays = React.useRef(null)

  const defaultCheckin = moment().add(1, 'days').format('YYYY-MM-DD');
  const defaultCheckout = moment().add(7, 'days').format('YYYY-MM-DD');
  const defaultCheckinFormatted = moment().add(1, 'days').format('DD/MM/YYYY');
  const defaultCheckoutFormatted = moment().add(7, 'days').format('DD/MM/YYYY');

  const initCheckin = () => {
    if( props.query && props.query.checkin != undefined && props.query.checkin != "" ){
      return props.query.checkin
    }
    if( props.searchParams && props.searchParams.checkin != undefined && props.searchParams.checkin != "" ){
      return props.searchParams.checkin
    }
    return defaultCheckin;
  }

  const initCheckout = () => {
    if( props.query && props.query.checkout != undefined && props.query.checkout != "" ){
      return props.query.checkout
    }
    if( props.searchParams && props.searchParams.checkout != undefined && props.searchParams.checkout != "" ){
      return props.searchParams.checkout
    }
    return defaultCheckout;
  }

  const [state, setState] = React.useState({
    loc_id: (props.query && props.query.loc_id) || '',
    category_id: (props.query && props.query.category_id) || '',
    checkin: initCheckin(),
    checkout: initCheckout(),
    nights: (props.query && props.query.nights) || ''
  });

  const [params, setParams] = React.useState({
    locs: [],
    hotelCategories: [],
    months: [],
    specials: []
  })


  React.useEffect(() => {
    // swipers
    if( props.full ) {
      swiperBookingMonths.current = new Swiper('#swiperBookingMonths', {
        grubCursor: false,
        simulateTouch : false,
        direction: 'horizontal',
        speed: 600,
        slidesPerView: 10,
        spaceBetween: 30,
        breakpoints: {
          1: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 10,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '#swiperBookingMonths-button-next',
          prevEl: '#swiperBookingMonths-button-prev',
        }
      })

      // swiperBookingHolidays.current = new Swiper('#swiperBookingHolidays', {
      //   grubCursor: false,
      //   simulateTouch : false,
      //   direction: 'horizontal',
      //   speed: 600,
      //   slidesPerView: 10,
      //   spaceBetween: 30,
      //   navigation: {
      //     nextEl: '#swiperBookingHolidays-button-next',
      //     prevEl: '#swiperBookingHolidays-button-prev',
      //   }
      // })
    }

    // init booking
    let baseService = new BaseService();
    baseService.initApp()
    .then(response => {
      setParams({
        locs: response.locs || [],
        hotelCategories: response.hotelCategories || [],
        months: response.filterPages.months || [],
        specials: response.filterPages.specials || [],
      })
      
      if( props.full && swiperBookingMonths && swiperBookingMonths.current )
        swiperBookingMonths.current.update()
      // if( props.full && swiperBookingHolidays && swiperBookingHolidays.current )
      //   swiperBookingHolidays.current.update()
    })
    .catch(error => {
      console.log('error', error)
    });

    // setState({
    //   loc_id: (props.query && props.query.loc_id) || null,
    //   category_id: (props.query && props.query.category_id) || null,
    //   checkin: (props.query && props.query.checkin) || null,
    //   checkout: (props.query && props.query.checkout) || null,
    //   nights: (props.query && props.query.nights) || null
    // })
  },[])


  React.useEffect(() => {
    if( props.full ) {
      swiperBookingHolidays.current = new Swiper('#swiperBookingHolidays', {
        grubCursor: false,
        simulateTouch : false,
        direction: 'horizontal',
        speed: 600,
        slidesPerView: 10,
        spaceBetween: 30,
        breakpoints: {
          1: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 10,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 10,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '#swiperBookingHolidays-button-next',
          prevEl: '#swiperBookingHolidays-button-prev',
        }
      })
    }
  }, [params])


  // const checkinFormatted = (props.query && props.query.checkin && props.query.checkin != "") ? moment(props.query.checkin, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckinFormatted;
  // const checkoutFormatted = (props.query && props.query.checkout && props.query.checkout != "") ? moment(props.query.checkout, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckoutFormatted;
  const checkinFormatted = (state.checkin != "" && state.checkin != undefined) ? moment(state.checkin, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckinFormatted;
  const checkoutFormatted = (state.checkout != "" && state.checkout != undefined) ? moment(state.checkout, 'YYYY-MM-DD').format('DD/MM/YYYY') : defaultCheckoutFormatted;

  const getMonths = () => {
    // mesi
    let months = [];
    moment.locale('it');
    var now = moment();
    let i = 0;
    do {
      months.push(
        <Link href={`${process.env.filterpages_path}/[slug]`} as={`${process.env.filterpages_path}/${now.format('MMMM').toLowerCase()}`}>
          <a>
            <strong>{now.format('MMM')}</strong> {now.format('YY')}
          </a>
        </Link>
      );
      i++;
      now.add(1, 'months');
    }while(i<12);
    
    return months;
  }

  const onChange = (e) => {
    let newState = Object.assign({}, state);
    newState[e.target.name] = e.target.value;
    setState({
      ...newState
    })
  }

  const onDatePickerApply = (event, picker) => {
    setState({
      ...state,
      checkin: picker.startDate.format('YYYY-MM-DD'),
      checkout: picker.endDate.format('YYYY-MM-DD'),
    })
  }

  const onSumbit = (e) => {
    e.preventDefault();
    var url = `${process.env.accommodations_path}?`;
    for(let [key, value] of Object.entries(state))
      url += key + '=' + value + '&';
    window.location.href = url;
  }

  const months = getMonths();
  return (
    <section className="booking-box">
      <div className="container">
        <form className="booking-form">
          <div className="row">
            <div className="col-lg-3">
              <select className="custom-select" name="loc_id" id="loc_id" onChange={(e)=>onChange(e)} value={state.loc_id || ''}>
                <option value="">Località</option>
                {params.locs && params.locs.map( (obj, index) => 
                  <option key={index} value={obj.id}>{obj.name}</option>
                )}
              </select>
            </div>
            <div className="col-lg-3">
              <select className="custom-select" name="category_id" id="category_id" onChange={(e)=>onChange(e)} value={state.category_id || ''}>
                <option value="">Struttura</option>
                {params.hotelCategories && params.hotelCategories.map( (obj, index) => 
                  <option key={index} value={obj.id}>{obj.name}</option>
                )}
              </select>
            </div>

            <div className="col-lg-3">
              <DateRangePicker
                initialSettings={{
                  // startDate: state.checkinFormatted,
                  // endDate: state.checkoutFormatted,
                  startDate: moment(state.checkin, 'YYYY-MM-DD'),
                  endDate: moment(state.checkout, 'YYYY-MM-DD'),
                  autoApply: true,
                  startDate: moment(),
                  locale: {
                    'cancelLabel': 'Cancella',
                    'applyLabel': 'Applica'
                  } 
                }}
                onApply={onDatePickerApply}
                style={{display:'block', width: '100%'}}
              >
                <input
                  className="form-control"
                  id="booking_dateRangePicker"
                  type="text"
                  placeholder="Checkin"
                  value={(checkinFormatted != "" && checkoutFormatted != "") ? (`${checkinFormatted} - ${checkoutFormatted}`) : ''}
                  onChange={(e) => {}}
                />
              </DateRangePicker>
              <input type="hidden" name="checkin" id="checkin" onChange={(e)=>onChange(e)} value={state.checkin || ''}/>
              <input type="hidden" name="checkout" id="checkout" onChange={(e)=>onChange(e)} value={state.checkout || ''}/>
            </div>
            <div className="col-lg-2">
              <select className="custom-select" name="nights" id="nights" onChange={(e)=>onChange(e)} value={state.nights || ''}>
                <option value="">Notti</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="col-lg-1">
              <button type="submit" className="btn btn-yellow" onClick={(e)=>onSumbit(e)}>
                Cerca
              </button>
            </div>
          </div>
        </form>

        {props.full &&
          <React.Fragment>
            <div className="booking-months">
              <div id="swiperBookingMonths" className="swiper-container swiperBookingMonths">
                <div className="swiper-wrapper">
                  {months.map( (obj, index) => 
                    <div className="swiper-slide" key={index}>
                      {obj}
                    </div>
                  )}
                </div>
              </div>
              <div id="swiperBookingMonths-button-prev" className="swiper-button-prev"></div>
              <div id="swiperBookingMonths-button-next" className="swiper-button-next"></div>
            </div>
            
            {params.specials && params.specials.length > 0 &&
            <div className="booking-holidays">
              <div id="swiperBookingHolidays" className="swiper-container swiperBookingMonths">
                <div className="swiper-wrapper">
                  {params.specials && params.specials.map( (obj, index) => 
                    <div className="swiper-slide" key={index}>
                      <Link href={`${process.env.filterpages_path}/[slug]`} as={`${process.env.filterpages_path}/${obj.slug.it}`}>
                        <a>
                          {obj.title.it}
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div id="swiperBookingHolidays-button-prev" className="swiper-button-prev"></div>
              <div id="swiperBookingHolidays-button-next" className="swiper-button-next"></div>
            </div>
            }
          </React.Fragment>
        }
      </div>
    </section>
  );
};

export default BookingSearchBox;