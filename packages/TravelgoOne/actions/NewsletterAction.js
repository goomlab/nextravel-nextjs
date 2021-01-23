import BaseAction from '~/packages/BaseAction'
import PageLoaderAction from '~/packages/Base/actions/PageLoaderAction'
import AlertMessageAction from '~/packages/Base/actions/AlertMessageAction'
import NewsletterService from '../services/NewsletterService'

export const newsletterConsts = {
  SET_ITEM: 'NEWSLETTER_SET_ITEM',
  RESET_ITEM: 'NEWSLETTER_RESET_ITEM',
  SENDINBLUE_CREATE_CONTACT: 'NEWSLETTER_SENDINBLUE_CREATE_CONTACT',
}

export default class NewsletterAction extends BaseAction {
  constructor() {
		super();
		this.service = new NewsletterService();
		this.consts = newsletterConsts;
  }



  setItem(item) {
    return (dispatch) => {
      dispatch({
        type: this.consts.SET_ITEM,
        item: item
      })
    }
  }

  resetItem() {
    return (dispatch) => {
      dispatch({
        type: this.consts.RESET_ITEM,
      })
    }
  }

  sendinblue_createContact(params) {
    return (dispatch) => {
      dispatch(PageLoaderAction.show())
      this.service.sendinblue_createContact(params)
      .then(response => {
        dispatch(this.resetItem())
        dispatch(AlertMessageAction.alertMessageSuccess('Ti ringraziamo per esserti registrato alla newsletter. Ti terremo aggiornati sulle nostre offerte.'))
        dispatch(PageLoaderAction.hide())
      })
      .catch(error => {
        dispatch(AlertMessageAction.alertMessageError(error.response.data.meta.message))
        dispatch(PageLoaderAction.hide())
      })
    }
  }
}