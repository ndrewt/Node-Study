const person = {
    name: 'Andrew ',
    age: '29',
    greet() {
        console.log('hi i am ' + this.name)
    }
}

const hobbies = ['Basketball', 'Tennis', 'Some sports']
    //for (let hobby of hobbies) {
    //    console.log(hobby)
    //}

hobbies.push('Soccer')

//const copiedArray = [...hobbies]

//const toArray = (...args) => { //any numbers of arguments by ...args
//   return args
//}
const PrintName = (PersonData) => {
    console.log(PersonData.name)
}
const PrinttName = ({ name }) => {
    console.log(name)
}
const { name, age } = person


console.log(name, age)
    //PrintName(person)
    //PrinttName(person)
    //console.log(toArray(1, 2, 3, 4, 5, 6))
    //console.log(copiedArray)
    //console.log(hobbies)
    //console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
    //person.greet()