var users = [  
    {
        firstName: "Billy",
        lastName: "Madison", 
        age: 32
    },
    {
        firstName: "Tommy",
        lastName: "Pickles", 
        age: 32
    },
    {
        firstName: "Ray",
        lastName: "Charles", 
        age: 32
    },
    {
        firstName: "Lady",
        lastName: "Gaga", 
        age: 32
    },
    {
        firstName: "Elizabeth",
        lastName: "Taylor", 
        age: 32
    },
    {
        firstName: "Led",
        lastName: "Zeplin", 
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson", 
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug", 
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster", 
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles", 
        age: 32
    },
]

const mySort = (users, sortAscending) => {
    if (sortAscending) {
        return users.reduce((total, person) => {
            let shifted = false;
            for (let i = 0; i < total.length; i++) {
                if (person.lastName < total[i].lastName) {
                    total.splice(i, 0, person);
                    shifted = true;
                    break;
                }
            }
            if (!shifted) {total.push(person)}
            return total;
        }, [])
    } else {
        return users.reduce((total, person) => {
            let shifted = false;
            for (let i = 0; i < total.length; i++) {
                if (person.lastName > total[i].lastName) {
                    total.splice(i, 0, person);
                    shifted = true;
                    break;
                }
            }
            if (!shifted) {total.push(person)}
            return total;
        }, [])
    }
}

console.log(mySort(users, true))
console.log(mySort(users, false))