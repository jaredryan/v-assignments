const redux = require('redux')

const state = {
    people: []
}

const addPerson = person => {
    return {
        type: "ADD_PERSON",
        person
    }
}

const removePerson = person => {
    return {
        type: "REMOVE_PERSON",
        person
    }
}

const reducer = (prevState=state, action) => {
    switch (action.type) {
        case "ADD_PERSON":
            return {
                people: [action.person, ...prevState.people]
            }
        case "REMOVE_PERSON":
            const copy = prevState.people
            const index = copy.findIndex(person => action.person === person)
            return {
                people: copy.splice(index, 1)
            }
        default:
            return prevState
    }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState());
});

const person = {
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
}

console.log(state);
store.dispatch(addPerson(person))
store.dispatch(removePerson(person))
console.log(state);
