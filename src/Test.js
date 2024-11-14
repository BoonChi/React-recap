console.log('Hello')

const reverseString = (string) => {
    const newArray = []
    for(let i =string.length - 1; i >= 0; i--) {
        newArray.push(string[i])
    }
    return newArray.join('')
}

console.log(reverseString('Hello'))