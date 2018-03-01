export function addPerson(person){
    return {
        type: "ADD_PERSON",
        person
    }
}

export function removePerson(person){
    return {
        type: "REMOVE_PERSON",
        person
    }
}

const reducer = (prevState={people: []}, action) => {
    switch (action.type) {
        case "ADD_PERSON":
            return {
                people: [action.person, ...prevState.people]
            }
        case "REMOVE_PERSON":
            const people = prevState.people.slice();
            const index = people.findIndex(person => action.person.name === person.name)
            people.splice(index, 1);
            return {
                people
            }
        default:
            return prevState
    }
}

export default reducer;
