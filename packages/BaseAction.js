// import AlertMessageActions from 'actions/AlertMessageActions';
// import PageLoaderActions from 'actions/PageLoaderActions';

export default class BaseAction {

	constructor() {
		this.service = null;
		this.consts = null;
		this.redirect = null;
	}


	all( filter, count ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.search(filter, count).then( response => {
				dispatch({
					type: this.consts.SEARCHED,
					items: response.data.data,
					totItems: response.data.meta.total
				});
				// dispatch(PageLoaderActions.hide());
			}).catch( error => {
				// dispatch(PageLoaderActions.hide());
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
			});
		}
	}

	get( id ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.load(id)
			.then( response => {
				dispatch({
					type: this.consts.LOADED,
					item: response.data.data
				});
				// dispatch(PageLoaderActions.hide());
			})
			.catch( error => {
				// dispatch(PageLoaderActions.hide());
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
			});
		}
	}

	createPost( postData, ownProps ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service
			.createPost(postData).then( response => {
				dispatch({
					type: this.consts.CREATED,
					item: response.data.data
				});
				// dispatch(PageLoaderActions.hide());
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
				
				// let postype = this.getQueryString(ownProps.location, 'post_type');
				// let redirect = this.redirect + '/' + response.data.data.id + ((postype) ? '?post_type='+postype : '');
				// ownProps.history.push(redirect);
			})
			.catch( error => {
				// dispatch(PageLoaderActions.hide());
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
			});
		}
	}

	create( postData, ownProps ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service
			.create(postData).then( response => {
				dispatch({
					type: this.consts.CREATED,
					item: response.data.data
				});
				// dispatch(PageLoaderActions.hide());
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
				
				// let postype = this.getQueryString(ownProps.location, 'post_type');
				// let redirect = this.redirect + '/' + response.data.data.id + ((postype) ? '?post_type='+postype : '');
				// ownProps.history.push(redirect);
			})
			.catch( error => {
				// dispatch(PageLoaderActions.hide());
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
			});
		}
	}

	updatePost( id, postData, ownProps ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.updatePost(id, postData)
			.then( response => {
				dispatch({
					type: this.consts.UPDATED,
					item: response.data.data,
				});
				// dispatch(PageLoaderActions.hide());
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
				
				// let postype = this.getQueryString(ownProps.location, 'post_type');
				// let redirect = this.redirect + '/' + response.data.item.id + ((postype) ? '?post_type='+postype : '');
				// ownProps.history.push(redirect);
				dispatch(this.load(id));
			})
			.catch( error => {
				// dispatch(PageLoaderActions.hide());
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
			});
		}
	}

	update( id, postData, ownProps ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.update(id, postData)
			.then( response => {
				dispatch({
					type: this.consts.UPDATED,
					item: response.data.data,
				});
				// dispatch(PageLoaderActions.hide());
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
				// dispatch(this.load(id));
			})
			.catch( error => {
				// dispatch(PageLoaderActions.hide());
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
			});
		}
	}
	
	remove( id ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.remove(id)
			.then( response => {
				dispatch({
					type: this.consts.REMOVED,
					// item: response.data.item
				});
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.message));
				// dispatch(PageLoaderActions.hide());
			})
			.catch( error => {
				// dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// dispatch(PageLoaderActions.hide());
			});
		}
	}

	removeOnList( id, searchParams, searchCount ) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.remove(id)
			.then( response => {
				dispatch({
					type: this.consts.REMOVED,
					// item: response.data.item
				});
				// dispatch(this.search(searchParams, searchCount));
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.message));
				// dispatch(PageLoaderActions.hide());
			})
			.catch( error => {
				// dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// dispatch(PageLoaderActions.hide());
			});
		}
	}
	
	updateFields( id, postData, searchParams, searchCount) {
		return (dispatch) => {
			// dispatch(PageLoaderActions.show());
			this.service.updateFields(id, postData)
			.then( response => {
				dispatch({
					type: this.consts.UPDATED,
					item: response.data.data
				});
				// dispatch(this.search(searchParams, searchCount));
				// dispatch(AlertMessageActions.alertMessageSuccess(response.data.meta.message));
				// dispatch(PageLoaderActions.hide());
			})
			.catch( error => {
				// if( error.response && error.response.data && error.response.data.meta )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.meta.message));
				// else if( error.response && error.response.data && error.response.data.message )
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.response.data.message));
				// else
				// 	dispatch(AlertMessageActions.alertMessageError('Errore: ' + error.status));
				// dispatch(PageLoaderActions.hide());
			});
		}
	}
}