import { ActionTypes } from 'const';

class ScatterAction {

    static setScatter({ scatter }) {
        return {
            type: ActionTypes.SET_SCATTER,
            scatter
        }
    }
}

export default ScatterAction;