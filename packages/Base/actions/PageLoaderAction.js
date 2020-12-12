export const pageLoaderConsts = {
	SHOW: 'PAGE_LOADER_SHOW',
	HIDE: 'PAGE_LOADER_HIDE'
}



class PageLoaderActions {
	construct() {
		// this.alertMessageSuccess = this.alertMessageSuccess.bind(this);
		// this.alertMessageError = this.alertMessageError.bind(this);
		// this.alertMessageWarning = this.alertMessageWarning.bind(this);
	}

	static show() {
		return {
			type: pageLoaderConsts.SHOW,
			display: "block"
		}
	}
	static hide() {
		return {
			type: pageLoaderConsts.HIDE,
			display: "none"
		}
  }
}
export default PageLoaderActions;