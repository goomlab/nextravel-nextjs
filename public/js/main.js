/**
* isMobile
*/
function isMobile() {
  var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
    IS_IOS = IS_IPAD || IS_IPHONE,
    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
    IS_MOBILE = IS_IOS || IS_ANDROID;
  return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
}

/**
* Rellax
*/
// var rellax = null;
// var rellaxHorizontal = null;
// function parallax(className) {
//   if(document.getElementsByClassName(className).length <= 0)
//     return;
  
//   windowWidth = window.innerWidth;
//   if( !rellax && !isMobile() )
//     rellax = new Rellax('.'+className);
//   if( rellax && (isMobile() || windowWidth < 992) )
//     rellax.destroy();
//   if( rellax && !isMobile() && windowWidth >= 992 )
//     rellax.refresh();
// }
// function parallaxHorizontal(className) {
//   if(document.getElementsByClassName(className).length <= 0)
//     return;
  
//   windowWidth = window.innerWidth;
//   if( !rellaxHorizontal && !isMobile() )
//   rellaxHorizontal = new Rellax('.'+className,{
//     vertical: false,
//     horizontal: true
//   });
//   if( rellaxHorizontal && (isMobile() || windowWidth < 992) )
//   rellaxHorizontal.destroy();
//   if( rellaxHorizontal && !isMobile() && windowWidth >= 992 )
//   rellaxHorizontal.refresh();
// }



/**
* Siper
*/
var swipers = [];
function initSwipers() {
  $('.swiper-container').each(function (index, element) {

    if( $(this).hasClass('swiperG0') ) {
      var swiperClass = 'swiperG0-'+index;
      var prevBtnClass = 'prevG0-'+index;
      var nextBtnClass = 'nextG0-'+index;
      var paginationClass = 'paginationG0-'+index;
  
      $(this).addClass(swiperClass);
      // $(this).find('.swiper-button-prev').addClass(prevBtnClass);
      // $(this).find('.swiper-button-next').addClass(nextBtnClass);
      $(this).find('.swiper-pagination').addClass(paginationClass);
  
      var swiper = new Swiper('.'+swiperClass, {
        grubCursor: false,
        simulateTouch : false,
        direction: 'vertical',
        speed: 900,
        // navigation: {
        //   nextEl: 'header .menu .swiper-button-next',
        //   prevEl: 'header .menu .swiper-button-prev',
        // },
        pagination: {
          el: '.'+swiperClass+' .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `
              <span class="${className}">
                <span class="line"></span>
                  <span class="title-wrap">'
                    <span class="title">
                      ${(swiperG0Indexes[index])}
                    </span>
                  </span>
              </span>
            `;
          },
        },
      });
      swipers.push(swiper);
    }
    else if( $(this).hasClass('swiperBookingMonths') ) {
      var swiperClass = 'swiperBookingMonths-'+index;
      var prevBtnClass = 'prevBookingMonths-'+index;
      var nextBtnClass = 'nextBookingMonths-'+index;
  
      $(this).addClass(swiperClass);
      $(this).parent().find('.swiper-button-prev').addClass(prevBtnClass);
      $(this).parent().find('.swiper-button-next').addClass(nextBtnClass);
  
      var swiper = new Swiper('.'+swiperClass, {
        grubCursor: false,
        simulateTouch : false,
        direction: 'horizontal',
        speed: 900,
        slidesPerView: 10,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next.' + nextBtnClass,
          prevEl: '.swiper-button-prev.' + prevBtnClass,
        },
        breakpoints: {
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 30,
          }
        }
      });
      swipers.push(swiper);
    }
    else if( $(this).hasClass('swiperPrices') ) {
      var swiperClass = 'swiperPrices-'+index;
      var prevBtnClass = 'prevPrices-'+index;
      var nextBtnClass = 'nextPrices-'+index;
  
      $(this).addClass(swiperClass);
      $(this).parent().find('.swiper-button-prev').addClass(prevBtnClass);
      $(this).parent().find('.swiper-button-next').addClass(nextBtnClass);
  
      var swiper = new Swiper('.'+swiperClass, {
        grubCursor: false,
        simulateTouch : false,
        direction: 'horizontal',
        speed: 600,
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next.' + nextBtnClass,
          prevEl: '.swiper-button-prev.' + prevBtnClass,
        }
      });
      swipers.push(swiper);
    }
    else {
      return;
    }
  });
}
setTimeout(function(){
  // initSwipers();
}, 1000);



/**
* Header Scroll: primaryHeader
*/
var primaryHeader = (function() {
  var docElem = document.documentElement,
    header = document.querySelector( 'header > #nav-1' ),
    didScroll = false,
    changeHeaderOn = 31;
  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }
  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      $(header).addClass('fixed-top')
      $(header).addClass('navbar-scroll')
    }
    else {
      $(header).removeClass('fixed-top')
      $(header).removeClass('navbar-scroll')
    }
    didScroll = false;
  }
  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }
  init();
})();



$('.prices-box .nav-item.nav-link').click(function(){
  $(this).parent().parent().find('.nav-item.nav-link').removeClass('active');
  $(this).addClass('active');
  
  var tabId = $(this).attr('aria-controls');
  $(this).parent().parent().parent().parent().parent().parent().find('.tab-pane').removeClass('active');
  $(this).parent().parent().parent().parent().parent().parent().find('.tab-pane').removeClass('show');
  $('#'+tabId).addClass('active');
  $('#'+tabId).addClass('show');
});


/**
* Booking DatePicker
*/

// $.fn.datepicker.dates['en'] = {
//   days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//   daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//   daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
//   months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//   monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//   today: "Today",
//   clear: "Clear",
//   format: "mm/dd/yyyy",
//   titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
//   weekStart: 0
// };
// $.fn.datepicker.dates['it'] = {
//   days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovadì", "Venerdì", "Sabato"],
//   daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
//   daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
//   months: ["Gennio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
//   monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
//   today: "Oggi",
//   clear: "Cancella",
//   format: "dd/mm/yyyy",
//   titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
//   weekStart: 1
// };
// function myDatePicker(dateFormat){
//   if( !dateFormat ) {
//     dateFormat = 'dd/mm/yyyy'
//   }
//   $('.input-date').datepicker({
//     format: dateFormat,
//     todayBtn: "linked",
//     keyboardNavigation: false,
//     forceParse: true,
//     calendarWeeks: false,
//     autoclose: true,
//     autoApply: true,
//     language: 'it'
//   });
// }
// function myDatePicker_update(){
//   $('.input-date input').datepicker('update');
// }

/**
* Booking DateRangePicker
*/
// var daterangepicker_locales = {
//   it: {
//     "format": 'DD/MM/YYYY',
//     "applyLabel": "Applica",
//     "cancelLabel": "Cancella",
//     "fromLabel": "Da",
//     "toLabel": "A",
//     "customRangeLabel": "Custom",
//     "daysOfWeek": [
//         "Dom",
//         "Lun",
//         "Mar",
//         "Mer",
//         "Gio",
//         "Ven",
//         "Sab"
//     ],
//     "monthNames": [
//       "Gennaio",
//       "Febbraio",
//       "Marzo",
//       "Aprile",
//       "Maggio",
//       "Giugno",
//       "Luglio",
//       "Agosto",
//       "Septtembre",
//       "Ottobre",
//       "Novembre",
//       "Dicembre"
//     ],
//     "firstDay": 1
//   }
// }
// function myDateRangePicker(dateFormat){
//   // if( !dateFormat ) {
//   //   dateFormat = 'dd/mm/yyyy'
//   // }
//   $('.booking_dateRangePicker').daterangepicker({
//     // startDate: moment().startOf('hour'),
//     // endDate: moment().startOf('hour').add(32, 'hour'),
//     locale: daterangepicker_locales.it,
//     minDate: moment().add(1, 'days'),
//     autoApply: true,
//     autoUpdateInput: false
//   });
// }
// $('.booking_dateRangePicker').on('apply.daterangepicker', function(ev, picker) {
//   var checkin = $(this).parent().find('input[name="checkin"]');
//   var checkout = $(this).parent().find('input[name="checkout"]');
//   $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
//   $(checkin).val(picker.startDate.format('YYYY-MM-DD'));
//   $(checkout).val(picker.endDate.format('YYYY-MM-DD'));
// });
// $('.booking_dateRangePicker').on('cancel.daterangepicker', function(ev, picker) {
//   var checkin = $(this).parent().find('input[name="checkin"]');
//   var checkout = $(this).parent().find('input[name="checkout"]');
//   $(this).val("");
//   $(checkin).val("");
//   $(checkout).val("");
// });


// /****/
// $(window).on('load resize', function(){
//   myDateRangePicker();
//   // $('.booking-form .custom-select2').select2({
//   //   placeholder: "Persone",
//   //   allowClear: true,
//   //   minimumResultsForSearch: -1,
//   //   dropdownParent: $('.booking-form-select2-wrap')
//   // });
// });






// /**
//  * Funzioni per calcolare il preventivo e inviare la richiesta
//  */

// /**
//  * RoomBox: Add
//  */
// function roomBox_add() {
//   var _html = [];
//   var count = parseInt( $('#roomBox').attr('data-rooms') );
//   count++;

//   var _htmlAdultOptions = [];
//   _htmlAdultOptions += `<option value="0">Adulti</option>`;
//   for( var j = 1; j <= 4; j++) {
//     var _selected = '';
//     // if( j==2 )
//     //   _selected = 'selected';
//     _htmlAdultOptions += `<option value="${j}" ${_selected}>${j}</option>`;
//   }

//   var _htmlChildrenOptions = [];
//   _htmlChildrenOptions += `<option value="0">Bambini</option>`;
//   for( var j = 1; j <= 4; j++) {
//     _htmlChildrenOptions += `<option value="${j}">${j}</option>`;
//   }

//   var _html = `
//     <div class="row">
//       <div class="col-lg-3">
//         <div class="form-group">
//           <label>camera <span class="room-number">${count}</span></label>
//           <button type="button" class="btn btn-danger btn-sm roomBox_buttonDelete" onclick="roomBox_setButtonDelete(this)"><i class="fas fa-times"></i></button>
//         </div>
//       </div>
//       <div class="col-lg-2">
//         <div class="form-group">
//           <select class="custom-select" id="adults_${count}" name="adults[]">
//             ${_htmlAdultOptions}
//           </select>
//         </div>
//       </div>
//       <div class="col-lg-2">
//         <div class="form-group">
//           <select class="custom-select" id="childrens_${count}" name="childrens[]" onchange="roomBox_addChildren(this)" data-childrens="0">
//             ${_htmlChildrenOptions}
//           </select>
//         </div>
//       </div>
//       <div class="col-lg-4">
//         <div class="row table_childrenAges">
//         </div>
//       </div>
//     </div>
//   `;
  
//   // console.log('render', _html);
//   $('#roomBox').attr('data-rooms', count);
//   $('#roomBox').append(_html);

//   // loadPrice();
//   }

// $('#roomBox_btnAdd').click(function() {
//   roomBox_add();
// });

// /**
//  * RoomBox: Delete
//  */
// function roomBox_setButtonDelete(elem) {
//   $(elem).parent().parent().parent().remove();
//   $('#roomBox').attr('data-rooms', (parseInt($('#roomBox').attr('data-rooms')) -1) );
//   roomBox_resetRoomNumbers();
//   // loadPrice();
// }
// function roomBox_resetRoomNumbers() {
//   var count = 2;
//   $('#roomBox .room-number').each(function(){
//     $(this).html(count);
//       count++;
//   });
//   var count = 1;
//   $('#roomBox select[name="adults[]"]').each(function(){
//     $(this).attr('id', 'adults_'+count);
//     count++;
//   });
//   var count = 1;
//   $('#roomBox select[name="childrens[]"]').each(function(){
//     $(this).attr('id', 'childrens_'+count);
//     count++;
//   });
// }

// /**
// * RoomBox: Add Ages
// */
// function roomBox_addChildren(elem) {
//   var prev = parseInt($(elem).attr('data-childrens'));
//   var count = parseInt($(elem).val());

//   if( count > prev ) {
//     var ageOptions = [];
//     ageOptions += `<option value="">Età</option>`;
//     for( var j = 0; j <= 12; j++) {
//       ageOptions += `<option value="${j}">${j}</option>`;
//     }

//     var _html = [];
//     for( var i = prev; i < count; i++ ) {
//       _html += `
//         <div class="col-lg-3">
//         <div class="form-group">
//         <select class="custom-select" name="childrens_age[]">
//           ${ageOptions}
//         </select>
//         </div>
//         </div>`;
//     }
    
//     // console.log('html', _html);  
//     $(elem).parent().parent().parent().find('.table_childrenAges').append(_html);
//   } else {
//     for( var j = prev; j > count; j-- ) {
//       $(elem).parent().parent().parent().find('.table_childrenAges').children().last().remove();
//     }
//   }

//   $(elem).attr('data-childrens', count);
// }