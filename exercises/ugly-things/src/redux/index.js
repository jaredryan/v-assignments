import { createStore } from 'redux';

export const addUgly = item => {
    return {
        type: "ADD_UGLY",
        item
    }
}

export const removeUgly = item => {
    return {
        type: "REMOVE_UGLY",
        item
    }
}

const initialState = {
    uglies: []
}

export const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "ADD_UGLY":
            return {
                uglies: [action.item, ...prevState.uglies]
            }
        case "REMOVE_UGLY":
            const uglies = prevState.uglies.slice();
            const index = uglies.findIndex(ugly => ugly.title === action.item.title);
            uglies.splice(index, 1);
            return {
                uglies
            }
        default:
            return prevState
    }
}

export default createStore(reducer);
