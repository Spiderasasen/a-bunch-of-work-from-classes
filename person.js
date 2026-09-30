function createPerson(firstName, lastName, birthDate) {
    const newPerson = {};
    newPerson.firstName = firstName;
    newPerson.lastName = lastName;
    newPerson.birthDate = birthDate;
    return newPerson;
}

//array of objects
function createParent(childPersonObject){
    const parentObject = promptAndCreatePerson();

    if(childPersonObject.parents === undefined){
        childPersonObject.parents = [];
    }
    childPersonObject.parents.push(parentObject);
}

function createParents(childPersonObject){
    createParent(childPersonObject);
    createParent(childPersonObject);
}

function promptAndCreatePerson(){
    const firstName = prompt("Enter a First name");
    const lastName = prompt("Enter a Last name");
    const birthDate = prompt("Enter a Birth date");

    const person = createPerson(firstName, lastName, birthDate);
    console.log(person);

    return person;
}

// function titleParents(person){
//     const firstName = person.firstName;
//     person.parents.forEach(parent => {
//        parent.title = firstName + "'s parent";
//     });
//
//     console.log(person);
// }
function titleParents(person){
    const firstName = person.firstName;

    const transformedArray = person.parents.map(parent => {
       parent.title = firstName + "'s parent "
       return parent;
    });

    console.log(person);
    console.log(transformedArray);
}

function mystery(person, string){
    const newArray = person.parents.filter(parent => parent.firstName.includes(string));

    return newArray;
}