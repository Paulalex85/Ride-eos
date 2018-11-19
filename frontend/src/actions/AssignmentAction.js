import { ActionTypes } from 'const';

class AssignmentAction {

    static setListAssignment({ listAssignments }) {
        return {
            type: ActionTypes.SET_LIST_ASSIGNMENTS,
            listAssignments,
        }
    }

    static setAssignment({ listAssignments, assignment }) {
        return {
            type: ActionTypes.SET_ASSIGNMENT,
            listAssignments,
            assignment
        }
    }

    static setPlaceOfAssignment({ listAssignments, assignmentKey, place }) {
        return {
            type: ActionTypes.SET_PLACE_OF_ASSIGNMENT,
            listAssignments,
            assignmentKey,
            place
        }
    }
}

export default AssignmentAction;