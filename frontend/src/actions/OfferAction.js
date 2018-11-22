import { ActionTypes } from 'const';

class OfferAction {

    static setListOffers({ listOffers }) {
        return {
            type: ActionTypes.SET_LIST_OFFERS,
            listOffers,
        }
    }
}

export default OfferAction;