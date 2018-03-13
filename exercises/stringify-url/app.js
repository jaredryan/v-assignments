const stringifyUrl = (endpoint, query) => {
    if (Object.keys(query).length === 0) {return endpoint}
    endpoint += "?"
    for (let key in query) {
        endpoint += key + "=" + query[key] + "&"
    }
    return endpoint.slice(0, -1);
}

const deStringify = url => {
    let queryArray = url.split("?")[1].split("&");
    let query = {}
    for (let property of queryArray) {
        let keyValueArray = property.split("=");
        query[keyValueArray[0]] = keyValueArray[1]
    }
    return query
}

let endpoint = "http://localhost:8080/monkeys";
let query = {
  color: "black",
  species: "howler"
};
const stringified = stringifyUrl(endpoint, query);
console.log(stringified);
const urlAndQuery = deStringify(stringified);
console.log(urlAndQuery);

//returns "http://localhost:8080/monkeys?color=black&species=howler"
