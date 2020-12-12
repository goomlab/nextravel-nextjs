export const alertMessageConsts = {
	ALERT_MESSAGE_SUCCESS: 'ALERT_MESSAGE_SUCCESS',
	ALERT_MESSAGE_ERROR: 'ALERT_MESSAGE_ERROR',
	ALERT_MESSAGE_WARNING: 'ALERT_MESSAGE_WARNING'
}



class AlertMessageAction {
	construct() {
		this.alertMessageSuccess = this.alertMessageSuccess.bind(this);
		this.alertMessageError = this.alertMessageError.bind(this);
		this.alertMessageWarning = this.alertMessageWarning.bind(this);
	}

	static alertMessageSuccess(message) {
		return {
			type: alertMessageConsts.ALERT_MESSAGE_SUCCESS,
			message: message,
		}
	}
	static alertMessageError(message) {
		return {
			type: alertMessageConsts.ALERT_MESSAGE_ERROR,
			message: message,
		}
	}
	static alertMessageWarning(message) {
		return {
			type: alertMessageConsts.ALERT_MESSAGE_WARNING,
			message: message,
		}
	}

	static reset() {
		return {
			type: alertMessageConsts.ALERT_MESSAGE_SUCCESS,
			message: "",
		}
	}
}
export default AlertMessageAction;