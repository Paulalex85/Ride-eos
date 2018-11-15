import { ActionTypes } from 'const';

const initialState = {
    listPlaces: [],
    placeKey: undefined,
    country: "",
    zipCode: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LIST_PLACES: {
            let listJSON = action.listPlaces || initialState.listPlaces;
            let listObject = [];
            for (let i = 0; i < listJSON.rows.length; i++) {
                const element = listJSON.rows[i];
                let place = {
                    placeKey: element.placeKey.toString() || initialState.placeKey,
                    country: element.country || initialState.country,
                    zipCode: element.zipCode || initialState.zipCode,
                }
                listObject.push(place);
            }
            return Object.assign({}, state, {
                listPlaces: listObject
            });
        }

        default:
            return state;
    }
}