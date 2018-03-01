const redux = require('redux');

const state = {
    counter: 0
}

const set = num => {
    return {
        type: "SET",
        num
    }
}

const reducer = (prevState=state, action) => {
    switch (action.type) {
        case "SET":
            return {
                counter: action.num
            }
        default:
            return prevState
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(set(5));
