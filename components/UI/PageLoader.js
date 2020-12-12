import React from 'react';
import { connect } from 'react-redux';

// import spinner from 'spinner.gif';

class PageLoader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="pageloader" style={{
        display: this.props.display,
        opacity: '0.9',
        msFilter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=90)",
        filter: 'alpha(opacity=90)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundImage: 'url('+spinner+')',
        backgroundImage: 'url(/images/spinner.gif)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '50px',
        backgroundColor: '#384044',
        zIndex: '100000000',
        textAlign: 'center'
        }}>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		type: state.pageLoader.type,
    display: state.pageLoader.display
	}
}

export default connect(mapStateToProps)(PageLoader);