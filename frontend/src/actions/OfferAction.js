import { ActionTypes } from 'const';

class OfferAction {

    static setListOffers({ listOffers }) {
        return {
            type: ActionTypes.SET_LIST_OFFERS,
            listOffers,
        }
    }

    static setOffer({ listOffers, offer }) {
        return {
            type: ActionTypes.SET_OFFER,
            listOffers,
            offer,
        }
    }
}

export default OfferAction;