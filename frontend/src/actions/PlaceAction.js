import { ActionTypes } from 'const';

class PlaceAction {

    static setListPlaces({ listPlaces }) {
        return {
            type: ActionTypes.SET_LIST_PLACES,
            listPlaces,
        }
    }
}

export default PlaceAction;