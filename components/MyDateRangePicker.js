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

  React.useEffect(() => {
    setState({
      ...state,
      startDate: (props.startDate) ? moment(props.startDate, "YYYY-MM-DD") : moment(),
      endDate: (props.endDate) ? moment(props.endDate, "YYYY-MM-DD") : moment().add('2 days')
    })
  }, [props])

  const onChange = (e) => {
    // non fare nulla
    console.log(e.target.value);
  }

  return (
    <React.Fragment>
      <DateRangePicker
        minDate={moment().format('YYYY-MM-DD')}
        startDate={state.startDate}
        endDate={state.endDate}
        autoApply={true}
        onApply={(event, picker)=>onApply(event, picker)}
        >
        <input 
          type="text" className="form-control" id="" name="" placeholder="Checkin" 
          value={state.startDate.format('DD/MM/YYYY') + ' - ' + state.endDate.format('DD/MM/YYYY') || ''} 
          onChange={(e) => onChange(e)}
        />
      </DateRangePicker>
    </React.Fragment>
  );
}

export default MyDateRangePicker;