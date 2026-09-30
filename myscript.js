console.log("Start code block C");

function copyArray(arrayToCopy) {
    let newArray = [];
    for (i=0;i<arrayToCopy.length;i++) {
        newArray[i] = arrayToCopy[i];
    }
    return newArray;

}

function addItemToArray(array,newItem) {
    array.push(newItem);
    return array;
}

function removeItemFromArray(array,valueToRemove) {
    let i = 0;
    for (arrayItem of array) {
        if (arrayItem == valueToRemove) {
            array.splice(i,1);
        }
        i++;
    }
    return array;
}

console.log("End code block C");