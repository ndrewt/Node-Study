const name = 'Andrew'
let age = 19
const hasHobbiies = true

const Hashobbie = (indeficator) => {
    if (indeficator = true) {
        return ('has ')
    } else {
        return ("hasn't")
    }
}

const Resulter = (userName, userAge, userHobiies) => {
        return (
            'User is ' + userName +
            ' User age is ' + userAge +
            ' User ' + Hashobbie(userHobiies) + ' hobbies'
        )

    }
    //const add = (a, b) => a + b
    //const one = (a) => a + 1
const none = () => 1 + 2


console.log(none())
    //console.log(one(100))
    //console.log(add(1, 203102))
    //console.log(Resulter(name, age, hasHobbiies))