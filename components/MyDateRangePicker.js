import React from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const MyDateRangePicker = (props) => {

  const [state, setState] = React.useState({
    startDate: (props.startDate) ? moment(props.startDate, "YYYY-MM-DD") : moment(),
    endDate: (props.endDate) ? moment(props.endDate, "YYYY-MM-DD") : moment().add('2 days')
  });

  const onApply = (event, picker) => {
    props.onChange(picker.startDate, picker.endDate);
    setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    })
  }

  return (
    <React.Fragment>
      <DateRangePicker
        minDate={state.startDate}
        startDate={state.startDate}
        endDate={state.endDate}
        autoApply={true}
        onApply={(event, picker)=>onApply(event, picker)}
        >
        <input 
          type="text" className="form-control" id="" name="" placeholder="Checkin" 
          defaultValue={state.startDate.format('DD/MM/YYYY') + ' - ' + state.endDate.format('DD/MM/YYYY') || ''} 
        />
      </DateRangePicker>
    </React.Fragment>
  );
}

export default MyDateRangePicker;