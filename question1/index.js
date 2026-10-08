const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            return reject("Inavlid input: you must enter an array");
        }
        const words = array.filter(
            (word) => typeof word === "string").map((word) => word.toLowerCase()
        )

        resolve(words);
    })    
}


//Test case
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
