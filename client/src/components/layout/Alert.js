import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.alertType === 'danger' ? (
        <i className="fas fa-exclamation-triangle" />
      ) : (
        <i className="fas fa-check-circle" />
      )}
      {' ' + alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    alerts: state.alert
  };
};

export default connect(mapStateToProps)(Alert);
