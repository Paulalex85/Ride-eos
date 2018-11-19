import { ActionTypes } from 'const';

const initialState = {
    listAssignments: [],
    assignmentKey: undefined,
    placeKey: undefined,
    place: { country: '', zipCode: '' },
    endAssignment: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_LIST_ASSIGNMENTS: {
            let listJSON = action.listAssignments || initialState.listAssignments;
            let listObject = [];
            for (let i = 0; i < listJSON.rows.length; i++) {
                const element = listJSON.rows[i];
                let assignment = {
                    assignmentKey: element.assignmentKey.toString() || initialState.assignmentKey,
                    placeKey: element.placeKey.toString() || initialState.placeKey,
                    place: element.place || initialState.place,
                    endAssignment: new Date(element.endAssignment + "Z") || initialState.endAssignment,
                }
                listObject.push(assignment);
            }
            return Object.assign({}, state, {
                listAssignments: listObject
            });
        }
        case ActionTypes.SET_ASSIGNMENT: {
            let assignment = {
                assignmentKey: action.assignment.assignmentKey.toString() || initialState.assignmentKey,
                placeKey: action.assignment.placeKey.toString() || initialState.placeKey,
                place: action.assignment.place || initialState.place,
                endAssignment: new Date(action.assignment.endAssignment + "Z") || initialState.endAssignment,
            }

            if (action.listAssignments === []) {
                return Object.assign({}, state, {
                    listAssignments: [assignment]
                });
            } else {
                let list = action.listAssignments;
                for (let i = 0; i < list.length; i++) {
                    if (list[i].assignmentKey === assignment.assignmentKey) {
                        assignment.place = list[i].place;
                        list[i] = assignment;
                        return Object.assign({}, state, {
                            listAssignments: list
                        });
                    }
                }

                list.push(assignment);
                return Object.assign({}, state, {
                    listAssignments: list
                });
            }
        }
        case ActionTypes.SET_PLACE_OF_ASSIGNMENT: {
            let place = {
                country: action.place.country || initialState.place.country,
                zipCode: action.place.zipCode || initialState.place.zipCode,
            }

            let list = action.listAssignments;
            for (let i = 0; i < list.length; i++) {
                if (list[i].assignmentKey === action.assignmentKey) {
                    list[i].place = place;
                    return Object.assign({}, state, {
                        listAssignments: list
                    });
                }
            }
            break;
        }

        default:
            return state;
    }
}